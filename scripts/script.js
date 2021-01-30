const txtOutput = document.querySelector(".txt-output");
const btnCheck = document.querySelector("#btn-check");

const calculatePnL = () => {
    const purchasePrice = parseInt(document.querySelector("#purchase-price").value);
    const purchaseQty = parseInt(document.querySelector("#purchase-qty").value);
    const currentPrice = parseInt(document.querySelector("#current-price").value);
    let flag = purchasePrice < currentPrice;
    if (flag) {
        //profit
        let priceDifference = (currentPrice - purchasePrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        console.log(profitLossPercentage + "% Profit of Rs" + profitLoss);
        document.querySelector("#img-desktop-green").classList.remove('hidden');
        document.querySelector("#img-desktop-red").classList.add('hidden');
        document.querySelector(".container").style.background = "linear-gradient(to left, var(--green) 60%, var(--lightestCream) 60%)";
        txtOutput.innerText = `🎉 You gained ${profitLossPercentage}% 👍. Total profit of ₹${profitLoss}!`;
    } else {
        //loss
        let priceDifference = (purchasePrice - currentPrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        console.log(profitLossPercentage + "% Loss of Rs" + profitLoss);
        if (profitLossPercentage > 50) {
            document.querySelector("#img-desktop-green").classList.add('hidden');
            document.querySelector("#img-desktop-red").classList.remove('hidden');
            document.querySelector(".container").style.background = "linear-gradient(to left, var(--red) 60%, var(--lightestCream) 60%)";
            txtOutput.innerText = `😞 You lost ${profitLossPercentage}% 👎. Total loss of ₹${profitLoss}!`;
        }
    }
}

btnCheck.addEventListener('click', calculatePnL);