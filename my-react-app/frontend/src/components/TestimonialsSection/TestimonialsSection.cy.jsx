import React from 'react'
import TestimonialsSection from './TestimonialsSection'

describe('<TestimonialsSection />', () => {
  it('відображає відгуки', () => {
    cy.mount(<TestimonialsSection />)
    
    // Перевіряємо наявність карток відгуків
    cy.get('.testimonial-card').should('exist')
  })
})