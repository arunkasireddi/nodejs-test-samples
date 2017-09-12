const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16).toBeA('number');
                done();
            });
        });
    });
    
    it('should subtract two numbers', () => {
        var res = utils.subtract(12, 10);
        if (res !== 2) {
            throw new Error(`Expected 2, but got ${res}`);
        }
    });
});

it('should verify first and last names are set', () => {
    var user = { location: 'Dublin', age: 28 };
    var res = utils.setName(user, "Arun Kumar");
    expect(res).toInclude({
        firstName: 'Arun',
        lastName: 'Kumar'
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);

//     // expect([2, 3, 4]).toInclude(4);
//     expect({
//         name: 'Arun',
//         age: 28,
//         location: 'Dublin'
//     }).toInclude({
//         age: 28
//     })
// });