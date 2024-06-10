import express from 'express';
const app = express();
const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`This port is ${PORT}`);
// });
// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });
// app.use(express.json());
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
//   next();
// });
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world',
//     age: 32,
//     a: {
//       name: 'Panda',
//       gender: 'male',
//     },
//   });
// });
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// наприклад, у запитах POST або PATCH
app.use(express.json());

// Маршрут для обробки GET-запитів на '/'
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

// Middleware для обробких помилок (приймає 4 аргументи)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
