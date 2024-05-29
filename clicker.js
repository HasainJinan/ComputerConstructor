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

let wireButton = document.getElementById("wireButton")
//Variables//


//Money on Click.//
function addMoney () {
    counter = counter + 20 + wireCounter

    profits.innerText = "Money: $" + counter
}

//Buying Wires.//
function buyWires() {
    let wirePrice = 150 + wireCounter ** 2
    wireCost.innerText = "Cost: $" + wirePrice.toFixed(0)
    if (counter >= wirePrice.toFixed(0)) {
        counter = counter - wirePrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        wireCounter = wireCounter + 1
        wires.innerText = "Amount Owned: " + wireCounter
        wirePrice = 150 + wireCounter ** 2
        wireCost.innerText = "Cost: $" + wirePrice.toFixed(0)
    }
    else {
        let moneyWireLeft = wirePrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyWireLeft + " more to buy this item.")
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
    }
    else {
        let moneyRAMLeft = ramPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyRAMLeft + " more to buy this item.")
    }
}

//Buying GPUs.//
function buyGPU() {
    let gpuPrice = 5000 + gpuCounter ** 2
    gpuCost.innerText = "Cost: $" + gpuPrice.toFixed(0)
    if (counter >= gpuPrice.toFixed(0)) {
        counter = counter - gpuPrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        gpuCounter = gpuCounter + 1
        gpu.innerText = "Amount Owned: " + gpuCounter
        gpuPrice = 5000 + gpuCounter ** 2
        gpuCost.innerText = "Cost: $" + gpuPrice.toFixed(0)
    }
    else {
        let moneyGPULeft = gpuPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyGPULeft + " more to buy this item.")
    }
}

//Buying Hard Drives.//
function buyHD() {
    let hdPrice = 15000 + hdCounter ** 2
    hdCost.innerText = "Cost: $" + hdPrice.toFixed(0)
    if (counter >= hdPrice.toFixed(0)) {
        counter = counter - hdPrice.toFixed(0)
        profits.innerText = "Money: $" + counter
        hdCounter = hdCounter + 1
        hd.innerText = "Amount Owned: " + hdCounter
        hdPrice = 15000 + hdCounter ** 2
        hdCost.innerText = "Cost: $" + hdPrice.toFixed(0)
    }
    else {
        let moneyHDLeft = hdPrice.toFixed(0) - counter
        alert("Not enough money. You need $" + moneyHDLeft + " more to buy this item.")
    }
}

function gameLoop() {
    //Wire Counter is used to increase click power.//
    counter = counter + (20 * ramCounter) + (10 * gpuCounter) + (600 * hdCounter)
    profits.innerText = "Money: $" + counter
}

function checkPrice() {
    if (counter.toFixed(0) >= wirePrice.toFixed(0)) {
        wireButton.disabled = true

    }
    else {
        wireButton.disabled = false
    }
}

setInterval(gameLoop, 1000)

setInterval(checkPrice, 10)