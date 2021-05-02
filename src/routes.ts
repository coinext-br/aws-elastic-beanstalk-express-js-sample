export function configure(app) {
    app.get('/', (req, res) => {
        console.log('Request /');
        res.send('Hello AWS! With jobs!');
    });
}
