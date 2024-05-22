let counter = 0
let profits = document.getElementById("profits")
profits.innerText = "Money: $0"
let wireCounter = 0
let wires = document.getElementById("wiresOwned")
wires.innerText = "Amount Owned: 0"
let ramCounter = 0
let ram = document.getElementById("ramOwned")
ram.innerText = "Amount Owned: 0"
let gpuCounter = 0
let gpu = document.getElementById("gpuOwned")
gpu.innerText = "Amount Owned: 0"

function addMoney () {
    counter = counter + 400

    profits.innerText = "Money: $" + counter
}

function buyWires() {
    if (counter >= 100) {
        counter = counter - 100
        profits.innerText = "Money: $" + counter
        wireCounter = wireCounter + 1
        wires.innerText = "Amount Owned: " + wireCounter
    }
    else {
        let moneyWireLeft = 100 - counter
        alert("Not enough money. You need $" + moneyWireLeft + " more to buy this item.")
    }
}

function buyRAM() {
    if (counter >= 700) {
        counter = counter - 700
        profits.innerText = "Money: $" + counter
        ramCounter = ramCounter + 1
        ram.innerText = "Amount Owned: " + ramCounter
    }
    else {
        let moneyRAMLeft = 700 - counter
        alert("Not enough money. You need $" + moneyRAMLeft + " more to buy this item.")
    }
}

function buyGPU() {
    if (counter >= 5000) {
        counter = counter - 5000
        profits.innerText = "Money: $" + counter
        gpuCounter = gpuCounter + 1
        gpu.innerText = "Amount Owned: " + gpuCounter
    }
    else {
        let moneyGPULeft = 5000 - counter
        alert("Not enough money. You need $" + moneyGPULeft + " more to buy this item.")
    }
}