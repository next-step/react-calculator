export const operations = ['/', 'X', '-', '+', '='] as const;
export type Operation = typeof operations[number];
