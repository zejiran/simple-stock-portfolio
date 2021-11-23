import { Stock } from "./stock.js";

export class Portfolio {
    stocks: Stock[] = [];
    name: string = "";

    constructor(name: string) {
        this.name = name;
        this.generateRandomStocks();
    }

    generateRandomStocks(): void {
        const numberOfStocks: number = Math.floor(Math.random() * (20 - 5) + 5);
        for (let i = 0; i < numberOfStocks; ++i) (this.stocks)[i] = new Stock();
    }

    getProfit(initialDate: Date, finalDate: Date): number {
        let profit: number = 0;
        if (finalDate < initialDate) {
            console.error("Final date must be later than the initial date");
        } else {
            this.stocks.forEach((stock) => {
                profit += stock.getPrice(finalDate) - stock.getPrice(initialDate);
            });
        }
        return profit;
    }

    getAnnualizedReturnBetweenDates(initialDate: Date, finalDate: Date): number {
        if (finalDate < initialDate) {
            console.error("Final date must be later than the initial date");
            return 0;
        }
        let initialPortfolioValue: number = 0;
        let finalPortfolioValue: number = 0;
        this.stocks.forEach((stock) => {
            initialPortfolioValue += stock.getPrice(initialDate);
            finalPortfolioValue += stock.getPrice(finalDate);
        });
        return ((finalPortfolioValue / initialPortfolioValue) - 1);
    }
}
