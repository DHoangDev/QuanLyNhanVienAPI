class Axios {

    renderAxios() {
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

    axiosPost(data) {
        axios.post('http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien', {
            maNhanVien: data.maNhanVien,
            tenNhanVien: data.tenNhanVien,
            chucVu: data.ChucVu(),
            heSoChucVu: data.heSoChucVu,
            luongCoBan: data.luongCoBan,
            soGioLamTrongThang: data.gioLamTrongThang,
        }).then(() => {
            this.renderAxios();
        })
    }

    axiosUpdateInfo(data) {
        axios.put('http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=' + data.maNhanVien + '', {
            tenNhanVien: data.tenNhanVien,
            chucVu: data.ChucVu(),
            heSoChucVu: data.heSoChucVu,
            luongCoBan: data.luongCoBan,
            soGioLamTrongThang: data.gioLamTrongThang,
        }).then(() => {
            this.renderAxios();
        })
    }

    axiosEdit(data) {
        axios.get('http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=' + data + '')
            .then((response) => {
                document.getElementById('maNhanVien').value = response.data.maNhanVien;
                document.getElementById('tenNhanVien').value = response.data.tenNhanVien;
                document.getElementById('selectExample').value = response.data.heSoChucVu;
                document.getElementById('luongCoban').value = response.data.luongCoBan;
                document.getElementById('soGioLam').value = response.data.soGioLamTrongThang;
            })
    }

    axiosDelete(data) {
        axios.delete('http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=' + data + '')
            .then(() => {
                this.renderAxios();
            })
    }

}