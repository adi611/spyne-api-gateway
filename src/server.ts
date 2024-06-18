import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const app = express();

app.use('/api', routes);

const PORT = process.env.PORT || 9093;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
