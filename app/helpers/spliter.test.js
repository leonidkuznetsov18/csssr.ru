/* eslint-disable no-unused-expressions */

import spliter from './spliter';

describe('spliter helper', () => {
	it('should correctly split short strings', () => {
		spliter('12345', [1, 2, 3, 4, 5]).should.be.equal('1 23 45');
	});

	it('should correctly split normal strings', () => {
		spliter('1234567890', [1, 2, 3, 4]).should.be.equal('1 23 456 7890');
	});

	it('should correctly split long strings', () => {
		spliter('123456789', [1, 2, 3]).should.be.equal('1 23 456 789');
	});
});
