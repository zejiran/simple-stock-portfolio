import { Stock } from "./stock.js";

export class Portfolio {
    stocks: Stock[] = [];

    constructor() {
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
}
