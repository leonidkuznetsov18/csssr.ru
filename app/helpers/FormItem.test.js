/* eslint-disable no-unused-expressions */

import FormItem from './FormItem';

describe('FormItem helper', () => {
	it('should create default FormItem', () => {
		const item = new FormItem('value', () => true);

		item.should.have.property('value', 'value');
		item.should.have.property('validate').to.be.a('function');
		item.should.have.property('showError', false);
	});

	it('should update values', () => {
		const item = new FormItem('value', () => true);

		item.should.have.property('value', 'value');
		item.should.have.property('validate').to.be.a('function');
		item.should.have.property('showError', false);
	});

	it('should convert to string correctly', () => {
		const item = new FormItem('value', () => true);
		item.toString().should.be.equal('value');
		('' + item).should.be.equal('value');
	});

	it('should validation work', () => {
		const validateFunction = value => value.length < 10;
		const item = new FormItem('value', validateFunction);
		item.isValid().should.be.true;
	});
});
