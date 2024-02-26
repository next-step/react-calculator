const OPERATORS_ARRAY = ["/", "X", "-", "+"] as const;

export const OPERATORS = new Set<(typeof OPERATORS_ARRAY)[number]>(
	OPERATORS_ARRAY
);

export type OPERATORS_TYPE = (typeof OPERATORS_ARRAY)[number];

export const OPERATORS_MAP: Record<OPERATORS_TYPE, string> = {
	X: "*",
	"+": "+",
	"-": "-",
	"/": "/"
};

export const isOperator = (value: string): value is OPERATORS_TYPE => {
	return OPERATORS.has(value as OPERATORS_TYPE);
};

export const NUMBERS_AND_OPERATORS = /(\d+)|([+\-X\\/])/g;
