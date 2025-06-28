import { RequireExactlyOne } from 'type-fest';
import { Bank, banks } from './banks';

export const getBanksBy = (params: RequireExactlyOne<Omit<Bank, 'logo'>>) => {
    const [[key, value]] = Object.entries(params) as [[keyof Bank, string]];

    return banks.filter(bank => bank[key].toLowerCase().includes(value.toLowerCase()));
};
