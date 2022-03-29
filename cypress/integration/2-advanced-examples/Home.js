import { Checkout } from '../../pageObjects/Checkout';
import { HomePage } from '../../pageObjects/HomePage'
import { Shop } from '../../pageObjects/Shop'

describe("First Suite", () => {

    let data;

    before(function () {

        cy.fixture('example.json').then((fdata) => {
            data = fdata;
        })
    })


    it("Submit Form", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        const homePage = new HomePage();
        homePage.getName().type(data.name);
        homePage.getEmail().type(data.email);
        homePage.getPassword().type(data.password);
        homePage.getGender().select(data.gender);
        homePage.getDataBind().should("have.value", data.name)
        homePage.getName().should("have.attr", "minlength", "2");
        homePage.getButton().click();
        homePage.getSuccessMessage().contains("Success! The Form has been submitted successfully!.");
        homePage.getShopPageUrl().click();
    })



    it("Add Items to Cart", () => {

        const shopPage = new Shop();
        data.products.forEach((product) => {
            shopPage.getItemTitle().each(($e1, index, $list) => {

                if ($e1.text().includes(product)) {
                    cy.get(".btn.btn-info").eq(index).click();
                }
            })
        })

        shopPage.getCheckout().click();
    })


    it("Checkout & Verify Total", () => {
        const checkout = new Checkout();
        let productsSum = 0;
        let totalBill = 0;
        let eachAmount = 0;
        let eachAmountFinal = 0;
        let grandTotal = 0;
        let grandTotalFinal = 0;


        checkout.getAmount().each(($e1, index, $list) => {
            var eachAmount = $e1.text().split(" ")
            var eachAmountFinal = eachAmount[1].trim();
            productsSum = Number(productsSum) + Number(eachAmountFinal);
            cy.log(productsSum);


        })
        checkout.getTotalAmount().then((ele) => {
            grandTotal = ele.text().split(" ");
            grandTotalFinal = grandTotal[1].trim();
            cy.log(grandTotalFinal)

            expect(productsSum).to.equal(Number(grandTotalFinal));
        })

        checkout.getCheckout().click();
    })



    it("Choose Delivery Location", () => {
        const checkout = new Checkout();

        checkout.getCountry().type("Ind");
        cy.wait(5000);
        checkout.getSuggestions().each(($e1, index, $list) => {
            if ($e1.text().includes("India")) {
                cy.wrap($e1).click();
            }
        })

        checkout.getCheckBox().click({ force: true });
        checkout.getPurchase().click();

        checkout.getSuccess().then((element) => {
            const msg = element.text();
            msg.includes("Success")


        })


    })


})