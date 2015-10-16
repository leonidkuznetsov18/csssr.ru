import jobs from './jobs';

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
					name: 'name',
					surname: 'surname',
					age: 'age',
					city: 'city',
					filename: 'filename',
					filepath: 'filepath',
					email: 'email',
					skype: 'skype',
					phone: 'phone'
				}
			}
		};
		const initialStateCopy = Object.assign({}, initialState);
		const action = {
			type: 'CHANGE_ANSWER_FORM',
			job: 'test',
			form: {
				name: 'new name',
				age: 34
			}
		};

		const state = jobs(initialState, action);

		state[action.job].form.should.has.property('name', 'new name');
		state[action.job].form.should.has.property('age', 34);
		initialState.should.be.deep.equal(initialStateCopy);
	});

});
