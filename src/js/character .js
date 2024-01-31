

export class Character {
    constructor(name, type ) {
        const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if(typeof name === 'string' && name.length > 1 && name.length < 11) {            
            this.name = name;           
        } else {
            throw new Error('Имя не сответствует условию')
           // console.log('Имя не сответствует условию');
        }
       
        if(typeList.includes(type)) {
            this.type = type;  
        } else {
            throw new Error('Тип не сответствует условию')
            //console.log('Тип не сответствует условию');
        }       
    }
}

