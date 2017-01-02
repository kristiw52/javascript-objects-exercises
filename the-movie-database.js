<!doctype html>
<html>
  <head>
    <script src="js/javascript-objects-exercises.js"></script>
  </head>
  <body>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="therecipecard.html">The Recipe Card</a></li>
      <li><a href="thereadinglist.html">The Reading List</a></li>
      <li><a href="themoviedatabase.html">The Movie Database</a></li>
    </ul>
    <h1>The Movie Database</h1>
    <div id="output"></div>
    <script>
      // YOUR CODE GOES HERE
      var movie = {
        title: "Wedding Crashers",
        duration: 120,
        stars: ['Owen Wilson', 'Vince Vaughn', 'Bradley Cooper']
      };

      function printMovie(movie) {
        var theStars = movie.stars.join(", ");
        console.log(movie.title + " lasts for " + movie.duration + " minutes. " + "Stars: " + theStars);
      }
      printMovie(movie);
    </script>
  </body>
</html>