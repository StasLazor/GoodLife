import React from 'react'
import MotivationSection from './MotivationSection'

describe('<MotivationSection />', () => {
  it('відображає мотиваційний текст', () => {
    cy.mount(<MotivationSection />)
    
    // Шукаємо текст
    cy.contains('Become more').should('exist') 
    // Або просто перевіряємо наявність опису
    cy.get('p').should('exist')
  })
})