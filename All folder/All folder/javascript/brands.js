 function scrolla(){
        window.scrollTo(0,350)
    }
    function scrollb(){
        window.scrollTo(0,500)
    }
    function scrollc(){
        window.scrollTo(0,700)
    }
    function scrolld(){
        window.scrollTo(0,850)
    }
    function scrolle(){
        window.scrollTo(0,990)
    }
    function scrollf(){
        window.scrollTo(0,1090)
    }
    function scrollg(){
        window.scrollTo(0,1200)
    }
    function scrollh(){
        window.scrollTo(0,1330)
    }
    function scrolli(){
        window.scrollTo(0,1470)
    }
    function scrollj(){
        window.scrollTo(0,1580)
    }
    function scrollk(){
        window.scrollTo(0,1730)
    }
    function scrolll(){
        window.scrollTo(0,1900)
    }
    function scrollm(){
        window.scrollTo(0,2080)
    }
    function scrolln(){
        window.scrollTo(0,2200)
    }
    function scrollo(){
        window.scrollTo(0,2360)
    }
    function scrollp(){
        window.scrollTo(0,2470)
    }
    function scrollr(){
        window.scrollTo(0,2590)
    }
    function scrolls(){
        window.scrollTo(0,2760)
    }
    function scrollt(){
        window.scrollTo(0,2960)
    }
    function scrollv(){
        window.scrollTo(0,3200)
    }
    function scrollw(){
        window.scrollTo(0,3340)
    }
    function scrolly(){
        window.scrollTo(0,3480)
    }
    function scrollht(){
        window.scrollTo(0,3690)
    }

     var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function signup() {
    window.location.href = ".../Html/Html/loginPage.html";
  }

  var head = document.getElementById("slideh");
  function slidehead() {
    const arr = [
      "FREE SAMPLE WITH ALL ORDERS",
      "SHOP NOW PAY LATER WITH KLARNA",
      "FREE SHIPPING FOR BLUEWARDS MEMBERS",
      "FREE GIFTS WITH PURCHASE BROWSE NOW",
    ];
    let i = 0;
    setInterval(function () {
      if (i == arr.length) {
        i = 0;
      }
      head.innerHTML = arr[i];
      i++;
    }, 8000);
  }
  slidehead();

  function bluewards() {
    window.location.href = ".../Html/Html/explore.html";
  }
  function events() {
    window.location.href = ".../Html/Html/explore.html";
  }
  function explore() {
    window.location.href = ".../Html/Html/explore.html";
  }

  let data = JSON.parse(localStorage.getItem("whislist"));

  data.forEach(function (el) {
    let parent = document.querySelector(".modal-body");

    var div = document.createElement("div");
    div.setAttribute("onclick", `product$()`);
    div.style.cursor = "pointer";
    div.setAttribute("class", "innerdiv");

    var img2 = document.createElement("img");
    img2.style.width = "95%";
    img2.style.height = "50%";
    img2.src = el.Image;
    var p = document.createElement("p");
    p.innerHTML = `${el.Name1}`;
    var p1 = document.createElement("p");
    p1.innerHTML = `${el.Name2}`;
    var p2 = document.createElement("p");
    p2.innerHTML = "$" + `${el.Price}`;
    var button = document.createElement("button");
    button.innerText = "ADD TO BAG";
    button.style.backgroundColor = "rgb(94, 118, 155)";
    button.style.width = "100%";
    button.style.height = "50px";
    button.style.textAlign = "center";
    button.style.color = "white";

    div.append(img2, p, p1, p2, button);
    parent.append(div);
  });