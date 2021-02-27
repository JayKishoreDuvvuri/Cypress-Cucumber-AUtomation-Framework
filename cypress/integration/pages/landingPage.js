import {
	landingPageTitle,
	title,
	systemRequirementsLabel,
	descriptionTab,
	firstTextSection,
	addAssetLabel,
	assetUniqueText,
	assetNameCombinationText,
	secondTextSection,
	existingAssetLabel,
	searchAssetText,
	filterAssetText,
	sortAssetText,
	descriptionText,
	systemRequirementsText,
	addAssetText,
	ExistingAssetText,
} from "../selectors/landingPage";
import { addAssetTab, addAssetTabText } from "../selectors/addAssetPage";
import {
	existingAssetsTab,
	existingAssetsTabText,
} from "../selectors/existingAssetsPage";

export default class LandingPage {
	static openApp() {
		return cy.openHomePage();
	}

	static pause(timeout) {
		return cy.wait(timeout);
	}

	static verifyTitle() {
		return cy.title().should("eq", title);
	}

	static titleVisible() {
		return cy.getDataTestID(landingPageTitle).should("be.visible");
	}

	static verifyUrl() {
		return cy.url().should("include", "http://localhost:3000");
	}

	static descriptionTab() {
		cy.getDataTestID(descriptionTab).should("be.visible");
		return cy
			.getDataTestID(descriptionTab)
			.should("have.text", descriptionText);
	}

	static systemRequirementsLabel() {
		cy.getDataTestID(systemRequirementsLabel).should("be.visible");
		return cy
			.getDataTestID(systemRequirementsLabel)
			.should("have.text", systemRequirementsText);
	}

	static firstTextSection() {
		return cy.getDataTestID(firstTextSection).should("be.visible");
	}

	static addAssetLabel() {
		cy.getDataTestID(addAssetLabel).should("be.visible");
		return cy
			.getDataTestID(addAssetLabel)
			.should("have.text", addAssetText);
	}

	static assetUniqueText() {
		return cy.getDataTestID(assetUniqueText).should("be.visible");
	}

	static assetNameCombinationText() {
		return cy.getDataTestID(assetNameCombinationText).should("be.visible");
	}

	static secondTextSection() {
		return cy.getDataTestID(secondTextSection).should("be.visible");
	}

	static existingAssetLabel() {
		cy.getDataTestID(existingAssetLabel).should("be.visible");
		return cy
			.getDataTestID(existingAssetLabel)
			.should("have.text", ExistingAssetText);
	}

	static searchAssetText() {
		return cy.getDataTestID(searchAssetText).should("be.visible");
	}

	static filterAssetText() {
		return cy.getDataTestID(filterAssetText).should("be.visible");
	}

	static sortAssetText() {
		return cy.getDataTestID(sortAssetText).should("be.visible");
	}

	static addAssetTab() {
		cy.getDataTestID(addAssetTab).should("be.visible");
		return cy
			.getDataTestID(addAssetTab)
			.should("have.text", addAssetTabText);
	}

	static existingAssetsTab() {
		cy.getDataTestID(existingAssetsTab).should("be.visible");
		return cy
			.getDataTestID(existingAssetsTab)
			.should("have.text", existingAssetsTabText);
	}
}
