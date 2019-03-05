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
    document.getElementById("results").innerHTML = obj.collection.metadata.total_hits + " " + obj.collection.items[3].data[0].description
  }
}
