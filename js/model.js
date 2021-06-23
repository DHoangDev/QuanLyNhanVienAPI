class NhanVien {

    constructor(maNhanVien, tenNhanVien, heSoChucVu, luongCoBan, gioLamTrongThang) {
        this.maNhanVien = maNhanVien;
        this.tenNhanVien = tenNhanVien;
        this.heSoChucVu = Number(heSoChucVu);
        this.luongCoBan = luongCoBan;
        this.gioLamTrongThang = gioLamTrongThang;
    }

    ChucVu() {
        if (this.heSoChucVu === 1) { return 'Nhân Viên'; }
        if (this.heSoChucVu === 2) { return 'Quản Lý'; }
        if (this.heSoChucVu === 3) { return 'Giám Đốc'; }
    }

    tongLuong() {
        return this.luongCoBan * this.gioLamTrongThang;
    }

    xepLoai() {
        if (this.gioLamTrongThang >= 120) {
            return "Excellence Staff";
        }
        if (this.gioLamTrongThang >= 100 && this.gioLamTrongThang < 120) {
            return "Good Staff";
        }
        if (this.gioLamTrongThang >= 80 && this.gioLamTrongThang < 100) {
            return "Fairly Staff";
        }
        if (this.gioLamTrongThang >= 50 && this.gioLamTrongThang < 80) {
            return "Average Staff";
        }
        if (this.gioLamTrongThang < 50 || this.gioLamTrongThang == null) {
            return "No comment";
        }
    }

};