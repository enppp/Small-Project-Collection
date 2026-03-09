// CONTAINERS ----------------------------------------



// Button Objects ------------------------------------

// States ---------------------------------------


// ----------------------------------------------------------------------
// General Elements -----------------------------------------------------
// ----------------------------------------------------------------------

// dialouge set one functions


// onclick battle
function gachaStart(finalResult, discription) {

// selects a random number from 1 - 100
let rarityChance = Math.floor(Math.random() * 170) + 1;
  console.log(rarityChance)

let display = document.getElementById("display")
// the gacha code
  
  switch (true) {
       case rarityChance >= 150:
      finalResult = "You got the 128-bit 'Guardian of the firewall' - RARITY: ULTRA";
      display.src = 
      discription = "The Last line of defense against the people who seek the power of the firewall, but as due time he has lost an arm due to battles against the people of binaria who have come to gain ultimate power."
      break;
    case rarityChance >= 100:
      finalResult = "You got the 64-bit 'Quizical Dragon' - RARITY: LEGENDARY";
      display.src = ""
      discription = "If an adventurer encounters this dragon, they may think to attack. But for the dragon is a scholar, and a good one at that! Ask it a question and it will always have an answer for it is old and wise."
      break;
    case rarityChance >= 50:
      finalResult = "You got the 32-bit 'Resourceful Slime' - RARITY: RARE";
      display.src = 
      discription = 'A simple shopkeep that is a... slime? He sells postions and food rations for travelers on the go, and his prices are cheap!'
      break;
    case rarityChance >= 25:
      finalResult = "You got the 8-bit 'Swift Kolbold' - RARITY: UNCOMMON";
      display.src = 
      discription = "A sporty Kolbold training to compete with the athletic sports in the human city nearby, lets wish him luck!"
      break;
    case rarityChance >= 10:
      finalResult = "You got a 2-bit 'Info Ferrit' - RARITY: COMMON";
      display.src = 
      discription = "An apprentice to the Quizical Dragon, he may not no much but as dedicated his life to helping adventures"
      break;
    case rarityChance < 10:
      finalResult = "You got a 1-bit 'Computer Mouse' - RARITY: TRASH";
      display.src = "https://i.ibb.co/1ks7XS3/New-Project.png"
      discription = "You sit infront of your computer, holding the new 'Binaria' floppy disc in your hands. You put the game in thinking this is an average text-based rpg, but you were wrong."
      break;
    default:
      finalResult = "nothing came"
    
  }

console.log(finalResult)

document.getElementById("p1").innerText = finalResult;
  
document.getElementById("p2").innerText = discription;
  
}
