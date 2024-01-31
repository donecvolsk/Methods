import { Daemon } from "../Daemon";

test('testing  class Daemon features', () => {
    const resultingObject = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Pushok",
        type: "Daemon",
    }
    
    const result = new Daemon('Pushok', 'Daemon');
     
    expect(result).toEqual(resultingObject);      
    
  })