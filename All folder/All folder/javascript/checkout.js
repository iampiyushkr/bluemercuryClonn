 let arr = JSON.parse(localStorage.getItem("bag"));
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
    if (document.getElementById("promo").value == "pentane50") {
      let arr = [];
      let promo1 = {
        pentane50: 0.5,
      };
      arr.push(promo1);
      localStorage.setItem("promo", JSON.stringify(arr));
      document.getElementById("totalPrice1").innerHTML = "$" + sum * 0.5;
      document.getElementById("totalPrice").innerHTML = "$" + sum * 0.5;
      alert("Promo Code Applied");
    }
  }
  document.getElementById("apply").addEventListener("click", promo);

  function shipping() {
    if (document.getElementById("mail").value.length == 0) {
      document.getElementById("Emailp").innerText = "Enter Email";
    } else {
      document.getElementById("Emailp").innerText = null;

      if (document.getElementById("firstName").value.length == 0) {
        document.getElementById("firstNamep").innerText = "Enter First Name";
      } else {
        document.getElementById("firstNamep").innerText = null;

        if (document.getElementById("lastName").value.length == 0) {
          document.getElementById("lastNamep").innerText = "Enter Last Name";
        } else {
          document.getElementById("lastNamep").innerText = null;

          if (document.getElementById("Address").value.length == 0) {
            document.getElementById("Addressp").innerText = "Enter Address";
          } else {
            document.getElementById("Addressp").innerText = null;

            if (document.getElementById("Apartment").value.length == 0) {
              document.getElementById("Apartmentp").innerText =
                "Enter Apartment";
            } else {
              document.getElementById("Apartmentp").innerText = null;

              if (document.getElementById("City").value.length == 0) {
                document.getElementById("Cityp").innerText = "Enter City";
              } else {
                document.getElementById("Cityp").innerText = null;

                let info = {
                  Email: document.getElementById("mail").value,
                  Address: document.getElementById("Address").value,
                  City: document.getElementById("City").value,
                  Zip: document.getElementById("Zip").value,
                };
                console.log(info);
                let arr = [];
                arr.push(info);
                localStorage.setItem("info", JSON.stringify(arr));
              }
            }
          }
        }
      }
    }
  }
  document.getElementById("shipping").addEventListener("click", shipping);
  function shipping1() {
    window.location.href = "../Html/shipping.html";
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