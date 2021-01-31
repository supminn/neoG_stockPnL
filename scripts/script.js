const txtOutput = document.querySelector(".txt-output");
const btnCheck = document.querySelector("#btn-check");
const spinner = document.querySelector('#spinner');


const checkLoad = () => {
    const purchasePrice = parseInt(document.querySelector("#purchase-price").value);
    const purchaseQty = parseInt(document.querySelector("#purchase-qty").value);
    const currentPrice = parseInt(document.querySelector("#current-price").value);
    if (isNaN(purchasePrice) || isNaN(purchaseQty) || isNaN(currentPrice)) {
        txtOutput.innerHTML = 'Inputs cannot be left blank, try again.'
    } else {
        txtOutput.classList.add('hidden');
        spinner.className = "show";
        setTimeout(() => {
            calculatePnL(purchasePrice, purchaseQty, currentPrice);
        }, 2000);
    }
}

const calculatePnL = (purchasePrice, purchaseQty, currentPrice) => {
    spinner.className = spinner.className.replace("show", "");
    txtOutput.classList.remove('hidden');
    let flag = purchasePrice <= currentPrice;
    if (flag) {
        //profit
        let priceDifference = (currentPrice - purchasePrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        console.log(profitLossPercentage + "% Profit of Rs" + profitLoss);
        document.querySelector("#img-desktop-green").classList.remove('hidden');
        document.querySelector("#img-desktop-red").classList.add('hidden');
        document.querySelector(".container").style.background = "linear-gradient(to left, var(--green) 60%, var(--lightestCream) 60%)";
        txtOutput.innerHTML = `🎉 You gained ${profitLossPercentage}% <br/>👍 Total profit of ₹${profitLoss}.`;
    } else {
        //loss
        let priceDifference = (purchasePrice - currentPrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        console.log(profitLossPercentage + "% Loss of Rs" + profitLoss);
        document.querySelector("#img-desktop-green").classList.add('hidden');
        document.querySelector("#img-desktop-red").classList.remove('hidden');
        document.querySelector(".container").style.background = "linear-gradient(to left, var(--red) 60%, var(--lightestCream) 60%)";
        txtOutput.innerHTML = `😞 You lost ${profitLossPercentage}% <br/>👎 Total loss of ₹${profitLoss}.`;
    }
}

btnCheck.addEventListener('click', checkLoad);

//https://stockreturnscalculator.netlify.app/style.css - change theme according to the mood