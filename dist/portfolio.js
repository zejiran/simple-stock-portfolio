import { Stock } from "./stock.js";
var Portfolio = /** @class */ (function () {
    function Portfolio(name) {
        this.stocks = [];
        this.name = "";
        this.name = name;
        this.generateRandomStocks();
    }
    Portfolio.prototype.generateRandomStocks = function () {
        var numberOfStocks = Math.floor(Math.random() * (20 - 5) + 5);
        for (var i = 0; i < numberOfStocks; ++i)
            (this.stocks)[i] = new Stock();
    };
    Portfolio.prototype.getProfit = function (initialDate, finalDate) {
        var profit = 0;
        if (finalDate >= initialDate) {
            this.stocks.forEach(function (stock) {
                profit += stock.getPrice(finalDate) - stock.getPrice(initialDate);
            });
        }
        return profit;
    };
    Portfolio.prototype.getAnnualizedReturnBetweenDates = function (initialDate, finalDate) {
        // Final date must be greater than the initial date.
        if (finalDate < initialDate) {
            return 0;
        }
        var initialPortfolioValue = 0;
        var finalPortfolioValue = 0;
        this.stocks.forEach(function (stock) {
            initialPortfolioValue += stock.getPrice(initialDate);
            finalPortfolioValue += stock.getPrice(finalDate);
        });
        return ((finalPortfolioValue / initialPortfolioValue) - 1);
    };
    return Portfolio;
}());
export { Portfolio };
