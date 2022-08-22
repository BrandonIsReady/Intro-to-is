import Fibocacci from "./fibonacci";

describe('Fibonacci Test', () => {
    it('when 5 return 3', () => {
        //Arrange 
        const input = 5; 
        const expected = 3; 

        //Act 
        const actual: number = Fibocacci(5);

        //Assert 
        expect(actual).toBe(expected); 
        
    })
    it('when 6 return 8', () => {
        //Arrange 
        const input = 5; 
        const expected = 3; 

        //Act 
        const actual: number = Fibocacci(6);

        //Assert 
        expect(actual).toBe(expected); 
    
    })
}) 