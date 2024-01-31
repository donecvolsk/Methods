import { Undead } from "../Undead";

test('testing  class Undead features', () => {
    const resultingObject = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Undead",
    }
    
    const result = new Undead('Pushok', 'Undead');
     
    expect(result).toEqual(resultingObject);      
    
  })