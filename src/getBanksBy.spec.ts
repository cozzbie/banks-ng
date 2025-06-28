import { expect } from 'expect';
import { getBanksBy } from './getBanksBy';

describe('Get Banks By', () => {
    it('should get a bank by a partial name', () => {
        const list = getBanksBy({ name: 'Abbey' });

        expect(list).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: 'Abbey Mortgage Bank',
                logo: expect.any(String)
            }),
        ]));
    });

    it('should get a bank by its code', () => {
        const list = getBanksBy({ code: '050' });

        expect(list).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: 'Ecobank Nigeria',
                logo: expect.any(String)
            }),
        ]));
    });

    it('should get a bank by a partial entry of an address', () => {
        const list = getBanksBy({ address: 'Ahmadu Bello Way' });

        expect(list).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: 'Ecobank Nigeria',
                logo: expect.any(String)
            }),
            expect.objectContaining({
                name: 'TAJ Bank',
                logo: expect.any(String)
            }),
        ]));
    });
});
