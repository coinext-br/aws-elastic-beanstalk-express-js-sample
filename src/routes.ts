import {Express} from 'express';

export function configure(app: Express) {
    app.get('/', (_req, res) => {
        console.log('Request /');
        res.send('Hello AWS =P');
    });
}
