import express from 'express';
import cookieParser from 'cookie-parser';
import router from './Routes/authRoutes.js';
import cors from "cors"
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

console.log("Server is starting...");

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});