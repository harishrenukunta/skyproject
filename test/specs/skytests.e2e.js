const offerPage = require('./../pageobjects/offer.page');
const homePage = require('./../pageobjects/home.page');
const signInPage = require('./../pageobjects/signin.page');
const expectChai = require('chai').expect;
const resourceConstants = require('./../resources/constants');

describe('SKY deals scenarios', () => {
	it('should login with valid credentials', () => {
		browser.reloadSession();
		homePage.open('/');
		browser.deleteCookies();

		homePage.agreeCookies();

		//Click on Deals link
		browser.switchToFrame(null);
		homePage.gotoDeals();
		homePage.waitForDealsPage();
		expect(browser).toHaveUrl(resourceConstants.dealsUrl);
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

		expectChai(errMsg).equals(resourceConstants.invalidLoginErrMsg);
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
