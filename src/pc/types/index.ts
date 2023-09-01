import { Op } from 'sequelize';

export interface PcQueryProps {
    limit: string;
    sortBy:"popularity" | "new" | 'cheap' | 'expensive';
    offset: string;
    pc: string  | undefined;
    parts: string | undefined;
    priceFrom: string | undefined;
    priceTo: string | undefined;
}
export interface IBoilerPartsFilter {
    pc_manufactures: string[] | undefined;
    parts_manufactures: string[] | undefined;
    price: { [Op.between]: number[] };
}
