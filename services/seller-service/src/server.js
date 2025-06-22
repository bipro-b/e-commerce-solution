import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5006;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
  });
});