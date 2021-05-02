import * as express from 'express';
import { configure } from './routes';

const app = express();
const port = 8080;

configure(app);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
