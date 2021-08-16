function demo1($imgsrc) {
    if ($imgsrc == 'front') {
        document.getElementById('waifu1').src = 'laika1.jpg';
    } else {
        document.getElementById('waifu1').src = 'laika2.jpg';
    }
}

function demo2() {
    var x = document.getElementById('iscute');
    let y = 'and satori is too';
    document.getElementById('iscute').innerHTML = y;
}

function demo3() {
    document.getElementById('dateo').innerHTML = Date();
}

function demo4() {
    var x = document.getElementById('txttkr');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function demo5() {
    var x = document.getElementById('chngeclr');
    if (x.style.color === '') {
        x.style.color = 'lightcoral';
        x.style.fontFamily = 'New Courier';
    } else {
        x.style.color = '';
        x.style.fontFamily = '';
    }
}


function demo6() {
    var x, y, z;
    var x = 5;
    var y = 6;
    var z = y - x;
    document.getElementById('sumhere').innerHTML = z;
}

function demo7() {
    var x = document.getElementById('hidehere');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}