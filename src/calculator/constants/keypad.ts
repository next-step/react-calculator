const NUMBERS_ARRAY = [
	"9",
	"8",
	"7",
	"6",
	"5",
	"4",
	"3",
	"2",
	"1",
	"0"
] as const;

export const NUMBERS = new Set<(typeof NUMBERS_ARRAY)[number]>(NUMBERS_ARRAY);
