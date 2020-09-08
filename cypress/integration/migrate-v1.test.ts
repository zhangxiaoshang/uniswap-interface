describe('迁移V1流动性', () => {
  describe('Remove V1 liquidity', () => {
    it('renders the correct page', () => {
      cy.visit('/remove/v1/0x93bB63aFe1E0180d0eF100D774B473034fd60C36')
      cy.get('#remove-v1-exchange').should('contain', 'MKR/ETH')
    })
  })
})
