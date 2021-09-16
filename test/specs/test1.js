import TestFilter from '../../common/testFilter.js';

describe('First describe', () => {
	TestFilter.anyPlatform(['web']).anyRunType(['smoke'], () => {
		it('My first test', () => {
			console.log('Hello world!');
			browser.url('/');
		});
	});
});
