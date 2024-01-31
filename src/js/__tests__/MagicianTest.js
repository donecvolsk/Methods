import { Magician } from "../Magician";

test('testing  class Magician features', () => {
    const resultingObject = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Magician",
    }
    
    const result = new Magician('Pushok', 'Magician');
     
    expect(result).toEqual(resultingObject);      
    
  })