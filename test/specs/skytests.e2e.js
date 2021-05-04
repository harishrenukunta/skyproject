const offerPage = require('./../pageobjects/offer.page');
const homePage = require('./../pageobjects/home.page');
const signInPage = require('./../pageobjects/signin.page');
const expectChai = require('chai').expect;

describe('SKY deals scenarios', () => {
	it('should login with valid credentials', () => {
		//await browser.url('/');
		browser.reloadSession();
		homePage.open('/');
		browser.deleteCookies();

		homePage.agreeCookies();

		//Click on Deals link
		browser.switchToFrame(null);
		homePage.gotoDeals();

		expect(browser).toHaveUrl('https://www.sky.com/deals');
	});

	it('Check error when login with invalid credentials', () => {
		browser.reloadSession();
		browser.deleteCookies();
		homePage.open('/');

		homePage.agreeCookies();

		//Goto SignIn page
		browser.switchToFrame(null);
		homePage.gotoSignIn();

		signInPage.login('invalid', 'invalid');
		const errMsg = signInPage.errorMsg();

		expectChai(errMsg).equals(
			'Sorry, we did not recognise either your username or password'
		);
	});

	it('Verify first 3 sky deals', () => {
		browser.reloadSession();
		offerPage.open('/offers');
		homePage.agreeCookies();

		browser.switchToFrame(null);
		const offers = offerPage.offers();
		expect(offers).toBeElementsArrayOfSize(5);

		const prices = offerPage.offerPrices();
		expect(prices).toBeElementsArrayOfSize(5);

		let pr = [];
		prices.map((price) => {
			price.scrollIntoView();
			price.waitForDisplayed({ timeout: 1000 });
			pr.push(price.getText().slice(-2));
		});

		expectChai(pr).to.include.members(['27', '41', '35']);
	});
});
