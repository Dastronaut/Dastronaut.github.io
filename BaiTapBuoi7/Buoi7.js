document.getElementById("bai1").onclick = ShowDate;
function ShowDate() {
    let d  = new Date();
    document.getElementById("ngaygio").innerHTML = "Ngay: " + d.getDate() + "- Gio: " + d.getHours();
}

document.getElementById("bai2").onclick =  ShowDinhDang;
function ShowDinhDang() {
    let d = new Date();
    document.getElementById("dinhdang1").innerHTML = "mm-dd-yy: " + d.getMonth() + "-" + d.getDate() + "-" + d.getFullYear();
    document.getElementById("dinhdang2").innerHTML = "mm/dd/yy: " + d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
    document.getElementById("dinhdang3").innerHTML = "dd-mm-yy: " + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    document.getElementById("dinhdang4").innerHTML = "dd-mm-yy: " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}

function KtraTang() {
    let ip = document.getElementById("input3").value;
    if (ip == "") alert("Nhập số trước");
    ip = Number(ip);
    let a = new Array();
    let j = 0;
    while (ip != 0) {
        a[j] = ip % 10;
        ip /= 10;
        ++j;
    }
    let kt = true;
    for (let i = 0; i < j; i++) {
        if (a[i] <= a[i+1]) {
            kt = false;
            break;
        }
    }
    if (kt) alert("Là số tăng");
    else alert("Là số không tăng");
}

function ThayChuoi() {
    let ip = document.getElementById("input4").value;
    if (ip == "") {
        alert("Nhập chuỗi trước!");
        return;
    }
    let tmp = "";
    for (let i = 0; i < ip.length; i++) {
        tmp += String.fromCharCode(ip.charCodeAt(i)+1);
    }
    alert(tmp);
}

function subString() {
    let ip = document.getElementById("input5").value;
    if (ip == "") {
        alert("Nhập chuỗi trước!");
        return;
    }
    if (ip.length % 2 == 0 || ip.length < 3) {
        alert("Độ dài chuỗi phải là số lẻ và lớn hơn hoặc bằng ba");
        return;
    }
    let pos = (ip.length - 1)/2 - 1;
    alert(ip.substring(pos,pos+3));
}

function CountArray() {
    //alert("Nhập các phần tử của mảng cách nhau bởi dấu ',' ");
    let ip = document.getElementById("input6").value;
    let tmp =  ip.split(",");
    let tg = 0;
    let result = -1;
    for (let i = 0; i < 10; i++) {
        let count = 0;
        for (let j = 0; j < tmp.length; j++) {
            if (tmp[j] == i) count++;
        }
        if (count >= tg) {
            tg = count;
            result = i;
        }
    }
    alert("Phần tử xuất hiện nhiều nhất trong mảng là số: " + result);
}

function CheckJava() {
    let ip = document.getElementById("input7").value;
    let pos = ip.search("java");
    if (pos != -1) alert("Yahh");
    else alert("Nope");
}

function ParseMonth() {
    let ip = document.getElementById("input8").value;
    if (ip == "") {
        alert("Nhập số trước!");
        return;
    }
    ip = Number(ip);
    switch (ip) {
        case 1:
            alert("Tháng Một");
            break;
        case 2:
            alert("Tháng Hai");
            break;
        case 3:
            alert("Tháng Ba");
            break;
        case 4:
            alert("Tháng Bốn");
            break;
        case 5:
            alert("Tháng Năm");
            break;
        case 6:
            alert("Tháng Sáu");
            break;
        case 7:
            alert("Tháng Bảy");
            break;
        case 8:
            alert("Tháng Tám");
            break;
        case 9:
            alert("Tháng Chín");
            break;
        case 10:
            alert("Tháng Mười");
            break;
        case 11:
            alert("Tháng Mười Một");
            break;
        case 12:
            alert("Tháng Mười Hai");
            break;
        default:
            alert("Số vừa nhập không hợp lệ!");
            break;
    }
}

function CheckLength() {
    let ip = document.getElementById("input9").value;
    if (ip == "") {
        alert("Nhập chuỗi trước!");
        return;
    }
    let tmp = ip.split(" ");
    let max = 0;
    let result = "";
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].length > max) {
            max = tmp[i].length;
            result = tmp[i];
        }
    }
    alert(result);
}

function CheckSNT(n) {
    let check = false;
    if (n < 2) return check;
    let count = 0;
    for (let i=2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) count++;
    }
    if (count == 0) check = true;
    else check = false;
    return check;
}

function AmongSNT() {
    let a = document.getElementById("input101").value;
    let b = document.getElementById("input102").value;
    let SNT = new Array();
    let k = 0;
    for (let i = a; i <= b; i++) {
        if (CheckSNT(i)) {
            SNT[k] = i;
            k++;
        }
    }
    for (let i = 0; i < SNT.length; i++) {
        document.getElementById("print").innerHTML += SNT[i] + ", ";
    }
}