import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ExistingAssetsPage from "../pages/existingAssetsPage";
import { timeout } from "../selectors/existingAssetsPage";

Given("I open the application", () => {
	ExistingAssetsPage.openApp();
});

When("I click on existing assets tab", () => {
	ExistingAssetsPage.clickExistingAssetsTab();
	ExistingAssetsPage.classActiveItem();
});

Then("I should see the spinner", () => {
	ExistingAssetsPage.spinner();
});

Then("I should see the loading icon", () => {
	ExistingAssetsPage.loadingIcon();
});

Then("I wait for 5 seconds", () => {
	ExistingAssetsPage.pause(timeout);
});

Then("If still I see the page loading I send an error message", () => {
	ExistingAssetsPage.loadingIconNotVisible();
});
