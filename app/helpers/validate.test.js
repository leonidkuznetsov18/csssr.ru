/* eslint-disable no-unused-expressions */

import validate from './validate';


describe('validate helper', () => {
	it('should work if parameter is a string', () => {
		(() => validate('test')).should.not.throw(Error);
	});

	it('should throw error if parameter not a string', () => {
		(() => validate(123)).should.throw('Parameter must be a string');
		(() => validate({})).should.throw('Parameter must be a string');
		(() => validate([])).should.throw('Parameter must be a string');
		(() => validate(new Error('test'))).should.throw('Parameter must be a string');
		(() => validate(null)).should.throw('Parameter must be a string');
		(() => validate()).should.throw('Parameter must be a string');
		(() => validate(undefined)).should.throw('Parameter must be a string');
		(() => validate(NaN)).should.throw('Parameter must be a string');
		(() => validate(() => null)).should.throw('Parameter must be a string');
	});

	it('.end() should return boolean', () => {
		validate('something').end().should.be.bool;
	});

	it('should works notEmpty()', () => {
		validate('').notEmpty().end().should.be.false;
		validate('test').notEmpty().end().should.be.true;
	});

	it('should works isEmail()', () => {
		validate('test@test.com').isEmail().end().should.be.true;
		validate('supertest@with-dash.ru').isEmail().end().should.be.true;
		validate('name.and.surname@coffee.ru').isEmail().end().should.be.true;
		validate('whithout-at.coffee.ru').isEmail().end().should.be.false;
		validate('whithout-dot@coffeeru').isEmail().end().should.be.false;
		validate('whithout-dot-and-at').isEmail().end().should.be.false;
		validate('not-domen@.com').isEmail().end().should.be.false;
		validate('not-domen-zone@csssr.').isEmail().end().should.be.false;
		validate('').isEmail().end().should.be.false;
	});

	it('should works isInt()', () => {
		validate('123').isInt().end().should.be.true;
		validate('1230238475987').isInt().end().should.be.true;
		validate('').isInt().end().should.be.false;
		validate('123.0').isInt().end().should.be.false;
		validate('.1').isInt().end().should.be.false;
		validate('3,1').isInt().end().should.be.false;
	});

	it('should works lessThen()', () => {
		validate('1234567').lessThen(8).end().should.be.true;
		validate('1234567').lessThen(7).end().should.be.false;
		validate('1234567').lessThen(5).end().should.be.false;
	});

	it('should works moreThen()', () => {
		validate('1234567').moreThen(6).end().should.be.true;
		validate('1234567').moreThen(7).end().should.be.false;
		validate('1234567').moreThen(8).end().should.be.false;
	});
});
