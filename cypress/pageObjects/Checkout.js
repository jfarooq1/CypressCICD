export class Checkout {

    getCheckout() {
        return cy.get(".btn.btn-success");
    }

    getCountry() {
        return cy.get("#country");
    }

    getSuggestions() {
        return cy.get(".suggestions ul li a");
    }

    getCheckBox() {
        return cy.get("#checkbox2")
    }

    getPurchase() {
        return cy.get(".btn.btn-success.btn-lg");
    }

    getSuccess() {
        return cy.get(".alert.alert-success.alert-dismissible")
    }

    getAmount() {
        return cy.get("tr td:nth-child(4) strong");
    }

    getTotalAmount() {
        return cy.get("h3 strong")
    }
}