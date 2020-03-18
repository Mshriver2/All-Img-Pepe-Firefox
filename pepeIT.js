// defines the html element tag
var imgs = document.getElementsByTagName("img");


// sets the images
for (var i=0, l=imgs.length;i<l;i++) {
    imgs[i].src = "https://77extracts.com/images/pepe/static/" + Math.floor(Math.random() * 1263) + ".png";
}
