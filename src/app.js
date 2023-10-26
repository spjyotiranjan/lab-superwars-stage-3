const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];

  // Instead of forloop use Map method
  // Code here
    players.map((curr, i) => {
      let hero_or_villain = i%2==0 ? "hero":"villain"
      let obj = {
      name: curr,
      strength: getRandomStrength(),
      image: `./images/super-${i+1}.png`,
      type: hero_or_villain,
    };
    detailedPlayers.push(obj)
    return detailedPlayers
  });
  console.log(detailedPlayers);
  return detailedPlayers;
};


// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  let super_arr = players.filter((curr)=>{
    return curr.type == type
  })

  let div_arr = super_arr.map((curr)=>{
    let div = `<div class="player">
                   <img src="${curr.image}" alt="">
                   <div class="name">${curr.name}</div>
                   <div class="strength">${curr.strength}</div>
               </div>`

    return div
  })
  
  fragment = div_arr.join("")
 
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(players,"villain");
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};