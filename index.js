var y=true
function clickk() {
  var image = document.getElementById("firstImage");
  var s = document.getElementById("secondImage");
  if (
    image.src.match("/hangmancrop.jpg") &&
    s.src.match("/50-502892_cowboy-e-cowgirl-wild-west-cowboys-cartoon.jpg")
  ) {
    image.src = "./hang.jpg";
    s.src = "./bang.jpg";
  } else {
    image.src = "./hangmancrop.jpg";
    s.src = "./50-502892_cowboy-e-cowgirl-wild-west-cowboys-cartoon.jpg";
  }

  if (y=true) {
      var audio = new Audio("./shotgun-firing-4-6746.mp3");
      audio.play();
      y=false
    }else{
        y=true
    }
}