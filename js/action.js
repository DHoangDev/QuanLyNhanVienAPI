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
    axios.axiosPost(Nhanvien);

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