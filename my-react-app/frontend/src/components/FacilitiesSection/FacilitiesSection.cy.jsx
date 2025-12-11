import React from 'react'
import FacilitiesSection from './FacilitiesSection'
import { BrowserRouter } from 'react-router-dom'

describe('<FacilitiesSection />', () => {
  it('відображає заголовок секції', () => {
    cy.mount(
      <BrowserRouter>
        <FacilitiesSection />
      </BrowserRouter>
    )
    // Перевіряємо, що є заголовок
    cy.get('h2').should('exist')
  })
})