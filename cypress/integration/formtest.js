describe('Pizza Form Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // Helpers to centralize CSS selectors / DOM grabbing

    const nameInput = () => cy.get('input[name=name-input]')    
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const cfInput = () => cy.get('input[name=chicken-fingers]')
    const peppersInput = () => cy.get('input[name=onions]')
    const mushroomsInput = () => cy.get('input[name=bacon]')
    const specialInput = () => cy.get('input[name=special-text]')
    const submitButton = () => cy.get('button[id=order-button]')

    it('Sanity Check', () => {
        expect(1 + 2).to.equal(3);
    })

    it('Proper elements are showing', () => {

        nameInput().should('exist')
        sizeInput().should('exist')
        pepperoniInput().should('exist')
        cfInput().should('exist')
        peppersInput().should('exist')
        mushroomsInput().should('exist')
        specialInput().should('exist')
        submitButton().should('exist')

    })

    describe('Submitting inputs', () => {

        it('Size selection working', () => {
           sizeInput().type('small')
        })

        it('Pepperoni checkbox is working', () => {
            pepperoniInput().check()
            pepperoniInput().should('have.value', 'true')
        })
        it('Chicken Fingers checkbox is working', () => {
            cfInput().check()
            cfInput().should('have.value', 'true')
        })
        it('Peppers checkbox is working', () => {
            peppersInput().check()
            peppersInput().should('have.value', 'true')
        })
        it('Mushrooms checkbox is working', () => {
            mushroomsInput().check()
            mushroomsInput().should('have.value', 'true')
         })

        it('Name field is working', () => {
            nameInput().type('Peter Conley')
            nameInput().should('have.value', 'Peter Conley')
        })

        it('Special instructions field is working', () => {
            specialInput().type('Blue cheese or get outta here')
            specialInput().should('have.value', 'Blue cheese or get outta here')
        })

        it('Selecting multiple toppings with checkbox', () => {

            pepperoniInput().check()
            peppersInput().check()
            mushroomsInput().check()

        })

        describe('Submitting form', () => {
            
            it('Inputting all required fields', () => {
                nameInput().type('Peter Conley')
                sizeInput().select('small')
                submitButton().click()
            })

            it('Trying a submission while missing name', () => {

                sizeInput().select('medium')
                peppersInput().check()
                specialInput().type('Must be here within 30 minutes')
                submitButton().click()
            })

        }) 

    }) // closing 'Submitting inputs' describe function

})// closing main function