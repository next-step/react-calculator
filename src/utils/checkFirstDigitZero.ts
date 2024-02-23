export default function	checkFirstDigitZero(preNumber: string, number: string) {
	return (
		preNumber.length === 1
			&& preNumber === '0'
			&& number !== '0'
	);
}
