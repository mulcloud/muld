export type CouponType = {
    id: string | number;
    name?: string;
    endAt: number;
    value?: number;
    startAt: number;
    reason?: string;
    discount?: number;
    unitDesc?: string;
    condition?: string;
    valueDesc?: string;
    description?: string;
    denominations?: number;
};
