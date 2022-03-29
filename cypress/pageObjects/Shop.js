export class Shop {

    getCheckout() {
        return cy.get(".nav-link.btn.btn-primary");
    }

    getItemTitle() {
        return cy.get("h4.card-title");
    }

}