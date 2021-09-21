describe('Button Testing', () => {
  it('Main Display 7 + 2 equals 9', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "9");

  })
  it('Upper Display 7 + 2 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "7+2=");

  })

  it('Main Display 7 subtract 2 equals 5', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=subtract]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "5");

  })

  it('Upper Display 7 subtract 2 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=subtract]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "7-2=");

  })

  it('Main Display 7 multiplied by 2 equals 14', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=multiply]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "14");

  })

  it('Upper Display 7 multiplied by 2 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=multiply]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "7*2=");

  })

  it('Main Display 7 divided by 2 equals 3.5', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=divide]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "3.5");

  })

  it('Upper Display 7 divided by 2 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=divide]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "7/2=");

  })

  it('Main Display 17 added to 20 equals 37', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=zero]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "37");

  })

  it('Upper Display 17 added to 20 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=zero]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "17+20=");

  })

  it('Main Display 17.5 added to 2.5 equals 20', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "20");

  })

  it('Upper 17.5 added to 2.5 equals 20', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=add]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "17.5+2.5=");

  })

  it('Main Display 17.5 subtract  2.5 equals 15', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=subtract]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=currentDisplay]').should("contain", "15");
 

  })

  it('Upper Display 17.5 subtract  2.5 equals', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=one]').click();
  cy.get('[data-cy=seven]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=subtract]').click();
  cy.get('[data-cy=two]').click();
  cy.get('[data-cy=decimal]').click();
  cy.get('[data-cy=five]').click();
  cy.get('[data-cy=equals]').click();
  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "17.5-2.5=");

 

  })

  it('All clear button resets', () => {
    //1.  Arrange
  cy.visit('http://127.0.0.1:5501/index.html')
    //2.  Act
  cy.get('[data-cy=allClear]').click();

  

  //3.  Assert
  cy.get('[data-cy=prevDisplay]').should("contain", "");
  cy.get('[data-cy=currentDisplay]').should("contain", "");

  })
  })

  