import validate from 'helpers/validate';

export default {
  'technical-manager': {
    name: 'Менеджер-технарь',
    form: {
      name: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      surname: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      age: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).isInt().end()
      },
      city: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      filename: {
        value: 'Прикрепите решение квеста',
      },
      filepath: {
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
        validate: value => validate(value).notEmpty().lessThen(100).end()
      }
    }
  },
  'pixel-perfectionist': {
    name: 'Верстальщик пиксель-перфекционист',
    form: {
      name: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      surname: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      age: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).isInt().end()
      },
      city: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      filename: {
        value: 'Прикрепите zip-архив',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      filepath: {
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
        validate: value => validate(value).notEmpty().lessThen(100).end()
      }
    }
  }
}
