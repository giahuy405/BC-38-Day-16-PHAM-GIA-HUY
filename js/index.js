/*function ex1() {
    var displayEven = document.getElementById('displayEven');
    var displayOdd = document.getElementById('displayOdd');
    for (var i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            displayEven.innerHTML = displayEven.innerHTML + ' ' + i;
        } else {
            displayOdd.innerHTML = displayOdd.innerHTML + ' ' + i;
        }
    }
}
*/
function ex1() {
    for (var even = '', odd = '', i = 0; i <= 100; i++) i % 2 === 0 ? even += i + ' ' : odd += i + ' ';
    document.getElementById("displayEven").innerHTML = even;
    document.getElementById('displayOdd').innerHTML = odd;
}
/*
function ex2() {
    var displayEx2 = document.getElementById('displayEx2');
    var count = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    displayEx2.innerHTML = count + ' số';
}
*/
function ex2() {
    for (var i = 0, count = 0; i <= 1000; i++) i % 3 === 0 && count++;
    document.getElementById('displayEx2').innerHTML = count + ' số';
}

function ex3() {
    var displayEx3 = document.getElementById('displayEx3');
    var s = 0;
    var i = 0;
    while (s < 10000) {
        i++;
        s += i;
    }
    displayEx3.innerHTML = i;
}

function ex4() {
    var displayEx4 = document.getElementById('displayEx4');
    var xEx4 = +document.getElementById('xEx4').value;
    var nEx4 = +document.getElementById('nEx4').value;
    var s = 0;
    // kiểm tra hơpj lệ
    if (xEx4 < 0) {
        alert('Nhập x ko hợp lệ');
        return;
    }
    if (nEx4 < 0) {
        alert('Nhập x ko hợp lệ');
        return;
    }

    for (var i = 1; i <= nEx4; i++) {
        // s += Math.pow(xEx4,i);
        s = s + xEx4 ** i;
    }
    displayEx4.innerHTML = s;
}

function ex5() {
    var displayEx5 = document.getElementById('displayEx5');
    var nEx5 = +document.getElementById('nEx5').value;
    var s = 1;
    //kiểm tra hợp lệ
    if (nEx5 < 0) {
        alert('Nhập số không hợp lệ');
        return;
    }
    for (var i = 1; i <= nEx5; i++) {
        s *= i;
    }
    displayEx5.innerHTML = s;
}


function ex6() {
    /* content += i % 2 === 0 ( gán trước so sánh sau ) 
     ->  content = content + i % 2 === 0 
         
    */
    // for (var content = '', i = 0; i <= 10; i++) content += i % 2 === 0 ?  content='<div class="alert alert-danger m-0">Div chẳn</div>' : content=' <div class="alert alert-primary m-0">Div lẻ</div>';
    for (var content = '', i = 0; i <= 10; i++) content += i % 2 === 0 ? '<div class="alert alert-danger m-0">Div chẳn</div>' : '<div class="alert alert-primary m-0">Div lẻ</div>';
    document.getElementById("displayEx6").innerHTML = content;
}

function ex7() {
    var displayEx7 = document.getElementById('displayEx7');
    var numberEx7 = document.getElementById('numberEx7').value * 1;
    var isPrimeNumber = true;
    var count = 0;
    if (numberEx7 < 2){
        displayEx7.innerHTML=numberEx7 + ' không là số NT';
        return;
    }
    // số 5 là số nguyên tố 
    for (var i = 1; i <= numberEx7; i++) {
        if (numberEx7 % i === 0) {
            count++;
        }
    }
    count === 2 ? displayEx7.innerHTML=numberEx7 + ' là số NT' : displayEx7.innerHTML=numberEx7 + ' không là số NT';

}