import validate from 'helpers/validate';
import options from './order-options.yml';

export default {
  form: {
    showErrorWindow: false,
    options,

    contacts: {
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
        validate: value => validate(value).notEmpty().lessThen(100).moreThen(10).end()
      },
    },
    filesLink: '',
    files: []
  }
};
