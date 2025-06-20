import { banks } from './banks';

export const getBanks = () => {
    const out = [] as { id: number; name: string }[];
    let i = 0;

    for (const { name } of banks) {
        out.push({ id: i++, name });
    }

    return out;
};
