// ---------------- GET: Lấy dữ liệu từ server về ----------------
function getProducts() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product", //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
    responseType: "json",
  });

  //Xử lý thành công
  promise.then(function (result) {
    console.log(result.data);
    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    renderProducts(result.data.content);
  });

  //Xử lý thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}

window.onload = function () {
  getProducts();
};

let renderProducts = (arrayProducts) => {
  const content = arrayProducts.reduce((value, item) => {
    // let name = item.name.slice(0, 15) + "...";
    let discrip = item.shortDescription.slice(0, 25) + "...";
    return (value += `
          <div class="col">
            <div class="product-item">
              <div class="product-img">
                <img src="${item.image}" alt="...">
              </div>
              <div class="product-detail">
                <h1>${item.name}</h1>
                <p>${discrip}</p>                
              </div>
              <a href="detail.html?productid=${item.id}" class="btn">Buy now</a>
              <span>${item.price}$</span>
            </div>
          </div>
          `);
  }, "");
  document.querySelector("#productList").innerHTML = content;
};

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
