import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../pages/addAssetPage";

Given("I open the application", () => {
	AddAssetPage.openApp();
});

When("I click on add assets tab", () => {
	AddAssetPage.clickAddAssetTab();
});

Then("I should see the add asset page", () => {
	AddAssetPage.classActiveItem();
});

Then("I should see the label New Asset", () => {
	AddAssetPage.newAssetLabel();
});

Then("I should see the form add asset input check box", () => {
	AddAssetPage.formAddAssetInputCheckbox();
});

Then("I should see the submit button with paper Icon", () => {
    AddAssetPage.submitButton();
    AddAssetPage.paperIcon();
});