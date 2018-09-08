import express from 'express';
import chalk from 'chalk';
const app = express();

app.get('/ping', (req, res) => {
    res.json({ msg: 'pong' });
})

const HOST = "localhost";
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${chalk.blue('[App Start]')} Application is listening on http://${HOST}:${PORT}/`);
})