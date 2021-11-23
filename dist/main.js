import { Portfolio } from "./portfolio.js";
var portfolios = document.getElementById("portfolios");
var btnQueryProfit = document.getElementById("query-profit");
var portfolio = new Portfolio("First portfolio");
var portfolioInformation = document.getElementById("stocks-number");
renderPortfolio();
btnQueryProfit.onclick = function () { return queryProfitAndReturn(); };
function renderPortfolio() {
    var portfolioInformation = document.getElementById("stocks-number");
    portfolioInformation.innerHTML = "\n    <h4 class=\"card-title\">".concat(portfolio.name, "</h4>\n    <p>Stocks on this portfolio: ").concat(portfolio.stocks.length, "</p>\n    ");
}
function queryProfitAndReturn() {
    var startDateInput = document.getElementById("date-start");
    var endDateInput = document.getElementById("date-end");
    var profitAndReturnInformation = document.getElementById("profit-and-return");
    var initialDate = new Date(startDateInput.value);
    var finalDate = new Date(endDateInput.value);
    profitAndReturnInformation.innerHTML = "\n    <p>Profit: ".concat(portfolio.getProfit(initialDate, finalDate), " USD</p>\n    <p>Annualized return: ").concat((portfolio.getAnnualizedReturnBetweenDates(initialDate, finalDate) * 100).toFixed(2), "%</p>\n    ");
}
