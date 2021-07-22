let arr = [];
    var Name = document.getElementById("mainName").innerHTML
    var Price = document.getElementById("mainPrice").innerHTML
    let product = {
        count: 0,
        Name: '5 Minute Rescue Mask - Soothe',
        Name1: 'LUNE+ASTER',
        Price: 8,
        Image: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309020887-1_525x525.jpg?v=1622784962"
    }


    function decrease() {

        if (product.count > 0) {
            product.count -= 1;


        }
        document.getElementById("addToBag").innerHTML = "ADD TO BAG |$" + product.count * product.Price

        document.getElementById("quantity").value = product.count
        document.getElementById("addToBag1").innerHTML = "ADD TO BAG |$" + product.count * product.Price

        document.getElementById("quantity1").value = product.count


    }
    function increase() {


        product.count += 1
        document.getElementById("addToBag").innerHTML = "ADD TO BAG | $" + product.count * product.Price
        document.getElementById("quantity").value = product.count
        document.getElementById("addToBag1").innerHTML = "ADD TO BAG | $" + product.count * product.Price
        document.getElementById("quantity1").value = product.count


    }






    function firstImage() {
            document.getElementById("mainImage").src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309020887-1_525x525.jpg?v=1622784962"
            document.getElementById("firstImage").style.borderStyle = "ridge"
            document.getElementById("firstImage").style.borderColor = "black"
            document.getElementById("firstImage").style.borderWidth = 1 + "px"
            document.getElementById("secondImage").style.borderStyle = null
            document.getElementById("thirdImage").style.borderStyle = null
        }
        document.getElementById("firstImage").addEventListener("click", firstImage)

        function secondImage() {
            document.getElementById("mainImage").src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309020887-2_525x525.jpg?v=1622784963"
            document.getElementById("secondImage").style.borderStyle = "ridge"
            document.getElementById("secondImage").style.borderColor = "black"
            document.getElementById("secondImage").style.borderWidth = 1 + "px"
            document.getElementById("firstImage").style.borderStyle = null
            document.getElementById("thirdImage").style.borderStyle = null
        }
        document.getElementById("secondImage").addEventListener("click", secondImage)

        function thirdImage() {
            document.getElementById("mainImage").src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309020887-3_525x525.jpg?v=1622784964"
            document.getElementById("thirdImage").style.borderStyle = "ridge"
            document.getElementById("thirdImage").style.borderColor = "black"
            document.getElementById("thirdImage").style.borderWidth = 1 + "px"
            document.getElementById("firstImage").style.borderStyle = null
            document.getElementById("secondImage").style.borderStyle = null
        }
        document.getElementById("thirdImage").addEventListener("click", thirdImage)

    var i = 0;
    function ShowDetail() {

        if (i == 0) {
            var div = document.getElementById("showDetailDiv")
            document.getElementById("showDetail").innerHTML = "Hide details"

            var p = document.createElement("p")
            p.innerHTML = "Shopping"
            p.style.color = "#12284c"

            var p1 = document.createElement("p")
            p1.innerHTML = "- FREE 2-day delivery"


            var p2 = document.createElement("p")
            p2.innerHTML = "- FREE Overnight on orders of $200 or more"


            var p3 = document.createElement("p")
            p3.innerHTML = "- $20 for overnight delivery on orders under $200"

            var p4 = document.createElement("p")
            p4.innerHTML = "- Orders placed by 4 P.M. (Eastern) will be processed the same business day."

            var p5 = document.createElement("p")
            p5.innerHTML = "- Orders placed on weekends and holidays will be processed the next business day."

            var p6 = document.createElement("p")
            p6.innerHTML = "Returns"
            p6.style.color = "#12284c"

            var p7 = document.createElement("p")
            p7.innerHTML = "- FREE returns on all orders within 30 days of purchase"

            var p8 = document.createElement("p")
            p8.innerHTML = "- FREE returns and exchanges in store for all online purchases"

            var p9 = document.createElement("p")
            p9.innerHTML = "- See Returns page for more details: <u>Returns.</u>"
            div.append(p, p1, p2, p3, p4, p5, p6, p7, p8, p9)

            i = 1;
        } else {
            document.getElementById("showDetail").innerHTML = "Show Details"
            document.getElementById("showDetailDiv").innerHTML = null
            i = 0;
        }
    }
    document.getElementById("showDetail").addEventListener("click", ShowDetail)


    function addToBag() {
        var sum = 0;
        var sum1 = 0
        var count = 0;
        document.getElementById("modal").style.display = "block"


        let arr;
        arr = JSON.parse(localStorage.getItem('bag'))

        if (arr == null) {
            arr = []
            arr.push(product)  //this is for first time visitor
            localStorage.setItem('bag', JSON.stringify(arr))
        }
        else {

            arr = JSON.parse(localStorage.getItem('bag'))
            for (let i = 0; i < arr.length; i++) {
                if (product.Name == arr[i].Name) {
                    break;
                }
                count++;
            }
            if (count == arr.length) {
                arr.push(product)
             localStorage.setItem('bag', JSON.stringify(arr))
            }

        }




        arr = JSON.parse(localStorage.getItem('bag'))
        document.getElementById("modalProduct").innerHTML = null
        for (let i = 0; i < arr.length; i++) {

            var div1 = document.createElement("div")
            div1.style.width = 400 + "px"
            div1.setAttribute("class", "div1")
            var p9=document.createElement("p")
            p9.innerHTML=arr[i].Name1
            var p10 = document.createElement("p")
            p10.innerHTML = arr[i].Name
            var p11 = document.createElement("p")
            p11.innerHTML = "$" + arr[i].Price * arr[i].count
            var img4 = document.createElement("img")
            img4.src = arr[i].Image
            img4.style.width = 150 + "px"

            var div2 = document.createElement("div")
            div2.setAttribute("class", "div2")
            var btn3 = document.createElement("button")
            btn3.setAttribute("class", 'btn3')
            btn3.innerHTML = "-"
            var remove = document.createElement("button")
            remove.innerHTML = 'Remove'
            remove.setAttribute("class", 'remove')
            // btn3.onclick = function reduce(){
            //     // let bag = JSON.parse(localStorage.getItem('bag'))
            //     console.log(bag.count)
            // }

            var input = document.createElement("input")
            input.setAttribute("class", 'Input')
            input.value = arr[i].count




            var btn4 = document.createElement("button")
            btn4.setAttribute("class", 'btn4')
            btn4.innerHTML = "+"

            div2.append(btn3, input, btn4)

            div1.append(p9,p10, p11, div2, img4, remove)
            document.getElementById("modalProduct").append(div1)

            var temp = 0;
            remove.onclick = function (e) {
                temp = arr[i];
                arr[i] = arr[arr.length - 1]
                arr[arr.length - 1] = temp;
                arr.pop()
                localStorage.setItem('bag', JSON.stringify(arr))
                e.currentTarget.parentNode.remove()

            }



            arr = JSON.parse(localStorage.getItem('bag'))

            btn3.onclick = function () {
                let arr = JSON.parse(localStorage.getItem('bag'))


                if (arr[i].count > 0) {
                    arr[i].count -= 1;
                    input.value = arr[i].count
                    localStorage.setItem('bag', JSON.stringify(arr))
                    document.getElementById("bottomBag").innerHTML = "VIEW BAG |$" + arr[i].count * arr[i].Price
                    p11.innerHTML = "$" + arr[i].count * arr[i].Price
                }
            }

            btn4.onclick = function () {
                let arr = JSON.parse(localStorage.getItem('bag'))

                if (arr[i].count >= 0) {
                    arr[i].count += 1;

                    input.value = arr[i].count
                    localStorage.setItem('bag', JSON.stringify(arr))
                    document.getElementById("bottomBag").innerHTML = "VIEW BAG |$" + arr[i].count * arr[i].Price
                    p11.innerHTML = "$" + arr[i].count * arr[i].Price
                }
            }

            sum += arr[i].count * arr[i].Price//avinash 



        }

        document.getElementById("bottomBag").innerHTML = "VIEW BAG |$" + sum

    }





    window.onclick = function (event) {
        if (event.target == document.getElementById("modal")) {
            document.getElementById("modal").style.display = 'none';
        } else if (event.target == document.getElementById("modal1")) {
            document.getElementById("modal1").style.display = "none";
        }
    }

    document.querySelector(".close").onclick = function () {
        document.getElementById("modal").style.display = 'none';
    }
    document.getElementById("close1").onclick = function () {
        document.getElementById("modal1").style.display = 'none';
    }

    function ZoomImg() {
        document.getElementById("zoomImg").src = document.getElementById("mainImage").src
        document.getElementById("modal1").style.display = "block"


    }

    document.getElementById("mainImage").addEventListener("click", ZoomImg)

    function frontpage() {
        window.location.href = "../Html/frontpage.html"
    }


    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close1")[0];
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
        }, 2000);
    }
    slidehead();

    function bag() {
        document.getElementById("modal").style.display = "block"
    }

    function addtowhislist() {
        let arr = JSON.parse(localStorage.getItem('wishlist'))
        if (arr == null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem('wishlist'))
        }
        arr.push(product)
         localStorage.setItem('wishlist', JSON.stringify(arr))
    }

      function viewbag1(){
        window.location.href = "../Html/view-bag.html"
    }
