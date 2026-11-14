// The tags in app/layout.tsx only count the first page; this counts each in-app page change too.
type Tracker = (...args: unknown[]) => void;
const w = window as unknown as { gtag?: Tracker; fbq?: Tracker };

export function onRouterTransitionStart(url: string) {
  w.fbq?.("track", "PageView");
  w.gtag?.("event", "page_view", {
    send_to: "AW-11411388281",
    page_location: new URL(url, location.origin).href,
  });
}
