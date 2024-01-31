import { Character } from "../character ";


test('testing  class Character features', () => {
    const resultingObject = {
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