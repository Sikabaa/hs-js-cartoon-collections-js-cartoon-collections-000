

function dwarfRollCall(dwarves) {let listDwarves = []
  for(let i = 0; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return listDwarves.join("");
}

function summonCaptainPlanet(planeteerCalls){ let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    let punctuation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${punctuation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
