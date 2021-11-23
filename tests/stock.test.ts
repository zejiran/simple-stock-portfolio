import { Stock } from "../src/stock";

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
        let date = today;
        let price = stock.getPrice(date);
        expect(price).toBe(stock.priceHistory[date.toISOString().slice(0, 10)])
    });
    it("should get today stock price if it is a future date", () => {
        let tomorrow: Date = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let future: Date = new Date();
        future.setDate(future.getDate() + 20);
        const futurePrice = stock.getPrice(future);
        const tommorowPrice = stock.getPrice(tomorrow);
        expect(tommorowPrice).toBe(futurePrice)
    });
    it("should get 0 if it is date prior to the opening of the stock in the market", () => {
        let invalidDate = new Date(100, 0, 1);
        let price = stock.getPrice(invalidDate);
        expect(price).toBe(0)
    });
});
