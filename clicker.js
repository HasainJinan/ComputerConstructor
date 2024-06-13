//Variables//
let counter = 0
let profits = document.getElementById("profits")
profits.innerText = "Money: $0"

let wireCounter = 0
let wires = document.getElementById("wiresOwned")
let wireCost = document.getElementById("wireCost")
wires.innerText = "Amount Owned: 0"

let ramCounter = 0
let ram = document.getElementById("ramOwned")
let ramCost = document.getElementById("ramCost")
ram.innerText = "Amount Owned: 0"

let gpuCounter = 0
let gpu = document.getElementById("gpuOwned")
let gpuCost = document.getElementById("gpuCost")
gpu.innerText = "Amount Owned: 0"

let hdCounter = 0
let hd = document.getElementById("hdOwned")
let hdCost = document.getElementById("hdCost")
hd.innerText = "Amount Owned: 0"

let cpsValue = document.getElementById("cpsValue")

let bonus = 0
let bonusState = 0

let progress1000 = 0
let progress10000 = 0
let progress50000 = 0

let bgMusic = new Howl({
    src: ["bgMusic.mp3"],
    autoplay: true,
    volume: 0.05,
    loop: true
})

let click = new Howl({
    src: ["click.wav"],
    volume: 0.15
})

let upgrade = new Howl({
    src: ["upgrade.wav"],
    volume: 0.02
})

let achievement = new Howl({
    src:["achievement.wav"],
    volume: 0.02
})

let progressBox1000 = document.getElementById("1000progress")
let progressBox10000 = document.getElementById("10000progress")
let progressBox50000 = document.getElementById("50000progress")

let randomEvent = document.getElementById("randomEvent")
let randomEventBad = document.getElementById("randomEventBad")
let numX = Math.floor(Math.random() * 101)
let numY = Math.floor(Math.random() * 101)

let debuff = 0
let debuffText = document.getElementById("debuffText")

let opacity = 0; 
let opacity2 = 0;
let opacity3 = 0;
let opacity4 = 0;
//Variables//


function muteMusic () {
    bgMusic.pause()
}

function playMusic () {
    bgMusic.play()
}

//Money on Click.//
function addMoney() {
    click.play()

    if (debuff == 1) {
        counter = counter + 1
        profits.innerText = "Money: $" + counter
    }
    else {
        counter = counter + 2 + wireCounter
        profits.innerText = "Money: $" + counter
    }
}

//Buying Wires.//
function buyWires() {
    let wirePrice = 150 + wireCounter ** 3
    wireCost.innerText = "Cost: $" + wirePrice.toFixed(0)
    if (counter >= wirePrice.toFixed(0)) {
        counter = counter - wirePrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        wireCounter = wireCounter + 1
        wires.innerText = "Amount Owned: " + wireCounter
        wirePrice = 150 + wireCounter ** 3
        wireCost.innerText = "Cost: $" + wirePrice.toFixed(0)
        upgrade.play()
    }
}

//Buying RAM.//
function buyRAM() {
    let ramPrice = 700 + ramCounter ** 3
    ramCost.innerText = "Cost: $" + ramPrice.toFixed(0)
    if (counter >= ramPrice.toFixed(0)) {
        counter = counter - ramPrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        ramCounter = ramCounter + 1
        ram.innerText = "Amount Owned: " + ramCounter
        ramPrice = 700 + ramCounter ** 3
        ramCost.innerText = "Cost: $" + ramPrice.toFixed(0)
        upgrade.play()
    }
    else {
        let moneyRAMLeft = ramPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyRAMLeft + " more to buy this item.")
    }
}

//Buying GPUs.//
function buyGPU() {
    let gpuPrice = 5000 + gpuCounter ** 4
    gpuCost.innerText = "Cost: $" + gpuPrice.toFixed(0)
    if (counter >= gpuPrice.toFixed(0)) {
        counter = counter - gpuPrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        gpuCounter = gpuCounter + 1
        gpu.innerText = "Amount Owned: " + gpuCounter
        gpuPrice = 5000 + gpuCounter ** 4
        gpuCost.innerText = "Cost: $" + gpuPrice.toFixed(0)
        upgrade.play()
    }
    else {
        let moneyGPULeft = gpuPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyGPULeft + " more to buy this item.")
    }
}

//Buying Hard Drives.//
function buyHD() {
    let hdPrice = 15000 + hdCounter ** 4
    hdCost.innerText = "Cost: $" + hdPrice.toFixed(0)
    if (counter >= hdPrice.toFixed(0)) {
        counter = counter - hdPrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        hdCounter = hdCounter + 1
        hd.innerText = "Amount Owned: " + hdCounter
        hdPrice = 15000 + hdCounter ** 4
        hdCost.innerText = "Cost: $" + hdPrice.toFixed(0)
        upgrade.play()
    }
    else {
        let moneyHDLeft = hdPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyHDLeft + " more to buy this item.")
    }
}

function gameLoop() {
    //Wire Counter is used to increase click power.//
    if (debuff == 0) {
        counter = counter + (5 * ramCounter) + (20 * gpuCounter) + (100 * hdCounter)
        profits.innerText = "Money: $" + counter
    }
}

function checkPrice() {
    if (counter.toFixed(0) >= 150 + wireCounter ** 3) {
        wireButton.disabled = false
    }
    else {
        wireButton.disabled = true
    }
    if (counter.toFixed(0) >= 700 + ramCounter ** 3) {
        ramButton.disabled = false
    }
    else {
        ramButton.disabled = true
    }
    if (counter.toFixed(0) >= 5000 + gpuCounter ** 4) {
        gpuButton.disabled = false
    }
    else {
        gpuButton.disabled = true
    }
    if (counter.toFixed(0) >= 15000 + hdCounter ** 4) {
        hdButton.disabled = false
    }
    else {
        hdButton.disabled = true
    }
}

function progress() {
    if (progress1000 == 0 && counter >= 1000) {
        progressBox1000.style.opacity = opacity
        progressBox1000.style.display = "block";
        achievement.play()
        progress1000 = 1;
        animation();
    }
    if (progress10000 == 0 && counter >= 10000) {
        progressBox10000.style.opacity = opacity2
        progressBox10000.style.display = "block";
        achievement.play()
        progress10000 = 1;
        animation2();
    }
    if (progress50000 == 0 && counter >= 50000) {
        progressBox50000.style.opacity = opacity3
        progressBox50000.style.display = "block";
        achievement.play()
        progress50000 = 1;
        animation3();
    }
}
function closeProgress1() {
    progressBox1000.style.display = "none";
}

function closeProgress2() {
    progressBox10000.style.display = "none";
}

function closeProgress3() {
    progressBox50000.style.display = "none";
}

function hideEvent() {
    randomEvent.style.display = "none";
    randomEventBad.style.display = "none";
}

function changePos() {
    numX = Math.floor(Math.random() * 101)
    numY = Math.floor(Math.random() * 101)
    bonusState = Math.random()
    if (bonusState >= 0.5) {
        randomEvent.style.top = numX + "vh";
        randomEvent.style.left = numY + "vw";
        randomEvent.style.display = "block";
    }
    else {
        randomEventBad.style.top = numX + "vh";
        randomEventBad.style.left = numY + "vw";
        randomEventBad.style.display = "block";
    }
    setTimeout(hideEvent, 10000)
}

function debuff_() {
    debuffText.style.left = 28 + "vw";
    debuffText.style.opacity = opacity4
    debuffText.style.display = "block";
    animation4();
    setTimeout(animation5, 6000)
    debuff = 1
    setTimeout(endDebuff, 20000)
}

function endDebuff() {
    debuff = 0
}

function animation() {
    if (opacity < 1) {
        opacity = opacity + 0.1
        progressBox1000.style.opacity = opacity
        setTimeout(animation, 50)
    }
}

function animation2() {
    if (opacity2 < 1) {
        opacity2 = opacity2 + 0.1
        progressBox10000.style.opacity = opacity2
        setTimeout(animation2, 50)
    }
}

function animation3() {
    if (opacity3 < 1) {
        opacity3 = opacity3 + 0.1
        progressBox50000.style.opacity = opacity3
        setTimeout(animation3, 50)
    }
}

function animation4 () {
    if (opacity4 < 1) {
        opacity4 = opacity4 + 0.1
        debuffText.style.opacity = opacity4
        setTimeout(animation4, 50)
    }
}

function animation5() {
    if (opacity4 > 0) {
        opacity4 = opacity4 - 0.1
        debuffText.style.opacity = opacity4
        setTimeout(animation5, 50)
    }
}

function bonusMoney() {
    bonus = bonus + 1
    counter = counter + (bonus * 200)
    profits.innerText = "Money: $" + counter
}

function cps() {
    if (debuff == 0) {
        cpsValue.innerText = "$" + (5 * ramCounter + 20 * gpuCounter + 100 * hdCounter) + " per second"
    }
    else {
        cpsValue.innerText = "$0 per second"
    }
}

setInterval(cps, 10)

setInterval(gameLoop, 1000)

setInterval(checkPrice, 10)

setInterval(progress, 10)

setInterval(changePos, 100000 + Math.floor(Math.random() * 20001))