import * as actionCreators from 'actions/jobs';
import jobs from './jobs';
import validate from 'helpers/validate';
import FormItem from 'helpers/FormItem';

const simpleInitialState = {
	test: {
		name: 'test',
		form: {
			name: new FormItem('name', value => validate(value).notEmpty().end()),
			surname: new FormItem('surname', value => validate(value).notEmpty().end()),
			age: new FormItem('age', value => validate(value).notEmpty().end()),
			city: new FormItem('city', value => validate(value).notEmpty().end()),
			filename: new FormItem('filename', value => validate(value).notEmpty().end()),
			filepath: new FormItem('filepath', value => validate(value).notEmpty().end()),
			email: new FormItem('email', value => validate(value).notEmpty().end()),
			skype: new FormItem('skype', value => validate(value).notEmpty().end()),
			phone: new FormItem('phone', value => validate(value).notEmpty().end())
		}
	}
};

let initialState;

describe('jobs reducers', () => {

	beforeEach(() => {
		initialState = Object.assign({}, simpleInitialState);
	});

	afterEach(() => {
		initialState.should.be.deep.equal(simpleInitialState);
	});

	it('should change form', () => {
		const action = actionCreators.changeAnswerForm( 'test', { name: {value: 'new name'}, age: {value: 34} });
		const state = jobs(initialState, action);

		state[action.job].form.should.has.deep.property('name.value', 'new name');
		state[action.job].form.should.has.deep.property('age.value', 34);
	});

	it('should not throw error if job exist', () => {
		const action = actionCreators.sendAnswerForm('test');
		const state = () => jobs(initialState, action);

		state.should.not.throw('Invalid job name');
	});

	it('should throw error if job does not exist', () => {
		const action = actionCreators.sendAnswerForm('unknown_job');
		const state = () => jobs(initialState, action);

		state.should.throw('Invalid job name');
	});

	it('should show errors', () => {
		const action = actionCreators.showFormErrors('test');
		const state = jobs(initialState, action);

		const form = state[action.job].form;
		for (const key in form) if (form.hasOwnProperty(key)) {
			form[key].should.have.property('showError', true);
		}
	});

});
