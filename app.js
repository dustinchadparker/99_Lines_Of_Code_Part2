//Waits until document is loaded.
document.addEventListener("DOMContentLoaded", function() {
  //sets btn to button in the HTML
  let btn = document.getElementsByClassName("button")[0];

  //event listener for the button that creates all friend divs
  //and their names/classes
  btn.addEventListener("click", function() {
    let friend1 = document.createElement("div");
    let friend2 = document.createElement("div");
    let friend3 = document.createElement("div");
    let friend4 = document.createElement("div");
    let friend5 = document.createElement("div");

    let header = document.createElement("h3");

    friend1.innerHTML = "<h3>JOHN</h3>";
    friend2.innerHTML = "<h3>MATT</h3>";
    friend3.innerHTML = "<h3>JACOB</h3>";
    friend4.innerHTML = "<h3>MADISON</h3>";
    friend5.innerHTML = "<h3>AUTUMN</h3>";

    friend1.className = "friend";
    friend2.className = "friend";
    friend3.className = "friend";
    friend4.className = "friend";
    friend5.className = "friend";

    //adds a break before appending the rest
    let breakN = document.createElement("br");
    document.body.appendChild(breakN);

    //sets styles for each friend div
    friend1.setAttribute(
      "style",
      " flex-wrap: nowrap; color:white; display: inline-block"
    );
    friend2.setAttribute(
      "style",
      " flex-wrap: nowrap; color:white; display: inline-block"
    );
    friend3.setAttribute(
      "style",
      " flex-wrap: nowrap; color:white; display: inline-block"
    );
    friend4.setAttribute(
      "style",
      " flex-wrap: nowrap; color:white; display: inline-block"
    );
    friend5.setAttribute(
      "style",
      " flex-wrap: nowrap; color:white; display: inline-block"
    );

    let i = 0;

    //Append all friends to document
    document.body.appendChild(friend1);
    document.body.appendChild(friend2);
    document.body.appendChild(friend3);
    document.body.appendChild(friend4);
    document.body.appendChild(friend5);
    let friendChose = "";

    //'Sings' the song for each friend, all 99 lines!
    while (i < 5) {
      let count = 99;

      while (count > 0) {
        let pText = document.createElement("p");
        let p = document.createElement("p");

        p.style.color = "white";
        p.style.fontSize = "10px";

        //Starts the singing
        if (count == 1) {
          pText.innerHTML =
            count + " line of code in the file, " + count + " line of code; ";
        } else if (count > 1) {
          pText.innerHTML =
            count + " lines of code in the file, " + count + " lines of code; ";
        }

        //could not figure an easier way to choose friend,
        //so I stuck with this method. Throws friend's name in song.
        if (i == 0) {
          friendChose = "John";
        }
        if (i == 1) {
          friendChose = "Matt";
        }
        if (i == 2) {
          friendChose = "Jacob";
        }
        if (i == 3) {
          friendChose = "Madison";
        }
        if (i == 4) {
          friendChose = "Autumn";
        }

        //finishes the song.
        pText.innerHTML +=
          friendChose + " strikes one out, clears it all out, ";

        if (count == 2) {
          pText.innerHTML += count - 1 + " line of code in the file.";
        } else if (count == 1) {
          count = 0;
          pText.innerHTML += "no more lines of code in the file.";
        } else {
          pText.innerHTML += count - 1 + " lines of code in the file.";
        }

        p.appendChild(pText);
        document.getElementsByClassName("friend")[i].appendChild(p);
        count--;
      }
      i++;
      console.log(i);
    }
  });
});
