import { Stock } from "../stock";

const stock: Stock = new Stock();
const today: Date = new Date();

describe('stock', () => {
    beforeEach(() => {
        stock.priceHistory = {};
        stock.generateRandomPriceHistory()
    });

    it("should generate random price history", () => {
        expect(typeof stock.priceHistory['1900-01-01'] === 'number').toBeTruthy();
        stock.priceHistory = {};
        expect(typeof stock.priceHistory['1900-01-01'] === 'undefined').toBeTruthy();
        stock.generateRandomPriceHistory();
        expect(typeof stock.priceHistory['1900-01-01'] === 'number').toBeTruthy();
    });
    it("should get stock price", () => {
        const date: Date = today;
        const price: number = stock.getPrice(date);
        expect(price).toBe(stock.priceHistory[date.toISOString().slice(0, 10)])
    });
    it("should get today stock price if it is a future date", () => {
        const tomorrow: Date = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const future: Date = new Date();
        future.setDate(future.getDate() + 20);
        const futurePrice: number = stock.getPrice(future);
        const tommorowPrice: number = stock.getPrice(tomorrow);
        expect(tommorowPrice).toBe(futurePrice)
    });
    it("should get 0 if it is date prior to the opening of the stock in the market", () => {
        const invalidDate: Date = new Date(100, 0, 1);
        const price: number = stock.getPrice(invalidDate);
        expect(price).toBe(0)
    });
});
