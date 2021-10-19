$("#btnSearch").click(function(){

    const coinSearch = $("#searchInput").val()
    
    const messariAPI = `https://data.messari.io/api/v1/assets/${coinSearch}/metrics`;
    
    $.ajax({
        url: messariAPI,
        method: "GET"
    }).then(function (response){
        $("#coinDisplay").html(
            `     <div class="card">
            <div class="card-content">
    
                <div class="media-content">
                  <p class="title is-4">Coin Name: ${response.data.name}</p>
                  <p class="subtitletwo"> Symbol: ${response.data.symbol}</p>
                  <p class="subtitletwo">USD Price: ${response.data.market_data.price_usd.toFixed(2)}</p>
                  <p class="subtitletwo">Market Cap Rank: ${response.data.marketcap.rank}</p>
                </div>
              </div>
          
              <div class="content">
              
              </div>
            </div>
          </div>
            `
        )
   
        });

    




})



