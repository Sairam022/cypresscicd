describe('Home Tests', () => {
    it("open the homepage and verify url", () => {
        cy.visit('https://practice.automationbro.com/');

        cy.url().should("include", "automationbro");

        // cy.title().should("eq", "Practice E-Commerce Site - Automation Bro ")
    })
});