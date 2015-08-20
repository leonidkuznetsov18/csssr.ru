# CSSSR.RU

## Запуск

### `develop` версия

#### Для всех
```
npm run dev
```

#### Для Windows пользователей

Запускать в 2 консоли:

- Запуск `webpack`
```
npm run webpack-dev
```

- Запуск сервера
```
NODE_ENV=development NODE_PATH=./node_modules:./app babel-node server/server
```

### `production` версия
```
npm run master
```
