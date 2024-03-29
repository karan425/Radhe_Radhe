function downloadImage() {
    // URL of the image you want to download
    var imageUrl = "./radha_krishna.jpg";

     // Create a new anchor element
     var link = document.createElement('a');
     link.href = imageUrl;
     link.download = 'image'; // Set the default file name
     
     // Trigger the click event on the anchor element
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
}