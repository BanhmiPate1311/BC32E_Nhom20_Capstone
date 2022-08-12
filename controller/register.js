const getElement = (id) => document.getElementById(id);

const inputs = document.querySelectorAll(
  "#registerForm input#email, #registerForm input#password,#registerForm input#name,#registerForm input#phone,#registerForm input[name='gender']"
);
console.log(inputs);
const getFormValues = () => {
  let user = {};
  inputs.forEach((val) => {
    if (val.name == "gender" && !val.checked) {
    } else {
      const { name, value } = val;
      user[name] = value;
    }
  });
  // console.log(user);
  return user;
};
getElement("btndangky").onclick = () => {
  const user = getFormValues();
  let valid = true;
  valid &=
    checkEmail() &
    checkPassword() &
    checkPassWordConFirm() &
    checkName() &
    checkPhone();

  if (!valid) {
    return;
  }
  console.log(user);
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    responseType: "json",
    data: user, //Dữ liệu gửi đi
  });
  promise.then(function (result) {
    swal("Đăng ký thành công!", "Tài khoản đã được tạo!", "success");
    console.log(result.data);
  });

  promise.catch(function (error) {
    console.log(error);
    swal("Đăng ký không thành công!", "Email đã được sử dụng!");
  });
};
