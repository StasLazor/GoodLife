import React from 'react'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'

describe('<Login />', () => {
  it('дозволяє вводити email та пароль', () => {
    // Монтуємо компонент
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    // Знаходимо поле Email і пробуємо щось надрукувати
    cy.get('input[name="email"]')
      .type('admin@test.com')
      .should('have.value', 'admin@test.com') // Перевіряємо, чи текст зберігся в полі

    // Знаходимо поле Password і друкуємо
    cy.get('input[name="password"]')
      .type('123456')
      .should('have.value', '123456')
  })

  it('відображає кнопку входу', () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    // Перевіряємо, що кнопка "LOG IN" існує
    cy.get('button[type="submit"]').should('contain.text', 'LOG IN')
  })
})