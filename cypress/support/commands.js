import { url } from "../integration/selectors/landingPage";

Cypress.Commands.add("openHomePage", () => {
	cy.visit(url);
});
