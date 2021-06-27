function Validation() {

    this.kiemTraRong = (value, selectorError, name) => {
        if (value === "") {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
            return true;
        }
        document.querySelector(selectorError).innerHTML = '';
        return false;
    }

    this.kiemTraTatCaSo = function (value, selectorError, name) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value) == false && value != "") {
            document.querySelector(selectorError).innerHTML = name + ' phải nhập số!';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraTatCaKyTu = function (value, selectorError, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value) == false && value != "") {
            document.querySelector(selectorError).innerHTML = name + ' phải là chữ!';
            return false;
        }
        //Chuỗi phù hợp định dạng
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraGiaTri = function (value, selectorError, minValue, maxValue, name) {
        if (value < minValue || value > maxValue || value == "") {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} - ${maxValue}`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraDoDai = function (value, selectorError, minLength, maxLength, name) {
        if (value.trim().length < minLength || value.trim().length > maxLength || value == "") {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} - ${maxLength} ký tự`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

}