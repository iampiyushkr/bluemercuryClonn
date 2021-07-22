 let product = [
    {
      Name1: "SKINCEUTICALS",
      Name2: "Gentle Cleanser",
      Price: 35,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000463943-1_235x.jpg?v=1622785588",
    },
    {
      Name1: "FOREO",
      Name2: "Luna 3 Sensitive",
      Price: 199,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-7350092139151-1_235x.jpg?v=1620672226",
    },
    {
      Name1: "M-61",
      Name2: "Perfect Microdermabrasion Facial Scrub",
      Price: 42,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-title-defaulttitle-817237014072-1_235x.jpg?v=1622785227",
    },
    {
      Name1: "TATA HARPERTATA HARPER",
      Name2: "Radiance Mask",
      Price: 65,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-813269022986-1_235x.jpg?v=1620674244",
    },
    {
      Name1: "LUNE+ASTER",
      Name2: "5 Minute Rescue Mask - Soothe",
      Price: 8,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309020887-1_235x.jpg?v=1622784962",
    },
    {
      Name1: "M-61",
      Name2: "Hydraboost Collagen+Peptide Water Eye Cream",
      Price: 78,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011385-1_235x.jpg?v=1623429137",
    },
    {
      Name1: "CLARINS",
      Name2: "SOS Mask - Hydra",
      Price: 35,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3380810177572-1_235x.jpg?v=1622611637",
    },
    {
      Name1: "M-61",
      Name2: "Vitablast C® 20% Cream",
      Price: 92,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011231-1_235x.jpg?v=1622785267",
    },
    {
      Name1: "SKINCEUTICALS",
      Name2: "Triple Lipid Restore 2:4:2",
      Price: 30,
      Image:
        "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000434967-1_525x525.jpg?v=1622785632",
    },
  ];

  if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(product));
  }
  var l = 1;
  function addproducts(data) {
    let parent = document.getElementById("largeTopDiv4");

    parent.innerHTML = null;

    data.forEach(function (el) {
      var div = document.createElement("div");

      div.style.cursor = "pointer";
      var img1 = document.createElement("img");
      img1.setAttribute("class", `class$`);

      img1.src = "https://image.flaticon.com/icons/png/128/1216/1216575.png";
      var img2 = document.createElement("img");
      img2.setAttribute("onclick", "product" + l + "()");
      img2.src = el.Image;
      var p = document.createElement("p");
      p.innerHTML = `${el.Name1}`;
      var p1 = document.createElement("p");
      p1.innerHTML = `${el.Name2}`;
      var p2 = document.createElement("p");
      p2.innerHTML = +`${el.Price}`;
      let i = 0;
      img1.onclick = function () {
        heart(el);
        if (i == 0) {
          img1.src = ".../Html/assests/blackheart.jpeg";
          i = 1;
          alert("'" + p.innerHTML + "'" + " " + "is added to whislist");
        } else {
          img1.src =
            "https://image.flaticon.com/icons/png/128/1216/1216575.png";
          let arr;

          arr = JSON.parse(localStorage.getItem("whislist"));
          arr.pop();
          localStorage.setItem("whislist", JSON.stringify(arr));

          i = 0;
          alert("'" + p.innerHTML + "'" + " " + "is removed from whislist");
        }
      };
      div.append(img1, img2, p, p1, p2);
      parent.append(div);
      l++;
    });
  }
  addproducts(JSON.parse(localStorage.getItem("products")));

  function sortlh() {
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
      return a.Price - b.Price;
    });

    addproducts(products);
  }
  function sorthl() {
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.sort(function (a, b) {
      return b.Price - a.Price;
    });

    addproducts(products);
  }

  // for (i = 0; i < product.length; i++) {
  //   var div = document.createElement("div");
  //   div.setAttribute("onclick", `product${i + 1}()`);
  //   div.style.cursor = "pointer";
  //   var img1 = document.createElement("img");
  //   img1.setAttribute("class", `class${i}`);
  //   img1.src = "https://image.flaticon.com/icons/png/128/1216/1216575.png";
  //   var img2 = document.createElement("img");
  //   img2.src = product[i].Image;
  //   var p = document.createElement("p");
  //   p.innerHTML = product[i].Name1;
  //   var p1 = document.createElement("p");
  //   p1.innerHTML = product[i].Name2;
  //   var p2 = document.createElement("p");
  //   p2.innerHTML = "$" + product[i].Price;

  //   div.append(img1, img2, p, p1, p2);
  //   document.getElementById("largeTopDiv4").append(div);

  //   img1.onclick = function () {
  //     heart(el);
  //   };
  // }

  function heart(el) {
    var count = 0;

    let arr;

    arr = localStorage.getItem("whislist");

    if (arr == null) {
      arr = [];
      arr.push(el);

      localStorage.setItem("whislist", JSON.stringify(arr));
    } else {
      arr = JSON.parse(localStorage.getItem("whislist"));
      for (let i = 0; i < arr.length; i++) {
        if (
          el.Name1 == arr[i].Name1 &&
          el.Name2 == arr[i].Name2 &&
          el.Price == arr[i].Price &&
          el.Image == arr[i].Image
        ) {
          //alert("Already added");
          break;
        }
        count++;
      }
      if (count == arr.length) {
        arr.push(el);
        localStorage.setItem("whislist", JSON.stringify(arr));
      }
    }

    let data = JSON.parse(localStorage.getItem("whislist"));
    document.querySelector(".modal-body").innerHTML = null;

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
  }

  var a = 0;
  function slide1() {
    var div = document.getElementById("smallLeftDiv1Extention");
    if (a == 0) {
      document.getElementById("sign").innerHTML = "-";
      var p = document.createElement("p");
      p.innerHTML = "Cleanser";
      var p1 = document.createElement("p");
      p1.innerHTML = "Skin Care Moisturizers";
      var p2 = document.createElement("p");
      p2.innerHTML = "Eye Care";
      var p3 = document.createElement("p");
      p3.innerHTML = "Mask";
      div.append(p, p1, p2, p3);
      a = 1;
    } else {
      div.innerHTML = null;
      document.getElementById("sign").innerHTML = "+";
      a = 0;
    }
  }
  document.getElementById("smallTopDiv2").addEventListener("click", slide1);

  var b = 0;
  function slide2() {
    var div = document.getElementById("smallLeftDiv3Extention");
    if (b == 0) {
      document.getElementById("sign1").innerHTML = "-";
      var p = document.createElement("p");
      p.innerHTML = "Cleanser";
      var p1 = document.createElement("p");
      p1.innerHTML = "Skin Care Moisturizers";
      var p2 = document.createElement("p");
      p2.innerHTML = "Eye Care";
      var p3 = document.createElement("p");
      p3.innerHTML = "Mask";
      div.append(p, p1, p2, p3);
      b = 1;
    } else {
      div.innerHTML = null;
      document.getElementById("sign1").innerHTML = "+";
      b = 0;
    }
  }
  document.getElementById("smallTopDiv4").addEventListener("click", slide2);

  function slide3() {
    var div = document.getElementById("smallLeftDiv4Extention");
    if (b == 0) {
      document.getElementById("sign2").innerHTML = "-";
      var p = document.createElement("p");
      p.innerHTML = "Cleanser";
      var p1 = document.createElement("p");
      p1.innerHTML = "Skin Care Moisturizers";
      var p2 = document.createElement("p");
      p2.innerHTML = "Eye Care";
      var p3 = document.createElement("p");
      p3.innerHTML = "Mask";
      div.append(p, p1, p2, p3);
      b = 1;
    } else {
      div.innerHTML = null;
      document.getElementById("sign2").innerHTML = "+";
      b = 0;
    }
  }
  document.getElementById("smallTopDiv5").addEventListener("click", slide3);

  function slide4() {
    var div = document.getElementById("smallLeftDiv5Extention");
    if (b == 0) {
      document.getElementById("sign3").innerHTML = "-";
      var p = document.createElement("p");
      p.innerHTML = "Cleanser";
      var p1 = document.createElement("p");
      p1.innerHTML = "Skin Care Moisturizers";
      var p2 = document.createElement("p");
      p2.innerHTML = "Eye Care";
      var p3 = document.createElement("p");
      p3.innerHTML = "Mask";
      div.append(p, p1, p2, p3);
      b = 1;
    } else {
      div.innerHTML = null;
      document.getElementById("sign3").innerHTML = "+";
      b = 0;
    }
  }
  document.getElementById("smallTopDiv6").addEventListener("click", slide4);

  function slide5() {
    var div = document.getElementById("smallLeftDiv6Extention");
    if (b == 0) {
      document.getElementById("sign4").innerHTML = "-";
      var p = document.createElement("p");
      p.innerHTML = "Cleanser";
      var p1 = document.createElement("p");
      p1.innerHTML = "Skin Care Moisturizers";
      var p2 = document.createElement("p");
      p2.innerHTML = "Eye Care";
      var p3 = document.createElement("p");
      p3.innerHTML = "Mask";
      div.append(p, p1, p2, p3);
      b = 1;
    } else {
      div.innerHTML = null;
      document.getElementById("sign4").innerHTML = "+";
      b = 0;
    }
  }
  document.getElementById("smallTopDiv7").addEventListener("click", slide5);

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

  function signup() {
    window.location.href = "../Html/loginPage.html";
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

  function home1() {
    window.location.href = "../Html/frontpage.html";
  }

  function bluewards() {
    window.location.href = "../Html/explore.html";
  }
  function events() {
    window.location.href = "../Html/events.html";
  }
  function explore() {
    window.location.href = "../Html/explore.html";
  }
  function new1() {
    window.location.href = "../Html/shop_All.html";
  }
  function brands() {
    window.location.href = "../Html/brands.html";
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

  function product2() {
    window.location.href = "../Html/Luna-3.html";
  }
  function product4() {
    window.location.href = "../Html/Radiance.html";
  }
  function product3() {
    window.location.href = "../Html/facial-Scrub.html";
  }
  function product1() {
    window.location.href = "../Html/Gental-cleanser.html";
  }
  function product5() {
    window.location.href = "../Html/5-min-Rescue.html";
  }
  function product6() {
    window.location.href = "../Html/Hydraboost (4).html";
  }
  function product7() {
    window.location.href = "../Html/Sos.html";
  }
  function product8() {
    window.location.href = "../Html/Vitalclast.html";
  }
  function product9() {
    window.location.href = "../Html/Triple-lipid.html";
  }