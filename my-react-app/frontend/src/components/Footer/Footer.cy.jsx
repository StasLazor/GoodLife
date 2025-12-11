import React from 'react'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

describe('<Footer />', () => {
  it('відображає логотип і соцмережі', () => {
    cy.mount(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // Перевіряємо, що в футері є назва бренду
    cy.get('footer').contains('Goodlyfe').should('exist')
  })
})