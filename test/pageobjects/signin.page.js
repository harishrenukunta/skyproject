const Page = require('./page');

class SignInPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get inputUsername() {
		return $('#username');
	}
	get inputPassword() {
		return $('#password');
	}
	get btnSignIn() {
		return $('#signinButton');
	}

	get txtErrMsg() {
		return $('.globalErrors');
	}

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 */
	login(username, password) {
		this.inputUsername.waitForDisplayed({ timeout: 3000 });
		this.inputUsername.setValue(username);
		this.inputPassword.setValue(password);
		this.btnSignIn.click();
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	open(path) {
		return super.open(path);
	}

	errorMsg() {
		this.txtErrMsg.waitForDisplayed({ timeout: 3000 });
		return this.txtErrMsg.getText();
	}
}

module.exports = new SignInPage();
