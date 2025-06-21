import { expect } from 'expect';
import { getBanks } from './getBanks';

describe('Get Banks', () => {
    it('should get a single list of bank names', () => {
        const list = getBanks();

        expect(list).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: 0,
                name: 'Abbey Mortgage Bank'
            }),
            expect.objectContaining({
                id: 1,
                name: 'Above Only MFB'
            })
        ]));
    });
});
