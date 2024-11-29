const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/expenses', expenseRoutes);

// Database Sync
sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
  });
});
