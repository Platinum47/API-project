const coindeskApi = "https://api.coindesk.com/v1/bpi/currentprice.json";

$.ajax({
    url: coindeskApi,
    method: "GET"
}).then(function (response){
    const data = JSON.parse(response)
    console.log(data)
    $("#usd").html(`
    <div class="tile is-parent ">
            <article class="tile is-child notification is-primary">
              <p class="title">${data.bpi.USD.description} (${data.bpi.USD.code})</p>
              <p class="subtitle">${data.bpi.USD.rate}</p>
            </article>
        </div>
    `)
    $("#gbp").html(`
    <div class="tile is-parent ">
            <article class="tile is-child notification is-primary">
              <p class="title">${data.bpi.GBP.description} (${data.bpi.GBP.code})</p>
              <p class="subtitle">${data.bpi.GBP.rate}</p>
            </article>
        </div>
    `)
    $("#eur").html(`
    <div class="tile is-parent ">
            <article class="tile is-child notification is-primary">
              <p class="title">${data.bpi.EUR.description} (${data.bpi.EUR.code})</p>
              <p class="subtitle">${data.bpi.EUR.rate}</p>
            </article>
        </div>
    `)

    
})