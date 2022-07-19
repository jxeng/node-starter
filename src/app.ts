import express, { json } from 'express';
import helmet from 'helmet';

const port = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(helmet());

app.get('/', (_, res) => {
  res.send({
    msg: `Server ${process.env.NODE_ENV} environment!`,
  });
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

app.listen(port, function () {
  console.log(`Running at port: ${port}`);
});

export { app };
