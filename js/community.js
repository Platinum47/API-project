// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {

  // "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
})

// Empty array to store comments
let comments = []

// storing the localstorage array comments in a variable
let userComments = JSON.parse(localStorage.getItem("comments"));

if (userComments !== null) {
  comments = userComments

  // Using for loop to populate comments in localstorage
  for (var i = userComments.length - 1; i >= 0; i--) {
    $("#savedComments").append(
      `<article class="message">
      <div class="message-header">
        <p>Anonymous User</p>
      </div>
      <div class="message-body">
        ${userComments[i]}
      </div>
    </article>
      `)
  }
}

// Button click to add comments
$("#btnAddComment").click(function () {

  let userInput = $("#userComment").val();

  if (userInput !== "") {
    comments.push(userInput);

    localStorage.setItem("comments", JSON.stringify(comments));

    $("#savedComments").prepend(
      `<article class="message">
     <div class="message-header">
       <p>Anonymous User</p>
     </div>
     <div class="message-body">
       ${userInput}
     </div>
   </article>
     `
    )

    $("#userComment").val("");
  }
  else {
    alert("Please enter a comment or go invest in some coins!")
  }
})