import { Portfolio } from "./portfolio.js";

const portfolios: HTMLElement = document.getElementById("portfolios")!;
const btnQueryProfit: HTMLElement = document.getElementById("query-profit")!;
const portfolio: Portfolio = new Portfolio("First portfolio");
const portfolioInformation: HTMLElement = document.getElementById("stocks-number")!;

renderPortfolio();
btnQueryProfit.onclick = () => queryProfitAndReturn();

function renderPortfolio() {
    const portfolioInformation: HTMLElement = document.getElementById("stocks-number")!;
    portfolioInformation.innerHTML = `
    <h4 class="card-title">${portfolio.name}</h4>
    <p>Stocks on this portfolio: ${portfolio.stocks.length}</p>
    `;
}

function queryProfitAndReturn() {
    const startDateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date-start")!;
    const endDateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date-end")!;
    const profitAndReturnInformation: HTMLElement = document.getElementById("profit-and-return")!;
    const initialDate: Date = new Date(startDateInput.value);
    const finalDate: Date = new Date(endDateInput.value);
    profitAndReturnInformation.innerHTML = `
    <p>Profit: ${portfolio.getProfit(initialDate, finalDate)} USD</p>
    <p>Annualized return: ${(portfolio.getAnnualizedReturnBetweenDates(initialDate, finalDate) * 100).toFixed(2)}%</p>
    `;
}
