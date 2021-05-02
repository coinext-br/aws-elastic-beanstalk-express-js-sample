async function run() {
    setInterval(() => console.log('Alone again, naturally'), 5000);
}

run().then(() => 'Done').catch(e => console.error(e));
