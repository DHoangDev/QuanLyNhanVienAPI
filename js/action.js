window.addEventListener('load', () => {
  var axios = new Axios();
  axios.renderAxios();
})

document.getElementById('confirm').onclick = (e) => {
  e.preventDefault();

  var Nhanvien = new NhanVien(
    document.getElementById('maNhanVien').value,
    document.getElementById('tenNhanVien').value,
    document.getElementById('selectExample').value,
    document.getElementById('luongCoban').value,
    document.getElementById('soGioLam').value
  );

  var axios = new Axios();
  let validation = new Validation();

  var txtEmpty = true;
  txtEmpty &= validation.kiemTraRong(Nhanvien.maNhanVien, '#empty_text_maNhanVien', 'Mã nhân viên')
    & validation.kiemTraRong(Nhanvien.tenNhanVien, '#empty_text_tenNhanVien', 'Tên nhân viên')
    & validation.kiemTraRong(Nhanvien.luongCoBan, '#empty_text_luongCoBan', 'Lương cơ bản')
    & validation.kiemTraRong(Nhanvien.gioLamTrongThang, '#empty_text_soGioLam', 'Số giờ làm');

  if (!txtEmpty) {
    // Khi gia tri khong dung
    var valiTxt = true;
    //Kiểm tra là số
    valiTxt &= validation.kiemTraTatCaSo(Nhanvien.maNhanVien, '#error_allnumber_maNhanVien', 'Mã nhân viên')
      & validation.kiemTraTatCaSo(Nhanvien.luongCoBan, '#error_allnumber_luongCoBan', 'Lương cơ bản')
      & validation.kiemTraTatCaSo(Nhanvien.gioLamTrongThang, '#error_allnumber_soGioLam', 'Số giờ làm')
      //Kiểm tra ký tự
      & validation.kiemTraTatCaKyTu(Nhanvien.tenNhanVien, '#error_allletter_tenNhanVien', 'Tên nhân viên');
    // Khi gia tri khong dung
    var valiValue = true;
    //Kiểm tra giới hạn nhập
    valiValue &= validation.kiemTraGiaTri(Nhanvien.luongCoBan, '#error_min_max_value_luongCoBan', 1000000, 6000000, 'Lương cơ bản')
      & validation.kiemTraGiaTri(Nhanvien.gioLamTrongThang, '#error_min_max_value_soGioLam', 50, 150, 'Số giờ làm trong tháng')
      & validation.kiemTraDoDai(Nhanvien.maNhanVien, '#error_min_max_value_maNhanVien', 4, 6, 'Mã nhân viên');

    if (valiTxt && valiValue) {

      axios.axiosPost(Nhanvien);
    }
  }

}

document.getElementById('update').onclick = (e) => {
  e.preventDefault();

  var Nhanvien = new NhanVien(
    document.getElementById('maNhanVien').value,
    document.getElementById('tenNhanVien').value,
    document.getElementById('selectExample').value,
    document.getElementById('luongCoban').value,
    document.getElementById('soGioLam').value
  );
  let validation = new Validation();
  var vali = true;
  //Kiểm tra là số
  vali &= validation.kiemTraTatCaSo(Nhanvien.maNhanVien, '#error_allnumber_maNhanVien', 'Mã nhân viên')
    & validation.kiemTraTatCaSo(Nhanvien.luongCoBan, '#error_allnumber_luongCoBan', 'Lương cơ bản')
    & validation.kiemTraTatCaSo(Nhanvien.gioLamTrongThang, '#error_allnumber_soGioLam', 'Số giờ làm');
  //Kiểm tra ký tự
  vali &= validation.kiemTraTatCaKyTu(Nhanvien.tenNhanVien, '#error_allletter_tenNhanVien', 'Tên nhân viên');

  //Kiểm tra giới hạn nhập
  vali &= validation.kiemTraDoDai(Nhanvien.maNhanVien, '#error_min_max_value_maNhanVien', 4, 6, 'Mã nhân viên')
  vali &= validation.kiemTraGiaTri(Nhanvien.luongCoBan, '#error_min_max_value_luongCoBan', 1000000, 6000000, 'Lương cơ bản')
  vali &= validation.kiemTraGiaTri(Nhanvien.gioLamTrongThang, '#error_min_max_value_soGioLam', 50, 150, 'Số giờ làm trong tháng')

  if (!vali) {
    return;
  }
  var axios = new Axios();
  axios.axiosUpdateInfo(Nhanvien);
}

function editFc(val) {
  var axios = new Axios();
  axios.axiosEdit(val);
}

function deleteFc(val) {
  var axios = new Axios();
  axios.axiosDelete(val);
}