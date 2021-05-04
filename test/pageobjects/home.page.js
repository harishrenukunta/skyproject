const Page = require('./page');

class HomePage extends Page {
	gotoDeals() {
		$('=Deals').waitForDisplayed({ timeout: this.timeout });
		$('=Deals').click();
	}

	gotoSignIn() {
		$('=Sign in').waitForDisplayed({ timeout: this.timeout });
		$('=Sign in').click();
	}

	agreeCookies() {
		const cookiesFrame = $('iframe#sp_message_iframe_474555');
		browser.switchToFrame(cookiesFrame);
		const btn = $('button[title="Agree"]');
		btn.click();
	}

	waitForDealsPage() {
		$('=Deals').waitForDisplayed({ timeout: this.timeout });
	}
}

module.exports = new HomePage();
