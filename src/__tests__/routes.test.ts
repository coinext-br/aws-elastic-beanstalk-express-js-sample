import {Express} from 'express';
import { configure } from '../routes';

describe('Routes', () => {
    let gets: { [x: string]: any; };
    const app = {
        get: (path: string, fn: any) => gets[path] = fn
    };

    beforeEach(() => gets = {});

    test('root', async () => {
        configure(app as Express);
        expect(gets['/']).toBeTruthy();
    });
});
