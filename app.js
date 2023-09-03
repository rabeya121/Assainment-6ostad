const express = require('express');
const app = express();
const apiRoutes = require('./src/Routes/api');

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});