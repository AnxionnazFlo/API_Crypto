let target = 'USD';





async function getInformationsFromAPI() {

    try {
        const res = await fetch(`http://api.coinlayer.com/api/${endpoint}&target=${target}?access_key=${access_key}`);
        const datas = await res.json();
        // set endpoint and your API access key
        console.log(datas);

        displayDatas(datas);

    } catch (error) {
        console.error(error);
    }

}

getInformationsFromAPI();

function displayDatas(datas) {
    let symbol;
    let unixTimestamp = datas.timestamp;
    var date = new Date(unixTimestamp * 1000);
    const twoDigitMinutes = date.toLocaleString("fr-fr", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: "2-digit" });
    const maj = document.querySelectorAll('.mise-a-jour');
    const cours = document.querySelectorAll('.cours-actuel');

    for (let i = 0; i < maj.length; i++) {
        maj[i].innerHTML = twoDigitMinutes;
    }
    if (target == 'USD') {
        symbol = '$';
    } else {
        symbol = '€';
    }
    for (let y = 0; y < cours.length; y++) {
        cours[y].innerHTML = "Cours actuel (" + target + ")";
    }


    document.querySelector('#BTC').innerHTML = datas.rates.BTC.toFixed(2) + " " + symbol;
    document.querySelector('#ETH').innerHTML = datas.rates.ETH.toFixed(2) + " " + symbol;
    document.querySelector('#USDT').innerHTML = datas.rates.USDT.toFixed(2) + " " + symbol;
    document.querySelector('#BNB').innerHTML = datas.rates.BNB.toFixed(2) + " " + symbol;

    const currencyMAJ = document.querySelectorAll('.currencyMaj');

    for (let i = 0; i < currencyMAJ.length; i++) {
        currencyMAJ[i].style.backgroundColor = "grey";
        setTimeout(function() {
            currencyMAJ[i].style.transitionDuration = "2s";
            currencyMAJ[i].style.backgroundColor = "black";

        }, 2000)
    }




}

document.querySelector('#update').addEventListener('click', function() {
    getInformationsFromAPI();
});

document.querySelector('#euro').addEventListener('click', function() {
    target = 'EUR';
    getInformationsFromAPI();
});
document.querySelector('#dollar').addEventListener('click', function() {
    target = 'USD';
    getInformationsFromAPI();
});