import {
	activeItem,
	addAssetTab,
	newAssetLabel,
	assetNameInput,
	correctFormat,
	incorrectFormat,
	submitButton,
	paperIcon,
} from "../selectors/addAssetPage";
import LandingPage from "../pages/landingPage";

export default class AddAssetPage extends LandingPage {
	static clickAddAssetTab() {
		cy.getDataTestID(addAssetTab).click();
	}

	static classActiveItem() {
		return cy.get(activeItem).should("be.visible");
	}

	static newAssetLabel() {
		return cy.getDataTestID(newAssetLabel).should("be.visible");
	}

	static formAddAssetInputCheckbox() {
		return cy.getDataTestID(assetNameInput).should("not.be.disabled");
	}

	static submitButton() {
		return cy.getDataTest(submitButton).should("not.be.disabled");
	}

	static paperIcon() {
		return cy.getDataTest(paperIcon).should("be.visible");
	}

	static fillAssetNumber(assetNumber) {
		return cy.getDataTestID(assetNameInput).type(assetNumber);
	}

	static clickSubmitButton() {
		return cy.getDataTest(submitButton).click();
	}

	static correctFormat() {
		return cy.getDataTestID(correctFormat).should("be.visible");
	}

	static clearField() {
		return cy.getDataTestID(assetNameInput).clear();
	}

	static inCorrectFormat() {
		return cy.getDataTestID(incorrectFormat).should("be.visible");
	}
}
