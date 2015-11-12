import validate from 'helpers/validate';

export default {
  form: {
    name: {
      value: '',
      validate: value => validate(value).notEmpty().lessThen(100).end()
    },
    email: {
      value: '',
      validate: value => validate(value).notEmpty().lessThen(100).isEmail().end()
    },
    skype: {
      value: '',
      validate: value => validate(value).notEmpty().lessThen(100).end()
    },
    phone: {
      value: '',
      validate: value => validate(value).notEmpty().lessThen(20).moreThen(10).end()
    }
  }
};
