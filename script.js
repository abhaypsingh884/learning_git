
console.log("abhay ");

const populate = async (currency, value) => {
    myStr = "";

    url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_k6TOv268URRffqW92b0OHjAWCR8KRcOqTGSsagDm&base_currency=${currency}`;
    let res = await fetch(url);
    let response = await res.json();
    for (let key of Object.keys(response.data)) {
        myStr += `
    <tr>

    <td>${key}</td>
    <td>${response["data"][key]["code"]}</td>
    <td>${Math.round(response["data"][key]["value"] * value)}</td>
</tr> `
    }

    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = myStr;

}

btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    console.log("hii")
    e.preventDefault();
    const currency = document.querySelector('select[name="your_Currency"]').value;
    const quantity = parseInt(document.querySelector('input[name="your_Quantity"]').value);
    populate(currency, quantity);

});


