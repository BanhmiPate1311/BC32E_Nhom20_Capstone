// incl "./index.js";
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log(myParam);
  getProductById(myParam);
};

let getProductById = (id) => {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    method: "GET",
    responseType: "json",
  });
  promise.then(function (result) {
    console.log(result.data.content);
    // //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    let content = result.data.content;
    document.querySelector("#productIdSelect").innerHTML = `
    <img src="${content.image}" alt="">
    `;
  });
};

// let renderProducts = (Products) => {
//   content =
//   document.querySelector("#productList").innerHTML = content;
// };
