describe('Los estudiantes login', function() {
  it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.screenshot();
      //
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("charlietester@mailinator.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("test1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      //cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
      cy.screenshot();
      cy.get('#cuenta')
  })
})