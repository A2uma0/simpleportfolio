// Animated title

/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
(function(c, a, m) {
    var title = (c || document.title) + " " + (a || "") + " ";
    setInterval(function() {
      title = title.substring(1) + title.charAt(0);
      document.title = title;
    }, m || 300);
  })(
    /* Tab Text */ "None",
    /* Title Repeat Separator */ "",
    /* Scroll Speed (in milleseconds) */ 200
  );


// select random image from array
var randomimage = new Array();
randomimage = [
    "assets/menharashy.gif",
    "assets/menharabox.gif",
    "assets/menharaeat.gif",
    "assets/menharamusic.gif",
    "assets/menharasad.gif",
];

function getrandomImage() {
    var random = Math.floor(Math.random() * randomimage.length);
    document.getElementById("logo").src = randomimage[random];
}getrandomImage();


// https://github.com/tholman/cursor-effects
// cursor effects library
//new cursoreffects.fairyDustCursor({colors: ["#ffffff", "#525252"]});
new cursoreffects.trailingCursor({particles: 15});


