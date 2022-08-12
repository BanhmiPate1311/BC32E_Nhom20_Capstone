function kiemTraEmail(value, selectorError, name) {
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng ! ";
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function kiemTraRong(value, selectorError, name) {
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //   abc    => abc
  if (value.trim() !== "") {
    document.querySelector(selectorError).innerHTML += "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không được bỏ trống";
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function kiemTraMatKhau(value, selectorError, name, minLength, maxLength) {
  var regexPassWord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  var lengthValue = value.length;
  if (
    !regexPassWord.test(value) ||
    lengthValue > maxLength ||
    lengthValue < minLength
  ) {
    document.querySelector(selectorError).innerHTML =
      name +
      " từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemtraPassWordConFirm(value1, value2, selectorError, name) {
  if (value1 !== value2) {
    document.querySelector(selectorError).innerHTML = name + " chưa đúng";
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemTraTatCaKyTu(value, selectorError, name) {
  var regexLetter =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " tất cả là chữ ! ";
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function kiemTraPhone(value, selectorError, name) {
  var regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  var phoneNumber = "";
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== "-") {
      phoneNumber += value[i];
    }
  }
  console.log(phoneNumber);
  var lengthValue = phoneNumber.length;
  if (regexPhone.test(value) && lengthValue == 10) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " không đúng ";
  document.querySelector(selectorError).style.display = "block";
  return false;
}
