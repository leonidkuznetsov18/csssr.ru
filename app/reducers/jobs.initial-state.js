import validate from 'helpers/validate';

export default {
  'technical-manager': {
    name: 'Менеджер-технарь',
    key: 'technical-manager',
    form: {
      firstname: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      lastname: {
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
      file: {
        value: {
          name: 'Прикрепите решение квеста',
          type: ''
        },
        validate: value => validate(value.type).notEmpty().end()
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
    key: 'pixel-perfectionist',
    form: {
      firstname: {
        value: '',
        validate: value => validate(value).notEmpty().lessThen(100).end()
      },
      lastname: {
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
      file: {
        value: {
          name: 'Прикрепите zip-архив',
          type: ''
        },
        validate: value => validate(value.type).notEmpty().end()
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
