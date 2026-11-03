// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeMobile } from "./leads.ts";

test("normalizeMobile accepts common Indian mobile formats", () => {
  assert.equal(normalizeMobile("9971143143"), "9971143143");
  assert.equal(normalizeMobile("+91 99711-43143"), "9971143143");
  assert.equal(normalizeMobile("919971143143"), "9971143143");
  assert.equal(normalizeMobile("09971143143"), "9971143143");
});

test("normalizeMobile rejects invalid numbers", () => {
  assert.equal(normalizeMobile(""), null);
  assert.equal(normalizeMobile("12345"), null);
  assert.equal(normalizeMobile("5971143143"), null); // must start 6-9
  assert.equal(normalizeMobile("12349971143143"), null); // extra digits are not trimmed away
});
