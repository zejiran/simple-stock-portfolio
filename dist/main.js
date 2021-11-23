import { Portfolio } from "./portfolio.js";
var btnQueryProfit = document.getElementById("query-profit");
var portfolio = new Portfolio("First portfolio");
renderPortfolio();
btnQueryProfit.onclick = function () { return queryProfitAndReturn(); };
function renderPortfolio() {
    var stocksNumber = document.getElementById("stocks-number");
    stocksNumber.innerHTML = "\n    <p class=\"h3\">".concat(portfolio.name, "</p>\n    <p><span class=\"font-weight-bold\">Stocks on this portfolio: </span>").concat(portfolio.stocks.length, "</p>\n    ");
}
function queryProfitAndReturn() {
    var profitAndReturnInformation = document.getElementById("profit-and-return");
    try {
        var startDateInput = document.getElementById("date-start");
        var endDateInput = document.getElementById("date-end");
        var initialDate = new Date(startDateInput.value);
        var finalDate = new Date(endDateInput.value);
        profitAndReturnInformation.innerHTML = "\n            <p><span class=\"font-weight-bold\">Profit: </span>".concat(portfolio.getProfit(initialDate, finalDate), " USD</p>\n            <p><span class=\"font-weight-bold\">Annualized return: </span>").concat((portfolio.getAnnualizedReturnBetweenDates(initialDate, finalDate) * 100).toFixed(2), "%</p>\n        ");
    }
    catch (e) {
        profitAndReturnInformation.innerHTML = "<p class=\"p-2 alert-danger\">Error: ".concat(e, "</p>");
    }
}
