function downloadImage() {
    // URL of the image you want to download
    var imageUrl = "./invitation_card.jpg";

     // Create a new anchor element
     var link = document.createElement('a');
     link.href = imageUrl;
     link.download = 'image'; // Set the default file name
     
     // Trigger the click event on the anchor element
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
}
function downloadCard() {
    // URL of the image you want to download
    var imageUrl = "./card2.jpg";

     // Create a new anchor element
     var link = document.createElement('a');
     link.href = imageUrl;
     link.download = 'image'; // Set the default file name
     
     // Trigger the click event on the anchor element
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
}
function downloadPamplate() {
    // URL of the image you want to download
    var imageUrl = "./pamplate2.jpg";

     // Create a new anchor element
     var link = document.createElement('a');
     link.href = imageUrl;
     link.download = 'image'; // Set the default file name
     
     // Trigger the click event on the anchor element
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
}
function goHome(){
  var url = window.location.href; 
  var components = URI.parse(url);
  console.log(components);
  var usreDetails = components['query'];
  window.location.href = "./index.html?"+usreDetails;
}

function goGallery(){
  var url = window.location.href; 
  var components = URI.parse(url);
  console.log(components);
  var usreDetails = components['query'];
  window.location.href = "./gallery.html?"+usreDetails;
}

function goVideos(){
  var url = window.location.href; 
  var components = URI.parse(url);
  console.log(components);
  var usreDetails = components['query'];
  window.location.href = "./videos.html?"+usreDetails;
}

