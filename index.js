// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
findMatching(drivers, Bobby)


function fuzzyMatch(drivers, letters) {
    const filteredDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
    );

    
    const uniqueDrivers = Array.from(new Set(filteredDrivers));

    return uniqueDrivers;
}
fuzzyMatch(drivers, 'Sa')

function matchName(drivers, name){
    const matchingDrivers = drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    )
    
return matchingDrivers.length > 0 ? matchingDrivers : [];
}
fuzzyMatch(drivers, Bobby)