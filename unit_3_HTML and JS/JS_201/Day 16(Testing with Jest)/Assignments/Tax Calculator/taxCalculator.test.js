import tax from "./tax_calculator";

test("testing tax", () => {
    expect(tax(15000)).toBe(15000);
});