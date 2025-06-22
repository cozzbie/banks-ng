import { banks } from './banks';

export const getBanks = () => {
    const out = [] as { id: number; name: string; logo: string }[];
    let i = 0;

    for (const { name, logo } of banks) {
        out.push({ id: i++, name, logo });
    }

    return out;
};
