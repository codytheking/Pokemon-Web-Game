// MOVES
var moveList = [{
    name: "Dig",
    type: ["Ground"],
    attDef: "Attack",
    status: null,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 100,
    accuracy: 1,
    priority: 0,
    pp: 10
},
{
    name: "Slash",
    type: ["Normal"],
    attDef: "Attack",
    status: null,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 70,          // hit crit percentage move
    accuracy: 1,
    priority: 0,
    pp: 20
},
{
    name: "Flamethrower",
    type: ["Fire"],
    attDef: "Attack",
    status: null,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 95,
    accuracy: 1,
    priority: 0,
    pp: 15
},
{
    name: "Mega Punch",
    type: ["Normal"],
    attDef: "Attack",
    status: null,
    statusPerc: 0,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 80,
    accuracy: 0.85,
    priority: 0,
    pp: 20
},
{
    name: "Thunder Wave",
    type: ["Electric"],
    attDef: "Status",
    status: "PAR",
    statusPerc: 1,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 0,
    accuracy: 1,
    priority: 0,
    pp: 20
},
{
    name: "Quick Attack",
    type: ["Normal"],
    attDef: "Attack",
    status: null,
    statusPerc: 0,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 40,
    accuracy: 1,
    priority: 1,
    pp: 30
},
{
    name: "Thunderbolt",
    type: ["Electric"],
    attDef: "Attack",
    status: null,
    statusPerc: 0,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 95,
    accuracy: 1,
    priority: 0,
    pp: 15
},
{
    name: "Thunder",
    type: ["Electric"],
    attDef: "Attack",
    status: null,
    statusPerc: 0,
    statMod: null,
    stageMod: null,
    secStatMod: null,
    secStageMod: null,
    power: 120,
    accuracy: 0.7,
    priority: 0,
    pp: 10
},
{
    name: "Agility",
    type: ["Psychic"],
    attDef: "Status",
    status: null,
    statusPerc: 0,
    statMod: "Speed",
    stageMod: 2,
    secStatMod: null,
    secStageMod: null,
    power: 0,
    accuracy: 1,
    priority: 0,
    pp: 30
},
{
    name: "Bubblebeam",
    type: ["Water"],
    attDef: "Attack",
    status: null,
    statusPerc: 0,
    statMod: null,
    stageMod: null,
    secStatMod: "Speed",
    secStageMod: 0.332,
    power: 65,
    accuracy: 1,
    priority: 0,
    pp: 20
}];