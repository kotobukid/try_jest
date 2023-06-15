const myMath = require("../funcs/math.ts");

describe('四則演算', () => {
    test('add', () => {
        expect(myMath.add(100, 200)).toBe(300);
    });
});