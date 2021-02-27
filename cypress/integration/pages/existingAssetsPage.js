import {
	activeState,
	existingAssetsTab,
	spinner,
	loadingIcon,
} from "../selectors/existingAssetsPage";
import LandingPage from "../pages/landingPage";

export default class ExistingAssetsPage extends LandingPage {
	static clickExistingAssetsTab() {
		cy.getDataTestID(existingAssetsTab).click();
	}

	static classActiveItem() {
		return cy.get(activeState).should("be.visible");
	}

	static spinner() {
		return cy.getDataTestID(spinner).should("be.visible");
	}

	static loadingIcon() {
		return cy.getDataTestID(loadingIcon).should("be.visible");
	}

	static loadingIconNotVisible() {
		return cy.getDataTestID(loadingIcon).should("not.be.visible");
	}
}
