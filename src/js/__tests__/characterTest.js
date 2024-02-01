import { Character } from "../character ";


test('testing  class Character features', () => {
    const resultingObject = {
      health: 100,
      level: 1,
      name: 'Bobik',
      type: 'Bowman',
    }
    
    const result = new Character('Bobik', 'Bowman');
     
    expect(result).toEqual(resultingObject);      
    
  })

  test('testing  class Character error from name ', () => {
    function errorName() {
        new Character('B', 'Bowman');
    }
    expect(errorName).toThrow(Error);
    })

  test('testing  class Character error from type ', () => {
    function errorName() {
      new Character('Bobik', 'Bowmann');
    }
    expect(errorName).toThrow(Error);
    })

  test('testing  class Character metod levelUP', () => {
    const resultingObject = {
      attack: 30,
      defence: 30,
      health: 100,
      level: 2,
      name: "Bobik",
      type: "Bowman",
          }
          
    const result = new Character('Bobik', 'Bowman');
    result.health = 100;
    result.attack = 25;
    result.defence = 25;
    result.level = 1;
    result.levelUp();
           
    expect(result).toEqual(resultingObject);      
          
    })

  test('testing  class Character error from levelUP ', () => {
    function errorName() {
      const result = new Character('Bobik', 'Bowman');
      result.health = 0;
      result.attack = 25;
      result.defence = 25;
      result.level = 1;
      result.levelUp();
      }
    expect(errorName).toThrow(Error);
  })

  test('testing  class Character metod damage', () => {
    const resultingObject = {
      attack: 30,
      defence: 30,
      health: 86,
      level: 2,
      name: "Bobik",
      points: 20,
      type: "Bowman",
      }
              
  const result = new Character('Bobik', 'Bowman');
  result.health = 100;
  result.attack = 25;
  result.defence = 25;
  result.level = 1;
  result.levelUp();
  result.damage(20);          
  expect(result).toEqual(resultingObject);      
              
  })