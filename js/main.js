const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

const GRABSUV_1 = 9000;
const GRABSUV_2 = 8500;
const GRABSUV_3 = 8000;
const GRABSUV_WAIT = 3000;


const GARABBLACK_1 = 10000;
const GARABBLACK_2 = 9500;
const GARABBLACK_3 = 9000;
const GARABBLACK_WAIT = 3500;

var tienCho = 0;
var tienKm1 = 0;
var tienKm2 = 0;
var tienKm3 = 0;
var tongTien = 0;


document.getElementById("btnTinhTien").onclick = function () {
    var soKm = document.getElementById("txtSoKM").value;
    var tgCho = document.getElementById("txtTGCho").value;
    var loaiXe = layLoaiXe();


    if (!loaiXe) {
        alert("Vui lòng chọn loại xe");
    }
    switch (loaiXe) {
        case "grabX":
            tinhChiTiet(soKm, tgCho, GRABX_1, GRABX_2, GRABX_3, GRABX_WAIT)
            break;
        case "grabSUV":
            tinhChiTiet(soKm, tgCho, GRABSUV_1, GRABSUV_1, GRABSUV_1, GRABSUV_WAIT)
            break;
        case "grabBlack":
            tinhChiTiet(soKm, tgCho, GARABBLACK_1, GARABBLACK_2, GARABBLACK_3, GARABBLACK_WAIT)
            break;

        default:
            break;
    }document.getElementById("divThanhTien").style.display="block";
    document.getElementById("xuatTien").innerHTML=tongTien;

}

function layLoaiXe() {
    var radioGrabX = document.getElementById("grabX");
    var radioGrabSuv = document.getElementById("grabSUV");
    var radioGrabBlack = document.getElementById("grabBlack");

    if (radioGrabX.checked) {
        return "grabX";
    }
    if (radioGrabSuv.checked) {
        return "grabSUV";
    }
    if (radioGrabBlack.checked) {
        return "grabBlack";
    }
    return null;
}


function tinhGiaCho(tgCho, giaCho) {
    var kq = 0;
    if (tgCho >= 3) {
        kq = Math.floor(tgCho / 3) * giaCho;
    }
    return kq;
}

function tinhKm1(soKm, giaKm1) {
    return soKm * giaKm1;

}

function tinhKmTren1(soKm, giaKmTren1) {
    return (soKm - 1) * giaKmTren1;
}

function tinhKmTren19(soKm, giaKmTren19) {
    return (soKm - 19) * giaKmTren19;
}

function tinhChiTiet(soKm, tgCho, giaCho, giaKm1, giaKmTren1, giaKmTren19) {
    if (0 < soKm && soKm <= 1) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm1Km1 = tinhKm1(soKm, giaKm1)
        tongTien = tienKm1 + tienCho;
    } else if (1 < soKm && soKm <= 19) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm1 = tinhKm1(1, giaKm1);
        tienKm2 = tinhKmTren1(soKm, giaKmTren1);
        tongTien = tienKm1 + tienCho + tienKm2;
    } else if (19 < soKm) {
        tienCho = tinhGiaCho(tgCho, giaCho);
        tienKm1 = tinhKm1(1, giaKm1);
        tienKm2 = tinhKmTren1(19, giaKmTren1);
        tienKm3 = tinhKmTren19(soKm, giaKmTren19);
        tongTien = tienKm1 + tienCho + tienKm2 + tienKm3;
    } else {
        alert("Vui lòng nhập vào số hợp lệ");
    }

}