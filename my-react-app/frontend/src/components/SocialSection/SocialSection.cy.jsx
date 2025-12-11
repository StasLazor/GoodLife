import React from 'react'
import SocialSection from './SocialSection'

describe('<SocialSection />', () => {
  it('відображає іконки соцмереж', () => {
    cy.mount(<SocialSection />)
    
    // Перевіряємо, що є картинки
    cy.get('img').should('have.length.at.least', 1)
  })
})