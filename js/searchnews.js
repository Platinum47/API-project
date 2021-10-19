$("#btnSearch").click(function(){

    const coinSearch = $("#searchInput").val()

    const newsApiKey = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${coinSearch}&api-key=XEv7Wh8V0Eh90GOa03WPoVhna4wBOc4G`;



    $.ajax({
        url: newsApiKey,
        method: "GET"
    }).then(function (response){
        
    console.log(response)
    
        $("#newsDisplay").html(
            `     <div class="card">
            <div class="card-content">
    
                <div class="media-content">
                  <p class="title is-4">Title: ${response.response.docs[0].abstract}</p>
                  <p class="subtitletwo"> url: ${response.response.docs[0].web_url}</p>
                  <p class="subtitletwo">Author: ${response.response.docs[0].source}</p>
                  
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