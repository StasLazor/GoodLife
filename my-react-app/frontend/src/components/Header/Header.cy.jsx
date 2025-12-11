import React from 'react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('renders logo and links', () => {
    cy.mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    cy.get('.logo').should('contain.text', 'Goodlyfe Gyms')
  })
})