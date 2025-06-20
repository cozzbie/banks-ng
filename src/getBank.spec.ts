import { expect } from 'expect';
import { getBank } from './getBank';

describe('Get Bank', () => {
    it('should get a single bank', () => {
        const bank = getBank(1);

        expect(bank).toEqual({
            name: expect.any(String),
            slug: expect.any(String),
            code: expect.any(String),
            ussd: expect.any(String),
            logo: expect.any(String),
            address: expect.any(String),
        });
    });
});
