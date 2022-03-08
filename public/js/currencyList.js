let target = 'USD';

async function getInformationsFromAPI() {

    try {
        const res = await fetch(`http://api.coinlayer.com/api/${endpoint}&target=${target}?access_key=${access_key}`);
        const datas = await res.json();
        // set endpoint and your API access key
        console.log(datas);


        datasDisplayTable(datas);
    } catch (error) {
        console.error(error);
    }

}

getInformationsFromAPI();

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


function datasDisplayTable(datas) {
    const rates = datas.rates;
    const tableau = document.querySelector('#tableau');
    tableau.innerHTML = "";
    for (let i in rates) {
        // document.querySelector('#test').innerHTML += i + "=" + rates[i] + '<br>'

        tableau.innerHTML += ` <tr class="table-dark">
        <th scope="row">${i}</th>
        <td>${rates[i]}</td>
    </tr>`
    }
}