export const noDataErrorMessage = 'No data';
export const notValidErrorMessage = 'Not a valid year';

showBirthYear();

function showBirthYear(message = 'Enter your birth date') {
	const year = getYearString(message);

	if (year === null) return;

	try {
		validateData(year);
		console.log(`year of birth: ${year}`);
	} catch (err) {
		if (err.message === 'No data') {
			showBirthYear('You should enter the value!');
		} else if (err.message === 'Not a valid year') {
			showBirthYear(
				'The value you have entered is not valid, you should enter the year in YYYY format!',
			);
		} else throw err;
	}
}

function getYearString(message) {
	return prompt(message);
}

function isValidYear(yearString) {
	return isFinite(yearString) && yearString.length === 4;
}

export default function validateData(
	year,
	noDataMessage = noDataErrorMessage,
	notValidMessage = notValidErrorMessage,
) {
	if (!year) {
		throw new Error(noDataMessage);
	}

	if (!isValidYear(year)) {
		throw new Error(notValidMessage);
	}
}
