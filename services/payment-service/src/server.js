import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5004;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
  });
});