import { configure } from '../routes';

describe('Routes', () => {
    let gets;
    const app = {
        get: (path, fn) => gets[path] = fn
    };

    beforeEach(() => gets = {});

    test('root', async () => {
        configure(app);
        expect(gets['/']).toBeTruthy();
    });
});
