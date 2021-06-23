function renderAxios() {
    axios.get('http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien')
        .then((response) => {

            var array = [];

            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                var Nhanvien = new NhanVien(element.maNhanVien, element.tenNhanVien, element.heSoChucVu, element.luongCoBan, element.soGioLamTrongThang);
                array += `
                <tr>
                    <td>${Nhanvien.maNhanVien}</td>
                    <td>${Nhanvien.tenNhanVien}</td>
                    <td>${element.chucVu}</td>
                    <td>${Nhanvien.luongCoBan}</td>
                    <td>${Nhanvien.tongLuong()}</td>
                    <td>${Nhanvien.gioLamTrongThang}</td>
                    <td>${Nhanvien.xepLoai()}</td>
                    <td>
                        <button class="btn btn-success mx-1" onclick="editFc(${Nhanvien.maNhanVien})">Edit</button>
                        <button class="btn btn-danger mx-1" onclick="deleteFc(${Nhanvien.maNhanVien})">Delete</button>
                    </td>
                </tr>
            `;
            }

            document.getElementById('table-body').innerHTML = array;

        })
}

window.addEventListener('load', () => {
    renderAxios();
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

    axios.post('http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien', {
        maNhanVien: Nhanvien.maNhanVien,
        tenNhanVien: Nhanvien.tenNhanVien,
        chucVu: Nhanvien.ChucVu(),
        heSoChucVu: Nhanvien.heSoChucVu,
        luongCoBan: Nhanvien.luongCoBan,
        soGioLamTrongThang: Nhanvien.gioLamTrongThang,
    }).then(() => {
        renderAxios();
    })
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

    axios.put('http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=' + Nhanvien.maNhanVien + '', {
        tenNhanVien: Nhanvien.tenNhanVien,
        chucVu: Nhanvien.ChucVu(),
        heSoChucVu: Nhanvien.heSoChucVu,
        luongCoBan: Nhanvien.luongCoBan,
        soGioLamTrongThang: Nhanvien.gioLamTrongThang,
    }).then(() => {
        renderAxios();
    })
}

function editFc(val) {
    axios.get('http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=' + val + '')
        .then((response) => {
            document.getElementById('maNhanVien').value = response.data.maNhanVien;
            document.getElementById('tenNhanVien').value = response.data.tenNhanVien;
            document.getElementById('selectExample').value = response.data.heSoChucVu;
            document.getElementById('luongCoban').value = response.data.luongCoBan;
            document.getElementById('soGioLam').value = response.data.soGioLamTrongThang;
        })
}

function deleteFc(val) {
    axios.delete('http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=' + val + '')
        .then(() => {
            renderAxios();
        })
}