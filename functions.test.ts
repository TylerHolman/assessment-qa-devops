const {shuffleArray} = require('./utils')

const arrTest = [1, 2, 3, 4]
describe('shuffleArray should', () => {
    test(`make sure shuffle returns an array`, () => {
        expect(Array.isArray(shuffleArray(arrTest))).toBe(true)
    });
    it(`should return an array of same length`, () => {
        expect(shuffleArray(arrTest)).toHaveLength(4)
    })
    test(`items have been shuffled`, () => {
        let result = shuffleArray(arrTest);
        expect(result.join()).not.toEqual(arrTest.join())
    });
})