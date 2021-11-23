import { Stock } from "./stock";

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
        if (finalDate >= initialDate) {
            this.stocks.forEach((stock) => {
                profit += stock.getPrice(finalDate) - stock.getPrice(initialDate);
            });
        }
        return profit;
    }

    getAnnualizedReturnBetweenDates(initialDate: Date, finalDate: Date): number {
        // Final date must be greater than the initial date.
        if (finalDate < initialDate) {
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
