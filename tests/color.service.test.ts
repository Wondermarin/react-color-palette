import assert from "assert";

import { ColorService } from "@/services/color";

function test(name: string, run: () => void) {
  run();
  process.stdout.write(`PASS ${name}\n`);
}

test("accepts complete hex colors without a leading hash", () => {
  assert.strictEqual(ColorService.toHex("FFFFFF"), "#FFFFFF");
  assert.strictEqual(ColorService.toHex("abc"), "#aabbcc");
  assert.strictEqual(ColorService.toHex("0f08"), "#00ff0088");
  assert.deepStrictEqual(ColorService.convert("hex", "11223380").rgb, {
    r: 17,
    g: 34,
    b: 51,
    a: 128 / 255,
  });
});

test("preserves hex colors that already have a leading hash", () => {
  assert.strictEqual(ColorService.toHex("#FFFFFF"), "#FFFFFF");
  assert.strictEqual(ColorService.toHex("#0f08"), "#00ff0088");
});

test("keeps CSS colors and incomplete hex values on the canvas path", () => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  let input = "";

  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      createElement: () => ({
        getContext: () => ({
          get fillStyle() {
            return input === "red" ? "#ff0000" : "#000000";
          },
          set fillStyle(value: string) {
            input = value;
          },
        }),
      }),
    },
  });

  try {
    assert.strictEqual(ColorService.toHex("red"), "#ff0000");
    assert.strictEqual(ColorService.toHex("FFFFF"), "#000000");
    assert.strictEqual(input, "FFFFF");
  } finally {
    if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
    else Reflect.deleteProperty(globalThis, "document");
  }
});
