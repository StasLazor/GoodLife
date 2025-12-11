import React from 'react'
import AboutSection from './AboutSection'
import { BrowserRouter } from 'react-router-dom'

describe('<AboutSection />', () => {
  it('відображає інформацію та кнопку', () => {
    cy.mount(
      <BrowserRouter>
        <AboutSection />
      </BrowserRouter>
    )

    // Перевіряємо, що є заголовок секції
    cy.get('h2').should('exist')

    // Перевіряємо, що є кнопка або посилання
    cy.get('a, button').should('exist')
  })
})