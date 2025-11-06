const popText = document.getElementById("popText");
let pop = 2;
const pauseCheck = document.getElementById("pause");
const pauseBtn = document.getElementById("pauseBtn");
const foodText = document.getElementById("foodText");
let food = 100;
let mcap = 100;
let fcap = 100;
const farmerText = document.getElementById("farmerText");
const farmerBtn = document.getElementById("hireFarmer");
const harvest = document.getElementById("harvest");
const goldText = document.getElementById("goldText");
const mine = document.getElementById("mine");
const minerText = document.getElementById("minerText");
const hireMiner = document.getElementById("hireMiner");
let gold = 500;
let farmers = 10;
let miners = 10;
setInterval(() => {
    if(food >= pop) {
    if(!pauseCheck.checked) {
    pop = pop*2;
    food -= Math.floor(pop/4);
    }
    } else {
    pop -= Math.floor(pop/10); 
    }
}, 1000);
let check = false;
pauseBtn.addEventListener("click", () => {
    check = !check;
    pauseCheck.checked = check;
});
farmerBtn.addEventListener("click", () => {
    if(fcap > farmers) {
    if(pop > farmers) {
    farmers += 10;
    pop -= 10;
    }
    }
});
harvest.addEventListener("click", () => {
    food += farmers;;
});
hireMiner.addEventListener("click", () => {
    if(miners < mcap) {
    if(pop > farmers) {
    miners += 10;
    pop -= 10;
    }
    }
});
mine.addEventListener("click", () => {
    gold += miners/10;
})
document.getElementById("bread").addEventListener("click", () => {
    if(gold >= 50) {
        gold -= 50;
        food += 50;
    }
});
let landCost = 5000;
document.getElementById("farmLand").addEventListener("click", () => {
    if(gold >= landCost && pop >= 10000) {
    gold -= landCost;
    fcap = fcap*2;
    landCost = Math.floor((landCost*25)/10);
    }
});
let caveCost = 10000;
document.getElementById("caves").addEventListener("click", () => {
    if(gold >= caveCost && pop >= 15000) {
    gold -= caveCost;
    mcap = mcap*2;
    caveCost = Math.floor((caveCost*25)/10);
    }
});
setInterval(() => {
    pop -= Math.floor(pop/50)+1;
    food -= Math.floor(food/10)+1;
}, 5000)
setInterval(() => {
    popText.textContent = `${pop}`;
    foodText.textContent = `${food}`;
    minerText.textContent = `${miners}`;
    goldText.textContent = `${gold}`;
    farmerText.textContent = `${farmers}`;
    document.getElementById("minerCap").textContent = `${mcap}`;
    document.getElementById("cavePrice").textContent = `${caveCost}`;
    document.getElementById("landPrice").textContent = `${landCost}`;
    document.getElementById("farmerCap").textContent = `${fcap}`;
}, 50);