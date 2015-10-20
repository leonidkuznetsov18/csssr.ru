import jobs from './jobs';
import validate from 'helpers/validate';
import FormItem from 'helpers/FormItem';

describe('jobs :: ADD_JOB', () => {

	it('should add default job', () => {
		const initialState = {};
		const action = {
			type: 'ADD_JOB',
			name: 'test name'
		};
		const initialStateCopy = Object.assign({}, initialState);
		const state = jobs(initialState, action);

		state.should.has.key(action.name);
		state[action.name].should.has.keys('name', 'form');
		state[action.name].form.should.has.keys(
			'name',
			'surname',
			'age',
			'city',
			'filename',
			'filepath',
			'email',
			'skype',
			'phone'
		);
		initialState.should.be.deep.equal(initialStateCopy);
	});

	it('should change form', () => {
		const initialState = {
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
		const initialStateCopy = Object.assign({}, initialState);
		const action = {
			type: 'CHANGE_ANSWER_FORM',
			job: 'test',
			form: {
				name: {value: 'new name'},
				age: {value: 34}
			}
		};

		const state = jobs(initialState, action);

		state[action.job].form.should.has.deep.property('name.value', 'new name');
		state[action.job].form.should.has.deep.property('age.value', 34);
		initialState.should.be.deep.equal(initialStateCopy);
	});

});
