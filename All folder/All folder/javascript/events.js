function scroll_1() {
    window.scrollTo(0, 300);
  }
  function scroll_2() {
    window.scrollTo(0, 3000);
  }
  function scroll_3() {
    window.scrollTo(0, 3500);
  }
  function scroll_4() {
    window.scrollTo(0, 4000);

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn1");
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
    }, 2000);
  }
  slidehead();

  function signup() {
    window.location.href = "../Html/loginPage.html";
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