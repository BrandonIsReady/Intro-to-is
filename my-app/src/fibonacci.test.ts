import Fibocacci from "./fibonacci";

describe('Fibonacci Test', () => {
    it('when 5 return 3', () => {
        //Arrange 
        const input = 5; 
        const expected = 8; 

        //Act 
        const actual: number = Fibocacci(5);

        //Assert 
        expect(actual).toBe(expected); 
        
    })
    it('when 6 return 8', () => {
        //Arrange 
        const input = 8; 
        const expected = 13; 

        //Act 
        const actual: number = Fibocacci(8);

        //Assert 
        expect(actual).toBe(expected); 
    
    })
    it('when 13 - 20 return 21', () => {
        //Arrange 
        const input = 8; 
        const expected = 13; 

        //Act 
        const actual: number = Fibocacci(22);

        //Assert 
        expect(actual).toBe(expected); 
    
    })
}) 