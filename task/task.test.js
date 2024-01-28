import sut, { noDataErrorMessage, notValidErrorMessage } from './task.js';

describe('validate data', function () {
	it('throws if year is undefined', function () {
		expect(sut.bind(null, undefined)).toThrow(noDataErrorMessage);
	});

	it('throws if year is not a number', function () {
		expect(sut.bind(null, '256ui')).toThrow(notValidErrorMessage);
	});

	it('does not throw if year is valid', function () {
		expect(sut.bind(null, '1999')).not.toThrow();
	});
});
