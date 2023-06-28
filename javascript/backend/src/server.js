const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Init server in ${port}, link: https://localhost:${port}`));
