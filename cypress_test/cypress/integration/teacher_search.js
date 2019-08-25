describe('Los estudiantes login', function() {
  it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //
      //Buscamos el input de profesores
      cy.get('.Select-input').find('input').type("Mario Linares", {force: true})
      //La busqueda anterior debe devolver un único resultado. Nos dirigimos a la página del profesor
      cy.get('.Select-option').click()
      //Filtramos las materias
      cy.get('.materias').find('input[name="id:ISIS3510"]').check()
      cy.get('.materias').find('input[name="id:ISIS1206L"]').check()

  })
})