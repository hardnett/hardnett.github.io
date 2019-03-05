function myFunction() {
  var searchInput;

  searchInput = document.getElementById("searchInput")

  const Http = new XMLHttpRequest();
  const url="https://images-api.nasa.gov/search?q=" + encodeURIComponent(searchInput.value) + "&media_type=image";
  console.log(url);
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange=(e)=>{
    var processedResponse = escapeSpecialChars(Http.responseText);
    console.log(processedResponse)
    obj = JSON.parse(processedResponse);

    document.getElementById("results").innerHTML = "The total number of hits: " + obj.collection.metadata.total_hits + "<p>";
    document.getElementById("results").innerHTML += "The total number of items found: " + obj.collection.items.length + "<p>";
    for (var i = 0; i < obj.collection.items.length; i++) {
      document.getElementById("results").innerHTML += "item # " + i + ": " + obj.collection.items[i].data[0].description + "<br><br>";
    }
  }
}

/* this function was found here: http://qnimate.com/json-parse-throws-unexpected-token-error-for-valid-json/
  It cleans up the JSON when the it returns from the API call.
*/
function escapeSpecialChars(jsonString) {
           return jsonString.replace(/\n/g, "\\n")
               .replace(/\r/g, "\\r")
               .replace(/\t/g, "\\t")
               .replace(/\f/g, "\\f");
}
