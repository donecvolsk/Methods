import { Zombie } from "../Zombie";

test('testing  class Zombie features', () => {
    const resultingObject = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Zombie",
    }
    
    const result = new Zombie('Pushok', 'Zombie');
     
    expect(result).toEqual(resultingObject);      
    
  })