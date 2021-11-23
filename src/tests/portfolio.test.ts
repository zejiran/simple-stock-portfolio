import { Portfolio } from "../portfolio";

const portfolio: Portfolio = new Portfolio("Test Portfolio");
const finalDate: Date = new Date();
const initialDate: Date = new Date(2002, 4, 27);

describe('portfolio', () => {
    it("should generate random stocks", () => {
        expect(portfolio.stocks.length > 4).toBeTruthy();
        portfolio.stocks = [];
        expect(portfolio.stocks.length == 0).toBeTruthy();
        portfolio.generateRandomStocks();
        expect(portfolio.stocks.length > 4).toBeTruthy();
    });
    it("should get portfolio profit", () => {
        const profit: number = portfolio.getProfit(initialDate, finalDate);
        portfolio.generateRandomStocks();
        expect(profit != 0).toBeTruthy();
    });
    it("should invalid dates when getting profit", () => {
        const profit: number = portfolio.getProfit(finalDate, initialDate);
        expect(profit).toBe(0);
    });
    it("should get portfolio annualized return", () => {
        const annualizedReturn: number = portfolio.getAnnualizedReturnBetweenDates(initialDate, finalDate);
        expect(annualizedReturn != 0).toBeTruthy();
    });
    it("should invalid dates when getting annualized return", () => {
        const annualizedReturn: number = portfolio.getAnnualizedReturnBetweenDates(finalDate, initialDate);
        expect(annualizedReturn).toBe(0);
    });
});
