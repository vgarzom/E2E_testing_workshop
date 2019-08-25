describe('Los estudiantes login', function() {
  it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("charlie")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("tester")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("charlietester@mailinator.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-de-los-andes')
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('12')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("test1234")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains("Error: Ya existe un usuario registrado con el correo 'charlietester@mailinator.com'")
      
  })
})