 let arr = JSON.parse(localStorage.getItem("bag"));
  var temp = 0;
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.style.width = 200 + "px";
    div1.style.color = "#12284c";
    div.setAttribute("class", "div5");

    var img = document.createElement("img");
    img.src = arr[i].Image;
    img.style.width = 150 + "px";
    img.style.height = 150 + "px";
    var p = document.createElement("p");
    p.innerHTML = arr[i].Name;
    div1.append(p);
    var p1 = document.createElement("p");
    p1.innerHTML = "$" + arr[i].Price;
    var p2 = document.createElement("p");
    p2.innerHTML = arr[i].count;
    var p3 = document.createElement("p");
    p3.innerHTML = "$" + arr[i].count * arr[i].Price;

    div.append(img, div1, p1, p2, p3);
    document.getElementById("div4").append(div);
    temp += arr[i].count;
    sum += arr[i].count * arr[i].Price;
  }
  document.getElementById("totalPrice").innerHTML = "Subtotal $" + sum;
  document.getElementById("item").innerHTML = `Your cart (${temp} items)`;

  function checkout1() {
    window.location.href = "../Html/checkout.html";
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
    window.location.href = "../Html/loginPage.html";
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
    window.location.href = "../Html/explore.html";
  }
  function events() {
    window.location.href = "../Html/explore.html";
  }
  function explore() {
    window.location.href = "../Html/explore.html";
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