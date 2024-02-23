export const OPERATORS = new Set(["/", "X", "-", "+"]);
export type OPERATORS_TYPE = "X" | "+" | "-" | "/";

export const OPERATORS_MAP: Record<OPERATORS_TYPE, string> = {
	X: "*",
	"+": "+",
	"-": "-",
	"/": "/"
};

export const isOperator = (value: string): value is OPERATORS_TYPE => {
	return ["+", "-", "X", "/"].includes(value);
};
