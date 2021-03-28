const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);

}

function destructivelyRemoveLastDriver() {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    const newDrivers = [...drivers];
    newDrivers.push(name);
    return newDrivers;
}

function prependDriver(name) {
    const newDrivers = [...drivers];
    newDrivers.unshift(name);
    return newDrivers;
}

function removeLastDriver() {
    const newDrivers = [...drivers];
    newDrivers.pop();
    return newDrivers;
}

function removeFirstDriver() {
    const newDrivers = [...drivers];
    newDrivers.shift();
    return newDrivers;
}