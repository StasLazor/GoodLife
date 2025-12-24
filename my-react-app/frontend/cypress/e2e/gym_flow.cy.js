describe('Goodlyfe Gyms E2E Test', () => {
  // Перед кожним тестом заходимо на головну сторінку
  beforeEach(() => {
    cy.visit('/') 
  })

  it('Головна сторінка завантажується коректно', () => {
    cy.contains('Goodlyfe Gyms').should('be.visible')
    
    cy.contains('Get Started').should('be.visible')
  })

  it('Навігація працює: перехід на сторінку входу', () => {
    // Шукаємо посилання на Login
    cy.contains('Join Now').click() 

    // Перевіряємо, що URL змінився
    cy.url().should('include', '/login')
    
    // Перевіряємо, що ми бачимо форму входу
    cy.contains('Welcome Back').should('be.visible')
  })

  it('Форма входу працює (введення даних)', () => {
    // Переходимо прямо на логін
    cy.visit('/login')

    // Вводимо тестовий email
    cy.get('input[type="email"]')
      .type('admin@test.com')
      .should('have.value', 'admin@test.com')

    // Вводимо пароль
    cy.get('input[type="password"]')
      .type('12345678')
      .should('have.value', '12345678')

    // Натискаємо кнопку входу
    cy.get('button[type="submit"]').click()
    
  })
})