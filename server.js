const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const connectDB = require('./config/db');
connectDB();

const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(logger);
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('API is running'));

app.use('/api/products', productRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404);
  next(new Error('Not Found'));
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
