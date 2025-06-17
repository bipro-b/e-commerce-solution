import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5002;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
  });
});
