import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors(
  {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000"
      // add production url
    ],
    credentials : true,
    // methods : [
    //   "get",
    //   "post",
    //   "put",
    //   "delete"
    // ],
    // allowedHeaders : ["Content-Type", "Authorization"]
  }
));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'This is a message from the server.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
