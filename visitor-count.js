function visitor_counter(){
  fetch("https://64s923sky4.execute-api.us-east-1.amazonaws.com/visitor_counter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
  })
}
