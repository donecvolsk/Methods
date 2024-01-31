export class Character {
    constructor(name, type ) {
        const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if(typeof name === 'string' && name.length > 1 && name.length < 11) {            
            this.name = name;           
        } else {
            throw new Error('Имя не сответствует условию')
        }
       
        if(typeList.includes(type)) {
            this.type = type;  
        } else {
            throw new Error('Тип не сответствует условию')
        }       
    }

    levelUp() {
        if(this.health > 0) {
            this.level ++;
            this.attack += this.attack/100*20;
            this.defence += this.defence/100*20;
            this.health = 100;
        } else {
            throw new Error('нельзя повысить левел умершего')
        }
    }

    damage(points) {
        this.points = points;
       
        this.health -= points * (1 - this.defence / 100);
    }
}

