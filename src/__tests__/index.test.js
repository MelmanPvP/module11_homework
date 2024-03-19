// import { multiply } from "../index.js";
//
// xdescribe("test multiply", () => {
//   it("multiply 1 * 0 to equal 0", () => {
//     const result = multiply(1, 0);
//     expect(result).toBe(0);
//   }),
//     it("multiply 1 * 1 to equal 1", () => {
//       const result = multiply(1, 1);
//       expect(result).toBe(1);
//     });
// });
import {getPercents} from "../index";
describe('', () => {
    it('40 percents of 400 is equal to 160', () => {
            const result = getPercents(40, 400);
            expect(result).toBe(160);
        })
    it('70 percents of 890 is equal to 623', () => {
        const result = getPercents(70, 890);
        expect(result).toBe(623);
    })
    it('20 percents of 100 is equal to 30', () => {
                const result = getPercents(20, 100);
                expect(result).toBe(30);
            })

    }
);
