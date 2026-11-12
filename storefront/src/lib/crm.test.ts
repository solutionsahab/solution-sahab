// File: storefront/src/lib/crm.test.ts
// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { insertLead } from "./crm.ts";

Object.assign(process.env, {
  CRATIO_API_KEY: "test-key",
  CRATIO_LEAD_CREATED_BY: "a",
  CRATIO_ASSIGNED_TO: "b",
});

function fakeCratio(replies: object[]) {
  const sent: Record<string, string>[] = [];
  globalThis.fetch = (async (_url: URL, init: RequestInit) => {
    sent.push(JSON.parse(init.body as string).records[0]);
    return new Response(JSON.stringify(replies[sent.length - 1]));
  }) as typeof fetch;
  return sent;
}

test("sends the chosen product in Cratio's Product field", async () => {
  const sent = fakeCratio([{ status: "success" }]);
  assert.deepEqual(await insertLead({ name: "A", phone: "9971143143", address: "x", product: "Skylight" }), { ok: true });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].Product, "Skylight");
  assert.equal(sent[0].Catagory, "");
});

test("saves the lead without Product and Catagory when Cratio refuses them", async () => {
  const sent = fakeCratio([{ status: "error" }, { status: "success" }]);
  assert.deepEqual(await insertLead({ name: "A", phone: "9971143143", address: "x", product: "Other" }), { ok: true });
  assert.equal(sent.length, 2);
  assert.equal("Product" in sent[1], false);
  assert.equal("Catagory" in sent[1], false);
});

test("no product: no Product field; fails only after the retry fails", async () => {
  const sent = fakeCratio([{ status: "error" }, { status: "error" }]);
  assert.deepEqual(await insertLead({ name: "A", phone: "9971143143", address: "x" }), { ok: false });
  assert.equal(sent.length, 2);
  assert.equal("Product" in sent[0], false);
});
