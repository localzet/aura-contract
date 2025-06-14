export const RESET_PERIODS = {
    NO_RESET: 'NO_RESET',
    DAY: 'DAY',
    WEEK: 'WEEK',
    MONTH: 'MONTH',
} as const;

export type TResetPeriods = [keyof typeof RESET_PERIODS][number];
export const RESET_PERIODS_VALUES = Object.values(RESET_PERIODS);
