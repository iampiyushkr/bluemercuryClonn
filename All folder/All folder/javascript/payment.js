let info = JSON.parse(localStorage.getItem("info"));
  document.getElementById("emailInfo").innerHTML = info[0].Email;
  document.getElementById("addressInfo").innerHTML =
    info[0].City + info[0].Address + info[0].Zip;

  let arr = JSON.parse(localStorage.getItem("bag"));
  console.log(5);
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    var div = document.createElement("div");
    div.style.marginTop = 10 + "px";
    var div1 = document.createElement("div");
    div1.style.display = "flex";
    var div2 = document.createElement("div");
    var img = document.createElement("img");
    img.src = arr[i].Image;
    var p = document.createElement("p");
    p.innerHTML = arr[i].Name1;
    p.style.fontSize = 15 + "px";
    p.style.fontWeight = "bold";
    p.style.color = "#12284c";
    var p1 = document.createElement("p");
    p1.innerHTML = arr[i].Name;
    p1.setAttribute("class", "p1");
    var p2 = document.createElement("p");
    p2.innerHTML = "$" + arr[i].Price;
    p2.setAttribute("class", "p2");

    var span = document.createElement("span");
    span.innerHTML = arr[i].count;
    span.setAttribute("class", "span");

    div2.append(p, p1, span);
    div1.append(img, div2);
    div.append(div1, p2);
    document.getElementById("rightInnerDiv").append(div);

    sum += arr[i].count * arr[i].Price;
  }
  document.getElementById("totalPrice").innerHTML = "$" + sum;
  document.getElementById("totalPrice1").innerHTML = "$" + sum;

  function promo() {
    if (document.getElementById("promo").value == "penten50") {
      document.getElementById("totalPrice1").innerHTML = "$" + sum * 0.5;
      document.getElementById("totalPrice").innerHTML = "$" + sum * 0.5;
      alert("Promo Code Applied");
    }
  }
  document.getElementById("apply").addEventListener("click", promo);

  var z = 0;
  function CardPayment() {
    document.getElementById("leftDiv4").style.display = "block";
    document.getElementById("leftDiv6").style.display = "none";
    document.getElementById("leftDiv8").style.display = "none";
    document.getElementById("input2").checked = false;
    document.getElementById("input1").checked = true;
    document.getElementById("input3").checked = false;
  }
  document.getElementById("input1").addEventListener("click", CardPayment);

  var x = 0;
  function PayPal() {
    document.getElementById("leftDiv6").style.display = "block";
    document.getElementById("leftDiv4").style.display = "none";
    document.getElementById("leftDiv8").style.display = "none";
    document.getElementById("input1").checked = false;
    document.getElementById("input2").checked = true;
    document.getElementById("input3").checked = false;
  }
  document.getElementById("input2").addEventListener("click", PayPal);

  function kalrna() {
    document.getElementById("leftDiv8").style.display = "block";
    document.getElementById("leftDiv4").style.display = "none";
    document.getElementById("leftDiv6").style.display = "none";
    document.getElementById("input1").checked = false;
    document.getElementById("input3").checked = true;
    document.getElementById("input2").checked = false;
  }
  document.getElementById("input3").addEventListener("click", kalrna);

  var arr5 = localStorage.getItem("delivery");

  document.getElementById("deliveryInfo").innerHTML = arr5;

  var arr7 = JSON.parse(localStorage.getItem("promo"));
  var sum1 = sum * arr7[0].pentane50;

  if (arr5[0] == "G") {
    document.getElementById("inputValue").innerHTML = "Free";
  }
  if (arr5[0] == "T") {
    document.getElementById("inputValue").innerHTML = "$" + 10;
    document.getElementById("totalPrice1").innerHTML = "$" + (sum1 + 10);
  }
  if (arr5[0] == "O") {
    document.getElementById("inputValue").innerHTML = "$" + 20;
    document.getElementById("totalPrice1").innerHTML = "$" + (sum1 + 20);
  }

  function apply() {
    if (document.getElementById("promo").value.length != 0) {
      alert("Promo Code Already Applied");
    }
  }
  document.getElementById("apply").addEventListener("click", apply);

  function shipping() {
    if (document.getElementById("cardNo").value.length == 0) {
      alert("Enter Card Number");
    } else {
      if (document.getElementById("cardName").value.length == 0) {
        alert("Enter Card Name");
      } else {
        if (document.getElementById("ExpirationDate").value.length == 0) {
          alert("Enter Card Expiration Date");
        } else {
          if (document.getElementById("securityCode").value.length == 0) {
            alert("Enter Card Security Code");
          } else {
            alert("Your Order is accepted");
            window.localStorage.clear();
          }
        }
      }
    }
  }
  document.getElementById("shipping").addEventListener("click", shipping);
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
    window.location.href = "..../Html/Html/Html/loginPage.html";
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
    window.location.href = "..../Html/Html/Html/explore.html";
  }
  function events() {
    window.location.href = "..../Html/Html/Html/explore.html";
  }
  function explore() {
    window.location.href = "..../Html/Html/Html/explore.html";
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