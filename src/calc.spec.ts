import calc from './calc';

describe('Calc', () => {
  	test('should return 10 for add(6, 4)', () => {
	  	expect(calc.add(6, 4)).toBe(10);
  	});
  	test('should return 9 for add(10, -1)', () => {
    	expect(calc.add(10, -1)).toBe(9);
    });
      
	test('should return 3 for sub(7, 4)', () => {
		expect(calc.sub(7, 4)).toBe(3);
	});
	test('should return 2 for sub(10, -8)', () => {
		expect(calc.sub(10, 8)).toBe(2);
	});
 
	test('should return 6 for multi(2, 3)', () => {
		expect(calc.multi(2, 3)).toBe(6);
	});
	test('should return 15 for multi(3, 5)', () => {
		expect(calc.multi(3, 5)).toBe(15);
	});

	test('should return 4 for divide(12, 3)', () => {
		expect(calc.devide(12, 3)).toBe(4);
	});
	test('should return 2 for divide(8, 4)', () => {
		expect(calc.devide(8, 4)).toBe(2);
	})
});