import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../pages/landingPage";
import landingPage from "../selectors/landingPage";

Given("I launch the application", () => {
	LandingPage.openApp();
});

When("I open the application", () => {
	LandingPage.verifyTitle();
	LandingPage.titleVisible();
	LandingPage.verifyUrl();
});

Then("I should see the landing page", () => {
	LandingPage.descriptionTab();
	LandingPage.systemRequirementsLabel();
	LandingPage.addAssetTab();
	LandingPage.existingAssetsTab();
});

Then("I should see the first text section", () => {
	LandingPage.firstTextSection();
	LandingPage.addAssetLabel();
	LandingPage.assetUniqueText();
	LandingPage.assetNameCombinationText();
});

Then("I should see the second text section", () => {
	LandingPage.secondTextSection();
	LandingPage.existingAssetLabel();
	LandingPage.searchAssetText();
	LandingPage.filterAssetText();
	LandingPage.sortAssetText();
});
