import validate from 'helpers/validate';

export default {
  form: {
    options: {
      modernBrowsers: [
        {
          name: 'Chrome 45',
          isChecked: true
        },
        {
          name: 'Firefox 41',
          isChecked: true
        },
        {
          name: 'Safari 9',
          isChecked: true
        },
        {
          name: 'Opera 32',
          isChecked: true
        },
        {
          name: 'Edge (Windows 10)',
          isChecked: true
        },
      ],

      oldBrowsers: [
        {
          name: 'Safari 8',
          isChecked: true
        },
        {
          name: 'Internet Explorer 11',
          isChecked: true
        },
        {
          name: 'Internet Explorer 10',
          isChecked: false
        },
        {
          name: 'Internet Explorer 9',
          isChecked: false
        },
        {
          name: 'Internet Explorer 8',
          isChecked: false
        },
        {
          name: 'Opera 12',
          isChecked: false
        },
      ],

      mobile: [
        {
          name: 'Safari 9 (iOS 9)',
          isChecked: true
        },
        {
          name: 'Safari 8 (iOS 8)',
          isChecked: true
        },
        {
          name: 'Chrome 45 (iOS 9)',
          isChecked: true
        },
        {
          name: 'Chrome 45 (Android 6)',
          isChecked: true
        },
        {
          name: 'Chrome 44 (Android 5)',
          isChecked: true
        },
        {
          name: 'IE 11 (Windows Phone 8.1)',
          isChecked: false
        },
      ],

      pagesWidth: [
        {
          name: 'Фиксированная (Static)',
          isChecked: true
        },
        {
          name: 'Резиновая (Liquid)',
          isChecked: false
        },
        {
          name: 'Адаптивная (Adaptive)',
          isChecked: false
        },
        {
          name: 'Отзывчивая (Responsive)',
          isChecked: false
        },
      ],

      addition: [
        {
          name: 'Pixel Perfect',
          isChecked: false,
          tip: {
            link: '?',
            text: 'По умолчанию мы допускаем погрешность до 5 пикселей в размерах блоков, отступов и плашек. Однако, по вашей просьбе, мы готовы подогнать вёрстку под макет со 100% соответствием.'
          }
        },
        {
          name: 'Требуется поддержка Retina-дисплеев',
          isChecked: false
        },
        {
          name: 'Очень срочный проект',
          isChecked: false
        },
      ],
    },

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
