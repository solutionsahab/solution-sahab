# Generates branded 1200x630 Open Graph cards into public/og/<name>.jpg.
# Run from storefront/:  python scripts/make-og.py
# Page data is read from the TS sources with regexes; the script fails loudly if parsing finds nothing.
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "og"
LIB = ROOT / "src" / "lib"

W, H = 1200, 630
NAVY = (15, 27, 51)
BLUE = (27, 77, 142)
MUTED = (178, 194, 219)
PHONE = "+91 9971-143-143"
MAX_BYTES = 150_000
PAD = 64           # safe margin
TEXT_W = 460       # text column width inside the navy panel
PHOTO_X = 470      # photo starts here; panel gradient fades over its left edge

FONT_BOLD = str(ROOT / "src" / "fonts" / "Gilroy-ExtraBold.otf")
FONT_LIGHT = str(ROOT / "src" / "fonts" / "Gilroy-Light.otf")


def read(name):
    return (LIB / name).read_text(encoding="utf-8")


def parse_assets():
    """ASSETS.X.Y -> "/images/..." from constants.ts (tracks object nesting line by line)."""
    assets, stack = {}, []
    body = read("constants.ts").split("export const ASSETS = {", 1)[1].split("\n};", 1)[0]
    for line in body.splitlines():
        if m := re.match(r"\s*(\w+):\s*\{\s*$", line):
            stack.append(m.group(1))
        elif re.match(r"\s*\},?\s*$", line):
            stack.pop()
        elif m := re.match(r'\s*(\w+):\s*"([^"]+)"', line):
            assets[".".join(["ASSETS", *stack, m.group(1)])] = m.group(2)
    return assets


ASSETS = parse_assets()


def resolve(ref):
    ref = ref.strip()
    return ref.strip('"') if ref.startswith('"') else ASSETS[ref]


def top_blocks(text):
    """Yields (slug, body) for each `  key: {\\n    slug: "..."` entry of a top-level Record."""
    parts = re.split(r'^  "?[\w-]+"?: \{\n    slug: "([^"]+)"', text, flags=re.M)
    return zip(parts[1::2], parts[2::2])


def hero(body):
    h = body.split("    hero: {", 1)[1]
    name = re.search(r'productName:\s*"([^"]+)"', h).group(1)
    image = resolve(re.search(r"heroImage:\s*([\w.]+|\"[^\"]+\")", h).group(1))
    tag = re.search(r'brandTag:\s*"[^|"]*\|\s*([^"]+)"', h).group(1)
    badges = re.findall(r'"([^"]+)"', h.split("badges: [", 1)[1].split("]", 1)[0])
    return name, image, tag, badges


def pages():
    out = [
        # name, eyebrow, title, subtitle, image
        ("home", "Delhi NCR", "Modern Safety. Unobstructed Views.",
         "Invisible grills, pleated mesh & partitions", "/images/products/invisible-grills/balcony-sunset.webp"),
        ("who-we-are", "About us", "About Solution Sahab", "Our story, our values and how we work",
         "/images/gallery/exhibition-stall.webp"),
        ("contact-us", "Contact", "Book a Site Visit", "Engineers across Delhi NCR, written quote on the spot",
         "/images/gallery/gurgaon-highrise.jpg"),
        ("gallery", "Gallery", "Installation Gallery", "Real projects across Delhi NCR",
         ASSETS["ASSETS.PHOTOS.INVISIBLE_GRILLS.COURTYARD_VOID"]),
        ("our-team", "Our team", "Installers & Engineers", "The people who measure, make and fit",
         "/images/team/team-11.jpg"),
        ("blog-list", "Blog", "Invisible Grill & Mesh Guides", "Job stories and honest guides",
         ASSETS["ASSETS.PHOTOS.INVISIBLE_GRILLS.CABLE_CLOSEUP"]),
        ("privacy-policy", "Legal", "Privacy Policy", "How we handle your details",
         ASSETS["ASSETS.PHOTOS.INVISIBLE_GRILLS.FACADE"]),
        ("razorpaymesolutionsahab8809", "Payments", "Secure Payments", "Pay Solution Sahab online",
         ASSETS["ASSETS.PHOTOS.INVISIBLE_GRILLS.EVENING_BALCONY"]),
    ]

    products = {}
    for key, body in top_blocks(read("product-page-configs.ts")):
        name, image, tag, badges = hero(body)
        products[key] = image
        out.append((key, tag, name, "  ·  ".join(badges[:2]), image))
    use_cases = list(top_blocks(read("use-case-pages.ts")))
    for key, body in use_cases:
        name, image, tag, badges = hero(body)
        out.append((key, tag, name, "  ·  ".join(badges[:2]), image))

    # City pages: title is `${tpl.name} in ${city.name}`, image is the base product's hero.
    city_src = read("city-pages.ts")
    cities = re.findall(r'^  (\w+): \{\n    name: "([^"]+)",\n    state: "([^"]+)"', city_src, re.M)
    templates = re.findall(r'^  "([a-z-]+)": \{\n    name: "([^"]+)"', city_src, re.M)
    for key, tname in templates:
        for ckey, cname, state in cities:
            out.append((f"{key}-{ckey}", f"{cname}, {state}", f"{tname} in {cname}",
                        f"Site visit & written quote in {cname}", products[key]))

    blog = read("blog.ts").split("export const BLOG_POSTS", 1)[1]
    for post in re.split(r"^  \{\n(?=    slug:)", blog, flags=re.M)[1:]:
        slug = re.search(r'^    slug: "([^"]+)"', post, re.M).group(1)
        title = re.search(r'^    title: "([^"]+)"', post, re.M).group(1)
        date = re.search(r'^    dateLabel: "([^"]+)"', post, re.M).group(1)
        img = re.search(r"^    image: \{\n      src: ([\w.]+|\"[^\"]+\")", post, re.M)
        image = resolve(img.group(1)) if img else "/images/products/invisible-grills/balcony-sunset.webp"
        out.append((slug, "Solution Sahab Blog", title, date, image))

    # self-check: parsing found every group and names are unique
    groups = {"products": len(products), "use cases": len(use_cases), "cities": len(cities),
              "city products": len(templates), "posts": blog.count("\n    slug:")}
    assert all(groups.values()), f"TS parsing broke: {groups}"
    assert len(out) == len({p[0] for p in out}), "duplicate OG names"
    return out


def cover(img, w, h):
    return ImageOps.fit(img.convert("RGB"), (w, h), Image.LANCZOS, centering=(0.5, 0.45))


def wrap(text, font, width):
    lines, cur = [], ""
    for word in text.split():
        trial = f"{cur} {word}".strip()
        if font.getlength(trial) <= width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    return lines + [cur]


def fit_title(text):
    for size in range(64, 33, -2):
        font = ImageFont.truetype(FONT_BOLD, size)
        lines = wrap(text, font, TEXT_W)
        fits = len(lines) <= 2 or (len(lines) == 3 and size <= 50)  # 3-line titles stay smaller
        if fits and all(font.getlength(l) <= TEXT_W for l in lines):
            return font, lines
    lines = wrap(text, font, TEXT_W)  # still too long at the smallest size: clip line 3
    if len(lines) > 3:
        last = lines[2]
        while font.getlength(last + "…") > TEXT_W:
            last = last.rsplit(" ", 1)[0]
        lines = lines[:2] + [last.rstrip(",:;–-") + "…"]
    return font, lines


def panel_mask():
    """Solid navy to x=520, eased fade to transparent by x=760."""
    solid, fade = 520, 240
    ramp = Image.linear_gradient("L").rotate(-90, expand=True).resize((fade, H))  # 255 -> 0 left to right
    ramp = ramp.point(lambda v: int(255 * (v / 255) ** 1.6))
    mask = Image.new("L", (W, H), 0)
    mask.paste(255, (0, 0, solid, H))
    mask.paste(ramp, (solid, 0))
    return mask


MASK = panel_mask()
LOGO = Image.open(PUBLIC / "images" / "logo.png").convert("RGBA")


def render(eyebrow, title, subtitle, image_path):
    card = Image.new("RGB", (W, H), NAVY)
    photo = cover(Image.open(PUBLIC / image_path.lstrip("/")), W - PHOTO_X, H)
    card.paste(photo, (PHOTO_X, 0))
    card.paste(Image.new("RGB", (W, H), NAVY), (0, 0), MASK)
    d = ImageDraw.Draw(card)

    # logo on a white pill (logo lettering is dark charcoal on transparency)
    lh = 34
    logo = LOGO.resize((round(LOGO.width * lh / LOGO.height), lh), Image.LANCZOS)
    pill = (PAD, 52, PAD + logo.width + 40, 52 + lh + 26)
    d.rounded_rectangle(pill, radius=(pill[3] - pill[1]) // 2, fill="white")
    card.paste(logo, (PAD + 20, 52 + 13), logo)

    # text block, vertically centred between the logo and the phone line
    f_eye = ImageFont.truetype(FONT_BOLD, 17)
    f_sub = ImageFont.truetype(FONT_LIGHT, 25)
    f_title, t_lines = fit_title(title)
    while "  ·  " in subtitle and f_sub.getlength(subtitle) > TEXT_W:  # badge lists stay on one line
        subtitle = subtitle.rsplit("  ·  ", 1)[0]
    s_lines = wrap(subtitle, f_sub, TEXT_W)[:2]
    t_lh = round(f_title.size * 1.1)
    block = 20 + 22 + 6 + len(t_lines) * t_lh + 18 + len(s_lines) * 33
    y = 140 + (380 - block) // 2

    x = PAD
    for ch in eyebrow.upper():  # letter-spaced eyebrow
        d.text((x, y), ch, font=f_eye, fill=MUTED)
        x += f_eye.getlength(ch) + 2.5
    y += 20 + 16
    d.rectangle((PAD, y, PAD + 56, y + 5), fill=BLUE)
    d.rectangle((PAD + 56, y + 2, PAD + 56 + 120, y + 3), fill=(46, 64, 98))
    y += 5 + 22
    for line in t_lines:
        d.text((PAD, y), line, font=f_title, fill="white")
        y += t_lh
    y += 18
    for line in s_lines:
        d.text((PAD, y), line, font=f_sub, fill=MUTED)
        y += 33

    # phone, small in the bottom-left corner of the panel
    f_ph = ImageFont.truetype(FONT_BOLD, 20)
    d.text((PAD, H - PAD - 14), PHONE, font=f_ph, fill="white", anchor="ls")
    d.text((PAD + f_ph.getlength(PHONE) + 14, H - PAD - 14), "solutionsahab.com",
           font=ImageFont.truetype(FONT_LIGHT, 20), fill=MUTED, anchor="ls")

    d.rectangle((0, H - 8, W, H), fill=BLUE)  # accent bar
    return card


def save(card, path):
    for q in (82, 78, 74, 70):
        card.save(path, "JPEG", quality=q, optimize=True, progressive=True)
        if path.stat().st_size <= MAX_BYTES:
            return


def main():
    OUT.mkdir(exist_ok=True)
    items = pages()
    for name, eyebrow, title, subtitle, image in items:
        save(render(eyebrow, title, subtitle, image), OUT / f"{name}.jpg")
    total = sum((OUT / f"{p[0]}.jpg").stat().st_size for p in items)
    print(f"{len(items)} cards, {total / 1024:.0f} KB total -> {OUT}")


if __name__ == "__main__":
    main()
