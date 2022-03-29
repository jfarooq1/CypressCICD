export class HomePage {

    getName() {
        return cy.get("input[name='name']:nth-child(2)");
    }

    getEmail() {
        return cy.get("input[name='email']");
    }

    getPassword() {

        return cy.get("#exampleInputPassword1");
    }

    getDataBind() {

        return cy.get("h4 input.ng-untouched.ng-pristine.ng-valid")
    }

    getGender() {
        return cy.get("select")

    }

    getButton() {
        return cy.get(".btn.btn-success")
    }

    getSuccessMessage() {
        return cy.get(".alert.alert-success.alert-dismissible")
    }

    getShopPageUrl() {
        return cy.get("a[href='/angularpractice/shop']");
    }
}
