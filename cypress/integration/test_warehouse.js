
context('Warehouse', () => {
	before(() => {
		cy.login();
	});

	it('Vist the warehouse tree view page', () => {
		cy.visit(`app/warehouse/`);
        cy.get('.custom-btn-group > .btn').click();
        cy.get('[data-view="Tree"] > .grey-link').click();
        cy.location("pathname").should("eq","/app/warehouse/view/tree");
    });

    it('Check if Expand Tree works', () => {
		cy.visit(`app/warehouse/view/tree`);
        cy.get('.custom-actions > .btn').click();
        cy.location("pathname").should("eq","/app/warehouse/view/tree");
    });

    it('Check if able to view list through menu', () => {
		cy.visit(`app/warehouse/view/tree`);
        cy.get('.custom-actions > .btn').click();
        cy.get('.menu-btn-group > .btn').click();
        cy.get(':nth-child(1) > .grey-link').click(); //Check if redirects to list view 
        cy.location("pathname").should("eq","/app/warehouse");
    });

    it('Check if print option in Menu button works', () => {
		cy.visit(`app/warehouse/view/tree`);
        cy.get('.custom-actions > .btn').click();
        cy.get('.menu-btn-group > .btn').click();
        cy.get(':nth-child(2) > .grey-link').click(); //Check if redirects to print
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .modal-actions > .btn-modal-close').click();
        cy.location("pathname").should("eq","/app/warehouse/view/tree");
    });

    it('Check if refresh option in Menu button works', () => {
		cy.visit(`app/warehouse/view/tree`);
        cy.get('.custom-actions > .btn').click();
        cy.get('.menu-btn-group > .btn').click();
        cy.get(':nth-child(4) > .grey-link').click(); //Check if redirects to unexpand tree 
        cy.location("pathname").should("eq","/app/warehouse/view/tree");
    });

    it('Check if new button works', () => {
	    cy.get('.primary-action').click();
        cy.get_field('warehouse_name', 'Data').type("Reserve Warehouse - CT");
        cy.get_field('warehouse_name', 'Data').should('have.value', 'Reserve Warehouse - CT');
        //cy.get_field('company', 'Data').should('have.value', 'Campbell Tech');
        //cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .standard-actions > .btn-primary').click();
        cy.contains("Create New").trigger('click', {force: true});  //6ba3f2762e
        cy.location("pathname").should("eq","/app/warehouse/tree");
    });


});
