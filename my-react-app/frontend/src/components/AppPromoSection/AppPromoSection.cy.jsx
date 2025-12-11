import React from 'react'
import AppPromoSection from './AppPromoSection'

describe('<AppPromoSection />', () => {
  it('рекламує мобільний додаток', () => {
    cy.mount(<AppPromoSection />)
    
    // Шукаємо заголовок про додаток
    cy.contains("Don't forget our app").should('exist')
  })
})