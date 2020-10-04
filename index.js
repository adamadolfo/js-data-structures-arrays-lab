// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
     const allDrivers = [...drivers, name]
     return allDrivers
}

function prependDriver(name) {
    const preDrivers = [ name, ...drivers]
     return preDrivers
}

function removeLastDriver(name) {
    const lastDriver = drivers.slice(0, drivers.length - 1)
    return lastDriver
}

function removeFirstDriver(name) {
    const firstDriver = drivers.slice(1)
    return firstDriver
}