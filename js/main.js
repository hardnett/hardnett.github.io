function myFunction() {
  var input;

  input = document.getElementById('searchInput')

  const Http = new XMLHttpRequest();
  const url='https://images-api.nasa.gov/search?q=apollo%2011 &media_type=image';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    obj = JSON.parse(Http.responseText);

    document.getElementsByClassName("results").innerHTML = "The total number of hits: " + obj.collection.metadata.total_hits;
    for (var i = 0; i < obj.collection.items.length; i++) {
      document.getElementById("results").innerHTML += "item # " + i + ": " + obj.collection.items[i].data[0].description;
    }
  }
}
