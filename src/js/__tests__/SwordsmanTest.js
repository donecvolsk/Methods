import { Swordsman } from "../Swordsman";

test('testing  class Swordsman features', () => {
    const resultingObject = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Swordsman",
    }
    
    const result = new Swordsman('Pushok', 'Swordsman');
     
    expect(result).toEqual(resultingObject);      
    
  })