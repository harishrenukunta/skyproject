const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OfferPage extends Page {
	get offerLocator() {
		return $$('.col__Col-sc-158bu3w-0.bPUAKn');
	}

	get pricesLocator() {
		return '.col__Col-sc-158bu3w-0 div.eYNcih span.ebwAcM';
	}

	offers() {
		browser.pause(3000);
		return $$('.col__Col-sc-158bu3w-0');
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	open(path) {
		return super.open(path);
	}

	offerPrices() {
		return $$(this.pricesLocator);
	}
}

module.exports = new OfferPage();
