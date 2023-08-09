import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

test("edge case", function () {
    let arr = [false, true, true, true, true];
    let arr2 = [true, true, true, true, true];

    expect(two_crystal_balls(arr)).toEqual(1);
    expect(two_crystal_balls(arr2)).toEqual(0);
});
