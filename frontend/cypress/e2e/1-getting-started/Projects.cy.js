describe("Testing Project Related Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get(".mb-3 > .input-group-alternative > .form-control").type(
      "wehshi@gmail.com"
    );
    cy.get(":nth-child(2) > .input-group-alternative > .form-control").type(
      "11223344"
    );
    cy.get(".my-4").click();
  });

  it("Test Dashboard", () => {
    cy.get(":nth-child(1) > .nav-link").click();
  });

  it("Create Projects", () => {
    let Projects = [
      {
        name: "AI",
        description: "Artificial Intelligencs",
      },
      {
        name: "BC",
        description: "BLock chain",
      },
      {
        name: "IS",
        description: "Information Security",
      },
    ];

    Projects.map((project) => {
      cy.get(".col > .btn").click();
      cy.get("#name").type(project.name);
      cy.get("#description").type(project.description);
      let index = 1;
      cy.get("#team").select(index);
      cy.get("form > .btn").click();
    });
    cy.get(":nth-child(3) > .page-link").click();
  });

  it("Edit Projects", () => {
    cy.get(
      ":nth-child(1) > .text-right > .dropdown > .btn-icon-only > .fas"
    ).click();
    cy.get(':nth-child(1) > .text-right > .dropdown > .dropdown-menu-arrow > :nth-child(1)').click();
    cy.get("#name").type("Edited Project Name !");
    cy.get("#description").type("Edited Project Description");
    cy.get('#team').select(2);
  });

  it('Delete Projects',()=>{
    cy.get(':nth-child(1) > .text-right > .dropdown > .btn-icon-only > .fas').click();
    cy.get(':nth-child(1) > .text-right > .dropdown > .dropdown-menu-arrow > :nth-child(2)').click();
  })
  
});
