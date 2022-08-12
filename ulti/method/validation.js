let form = document.querySelector("#registerForm ");
console.log(form);
form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "email":
      checkEmail();
      break;
    case "password":
      checkPassword();
      break;
    case "password-confirm":
      checkPassWordConFirm();
      break;
    case "name":
      checkName();
      break;
    case "phone":
      checkPhone();
      break;
  }
  //   if (!valid) {
  //     document.querySelector("#" + e.target.id).style.borderColor = "#f44336";
  //   } else {
  //     document.getElementById(e.target.id).style.borderColor = "none";
  //   }
});

function checkEmail() {
  let value = document.querySelector("#email").value;
  let valid = true;
  valid &=
    kiemTraEmail(value, "#tbEmail", "Email") &
    kiemTraRong(value, "#tbEmail", "Email");
  return valid;
}

function checkPassword() {
  let value = document.querySelector("#password").value;
  let valid = true;
  valid &=
    kiemTraMatKhau(value, "#tbPassWord", "Mật khẩu", 6, 10) &
    kiemTraRong(value, "#tbPassWord", "Mật khẩu");
  return valid;
}

function checkPassWordConFirm() {
  let value1 = document.querySelector("#password").value;
  let value2 = document.querySelector("#password-confirm").value;
  let valid = true;
  valid =
    kiemtraPassWordConFirm(value1, value2, "#tbPassWordConFirm", "Mật khẩu") &
    kiemTraRong(value2, "#tbPassWordConFirm", "Mật khẩu");
  return valid;
}

function checkName() {
  let value = document.querySelector("#name").value;
  let valid = true;
  valid &=
    kiemTraTatCaKyTu(value, "#tbName", "Họ và tên") &
    kiemTraRong(value, "#tbName", "Họ và tên");
  return valid;
}

function checkPhone() {
  let value = document.querySelector("#phone").value;
  let valid = true;
  valid &=
    kiemTraPhone(value, "#tbPhone", "Số Phone") &
    kiemTraRong(value, "#tbPhone", "Số Phone");
  return valid;
}
