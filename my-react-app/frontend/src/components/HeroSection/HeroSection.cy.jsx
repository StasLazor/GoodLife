import React from 'react'
import HeroSection from './HeroSection'
import { BrowserRouter } from 'react-router-dom'

describe('<HeroSection />', () => {
  it('відображає заголовок і кнопку', () => {
    // Монтуємо компонент
    cy.mount(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    )

    // Перевіряємо заголовок
    cy.get('h1').should('contain.text', 'Welcome to Goodlyfe Gyms')

    cy.contains('Get Started').should('be.visible')
  })
})