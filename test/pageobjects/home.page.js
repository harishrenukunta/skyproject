const Page = require('./page');

class HomePage extends Page {
	gotoDeals() {
		$('=Deals').waitForDisplayed({ timeout: 3000 });
		$('=Deals').click();
	}

	gotoSignIn() {
		$('=Sign in').waitForDisplayed({ timeout: 3000 });
		$('=Sign in').click();
	}

	agreeCookies() {
		const cookiesFrame = $('iframe#sp_message_iframe_474555');
		browser.switchToFrame(cookiesFrame);
		const btn = $('button[title="Agree"]');
		btn.click();
	}
}

module.exports = new HomePage();
