context('Opening Entry', () => {
	before(() => {
        cy.login();
    });

		it("Create an opening entry for an item", () => {
			cy.new_doc('Stock Reconciliation');
			cy.set_select('purpose', 'Opening Stock');
			cy.set_link('items.item_code', 'Scrapwood table top');
			cy.set_link('items.warehouse', 'Stores - CT');
			cy.set_input('items.qty', '10');
			cy.set_input('items.valuation_rate', '1200');
			cy.set_link('expense_account', 'Temporary Opening - CT');
			cy.set_link('cost_center', 'Main - CT');
			cy.save();
			cy.wait(500);
			cy.submit('Submitted');
		});
});
