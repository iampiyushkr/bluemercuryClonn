 var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
      var slideIndex1 = 1;
      showSlides1(slideIndex1);
     
      function currentSlides(n) {
        showSlides1((slideIndex1 = n));
      }

      function showSlides1(n) {
        let i;
        let slides = document.getElementsByClassName("myslides2");
        let dots = document.getElementsByClassName("dot1");
        if (n > slides.length) {
          slideIndex1 = 1;
        }
        if (n < 1) {
          slideIndex1 = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex1 - 1].style.display = "block";
        dots[slideIndex1 - 1].className += " active";
      }
      function openForm() {
        document.getElementById("myForm").style.display = "block";
      }

      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

      // --------------modal-------------
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

      function signup(){
        window.location.href = "../Html/loginPage.html"
      }

      var slidediv = document.querySelector('.slideshow')
      var head = document.getElementById('slideh')
      function slidehead (){
        const arr = ['FREE SAMPLE WITH ALL ORDERS', 'SHOP NOW PAY LATER WITH KLARNA', 'FREE SHIPPING FOR BLUEWARDS MEMBERS','FREE GIFTS WITH PURCHASE BROWSE NOW']
        let i = 0;
        setInterval(function () {

        if (i == arr.length) {
            i = 0;
         }
        head.innerHTML = arr[i]
        i++
        }, 8000)
      }
      slidehead()



      function mymenu(){
        alert(event.target.src)
      }


      function bluewards(){
        window.location.href = "../Html/explore.html"
      }
      function events(){
        window.location.href = "../Html/events.html"
      }
      function explore(){
        window.location.href = "../Html/explore.html"
      }
      function new1(){
        window.location.href = "../Html/shop_All.html"
      }
      function brands(){
        window.location.href = "../Html/brands.html"
      }

       let data = JSON.parse(localStorage.getItem("whislist"));

  data.forEach(function (el) {
    let parent = document.querySelector(".modal-body");

    var div = document.createElement("div");
    div.setAttribute("onclick", `product$()`);
    div.style.cursor = "pointer";
    div.setAttribute("class" , "innerdiv")



    var img2 = document.createElement("img");
    img2.style.width = "95%";
    img2.style.height = "60%";
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

    div.append(img2, p, p1, p2,button);
    parent.append(div);
  });

function luna(){
  window.location.href = "../Html/Luna-3.html"
}
function radiance(){
  window.location.href = "../Html/Radiance.html"
}
function facialscrub(){
  window.location.href = "../Html/facial-Scrub.html"
}
function gentle(){
  window.location.href = "../Html/Gental-cleanser.html"
}
function lunaster(){
  window.location.href = "../Html/5-min-Rescue.html"
}
function hydraboost(){
  window.location.href = "../Html/Hydraboost (4).html"
}
function clarins(){
  window.location.href = "../Html/Sos.html"
}
function vitablast(){
  window.location.href = "../Html/Vitalclast.html"
}

function bag1(){
    window.location.href = "../Html/view-bag.html"
}
function events(){
  window.location.href = "../Html/events.html"
}