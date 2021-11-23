var Stock = /** @class */ (function () {
    function Stock() {
        this.priceHistory = {};
        this.generateRandomPriceHistory();
    }
    Stock.prototype.generateRandomPriceHistory = function () {
        var today = new Date();
        var openingOfStock = new Date(1900, 0, 1);
        // Assign a price between 1 USD and 500 USD to each date in the stock price history.
        for (var d = openingOfStock; d <= today; d.setDate(d.getDate() + 1)) {
            this.priceHistory[d.toISOString().slice(0, 10)] = Math.floor(Math.random() * (500 - 1) + 1);
        }
    };
    Stock.prototype.getPrice = function (date) {
        var today = new Date();
        // Verify that the date exists in the stock price history.
        if (date >= today) {
            date = today;
            date.setDate(date.getDate() - 1); // If price is requested with a future date, returns current value.
        }
        else if (date < new Date(1900, 0, 1)) {
            return 0; // If it is a date prior to the opening of the stock in the market, returns 0.
        }
        return this.priceHistory[date.toISOString().slice(0, 10)];
    };
    return Stock;
}());
export { Stock };
