import { Bowerman } from "../Bowerman";

test('testing  class Bowerman features', () => {
    const resultingObject = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Bowman",
    }
    
    const result = new Bowerman('Pushok', 'Bowman');
     
    expect(result).toEqual(resultingObject);      
    
  })