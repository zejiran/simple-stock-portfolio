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
    <p class="h3">${portfolio.name}</p>
    <p><span class="font-weight-bold">Stocks on this portfolio: </span>${portfolio.stocks.length}</p>
    `;
}

function queryProfitAndReturn() {
    const profitAndReturnInformation: HTMLElement = document.getElementById("profit-and-return")!;
    try {
        const startDateInput: HTMLInputElement = document.getElementById("date-start")! as HTMLInputElement;
        const endDateInput: HTMLInputElement = document.getElementById("date-end")! as HTMLInputElement;
        const initialDate: Date = new Date(startDateInput.value);
        const finalDate: Date = new Date(endDateInput.value);
        profitAndReturnInformation.innerHTML = `
            <p><span class="font-weight-bold">Profit: </span>${portfolio.getProfit(initialDate, finalDate)} USD</p>
            <p><span class="font-weight-bold">Annualized return: </span>${
            (portfolio.getAnnualizedReturnBetweenDates(initialDate, finalDate) * 100).toFixed(2)}%</p>
        `;
    } catch (e) {
        profitAndReturnInformation.innerHTML = `<p class="p-2 alert-danger">Error: ${e}</p>`
    }
}
