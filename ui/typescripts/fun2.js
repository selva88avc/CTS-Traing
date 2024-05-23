function calcuInterest(year, amount, changedinterest) {
    if (changedinterest != undefined) {
        return amount * changedinterest / 100 * year;
    }
    else
        return amount * 8 / 100 * year;
}
console.log(calcuInterest(10, 1000));
console.log(calcuInterest(10, 10000, 10));
