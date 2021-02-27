import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../pages/addAssetPage";
import { assetNumber, invalidAssetNumber } from "../selectors/addAssetPage";

Given("I open the application", () => {
	AddAssetPage.openApp();
});

When("I click on add asset tab", () => {
	AddAssetPage.clickAddAssetTab();
});

Then("I should see the add asset page", () => {
	AddAssetPage.classActiveItem();
});

Then("I fill asset number with valid Asset Number", () => {
	AddAssetPage.fillAssetNumber(assetNumber);
});

Then("I click the send button", () => {
	AddAssetPage.clickSubmitButton();
});

Then("I should see the message as correct format", () => {
	AddAssetPage.correctFormat();
});

Given("Iam on the add asset page", () => {
	AddAssetPage.classActiveItem();
	AddAssetPage.newAssetLabel();
});

When("I re-enter again asset number with invalid format", () => {
	AddAssetPage.clearField();
	AddAssetPage.fillAssetNumber(invalidAssetNumber);
});

Then("I click the send button", () => {
	AddAssetPage.clickSubmitButton();
});

Then("I should see the message as Incorrect format", () => {
	AddAssetPage.inCorrectFormat();
});