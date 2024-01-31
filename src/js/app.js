import { Character } from "./character ";
import { Bowerman } from "./Bowerman";
import { Swordsman } from "./Swordsman";
import { Magician } from "./Magician";
import { Daemon } from "./Daemon";
import { Undead } from "./Undead";
import { Zombie } from "./Zombie";

const user1 = new Bowerman('Bobik', 'Bowman');
user1.levelUp();
user1.damage(20);
console.log(user1);

const user2 = new Zombie ('Pushok', 'Zombie');
user2.levelUp();
user2.damage(50);
console.log(user2);
