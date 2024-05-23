function calcuAverage(mark1, mark2) {
    if (mark1 < 0 || mark2 < 0)
        return "Invalid Scores";
    else
        return (mark1 + mark2) / 2;
}
function showDetails(amount) {
    if (typeof (amount) == "number") {
        console.log("Given amount is Rs." + amount);
    }
    else
        console.log("amount in words " + amount);
}
showDetails("three hundred");
console.log(calcuAverage("eight0", 95));
