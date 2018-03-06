//Information
function calUI() {
    var n = document.getElementById("usrUI").value;
    if (n.length < 1) {
        Materialize.toast("You Must Enter A Value First!", 2000, 'rounded')
        return false;
    } else {
        calcUI(n);
    }
}
function calcUI(a) {
    var val1 = document.getElementById("selectUI1").value;
    var val2 = document.getElementById("selectUI2").value;
    var fixed;
    parseFloat(fixed);
    var b = parseFloat(a);
    if (val1 == 0 || val2 == 0) {
        Materialize.toast("You Must Specify The Convert From AND Convert To!", 2000, 'rounded')
    } else if (val1 == 1 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b) + " Bytes");
    } else if (val1 == 1 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Kilobytes");
    } else if (val1 == 1 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Megabytes");
    } else if (val1 == 1 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000) + " Gigabytes");
    } else if (val1 == 1 && val2 == 5) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Terabytes");
    } else if (val1 == 1 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000) + " Petabytes");
    } else if (val1 == 1 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000) + " Exabytes");
    } else if (val1 == 1 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000000) + " Zettabytes");
    } else if (val1 == 1 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000000000) + " Yottabytes");
    } else if (val1 == 2 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Bytes");
    } else if (val1 == 2 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b) + " Kilobytes");
    } else if (val1 == 2 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Megabytes");
    } else if (val1 == 2 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Gigabytes");
    } else if (val1 == 2 && val2 == 5) {
        document.getElementById("uiVal").value = (toFIxed(b/1000000000) + " Terabytes");
    } else if (val1 == 2 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Petabytes");
    } else if (val1 == 2 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000) + " Exabytes");
    } else if (val1 == 2 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000) + " Zettabytes");
    } else if (val1 == 2 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000000) + " Yottabytes");
    } else if (val1 == 3 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000000) + " Bytes");
    } else if (val1 == 3 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Kilobytes");
    } else if (val1 == 3 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b) + " Megabytes");
    } else if (val1 == 3 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Gigabytes");
    } else if (val1 == 3 && val2 == 5) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Terabytes");
    } else if (val1 == 3 && val2 == 6) {
        document.getElementById("uiVal").value = (toFIxed(b/1000000000) + " Petabytes");
    } else if (val1 == 3 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Exabytes");
    } else if (val1 == 3 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000) + " Zettabytes");
    } else if (val1 == 3 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000000000) + " Yottabytes");
    } else if (val1 == 4 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000) + " Bytes");
    } else if (val1 == 4 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b*1000000) + " Kilobytes");
    } else if (val1 == 4 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Megabytes");
    } else if (val1 == 4 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b) + " Gigabytes");
    } else if (val1 == 4 && val2 == 5) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Terabytes");
    } else if (val1 == 4 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Petabytes");
    } else if (val1 == 4 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000) + " Exabytes");
    } else if (val1 == 4 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Zettabytes");
    } else if (val1 == 4 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Yottabytes");
    } else if (val1 == 5 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000) + " Bytes");
    } else if (val1 == 5 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000) + " Kilobytes");
    } else if (val1 == 5 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b*1000000) + " Megabytes");
    } else if (val1 == 5 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Gigabytes");
    } else if (val1 == 5 && val2 == 5) {
        document.getElementById("uiVal").value = (toFIxed(b) + " Terabytes");
    } else if (val1 == 5 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Petabytes");
    } else if (val1 == 5 && val2 == 7) {
        document.getElementById("uiVal").value = (toFIxed(b/1000000) + " Exabytes");
    } else if (val1 == 5 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000) + " Zettabytes");
    } else if (val1 == 5 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000000) + " Yottabytes");
    } else if (val1 == 6 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000000) + " Bytes");
    } else if (val1 == 6 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000) + " Kilobytes");
    } else if (val1 == 6 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000) + " Megabytes");
    } else if (val1 == 6 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b*1000000) + " Gigabytes");
    } else if (val1 == 6 && val2 == 5) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Terabytes");
    } else if (val1 == 6 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b) + " Petabytes");
    } else if (val1 == 6 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Exabytes");
    } else if (val1 == 6 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Zettabytes");
    } else if (val1 == 6 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000000) + " Yottabytes");
    } else if (val1 == 7 && val2 == 1) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000000000) + " Bytes");
    } else if (val1 == 7 && val2 == 2) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000000) + " Kilobytes");
    } else if (val1 == 7 && val2 == 3) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000000) + " Megabytes");
    } else if (val1 == 7 && val2 == 4) {
        document.getElementById("uiVal").value = (toFixed(b*1000000000) + " Gigabytes");
    } else if (val1 == 7 && val2 == 5) {
        document.getElementById("uiVal").value = (toFixed(b*1000000) + " Terabytes");
    } else if (val1 == 7 && val2 == 6) {
        document.getElementById("uiVal").value = (toFixed(b*1000) + " Exabytes");
    } else if (val1 == 7 && val2 == 7) {
        document.getElementById("uiVal").value = (toFixed(b) + " Petabytes");
    } else if (val1 == 7 && val2 == 8) {
        document.getElementById("uiVal").value = (toFixed(b/1000) + " Zettabytes");
    } else if (val1 == 7 && val2 == 9) {
        document.getElementById("uiVal").value = (toFixed(b/1000000) + " Yottabytes");
    }
}


//tmperature
function calTemp() {
    var n = document.getElementById("usrTemp").value;
    if (n.length < 1)
    {
        Materialize.toast('You Must Enter A Value First!', 2000, 'rounded') 
        return false;
    } else {
        calcTemp(n)
    }
}
function calcTemp(a) {
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;
    var temp6;
    var b = parseFloat(a);
    if (document.getElementById('temp1').checked) {
        temp1 = true;
    } else {
        temp1 = false;
    }
    console.log(temp1);
    if (document.getElementById('temp2').checked) {
        temp2 = true;
    } else {
        temp2 = false;
    }
    console.log(temp2);
    if (document.getElementById('temp3').checked) {
        temp3 = true;
    } else {
        temp3 = false;
    }
    console.log(temp3);
    if (document.getElementById('temp4').checked) {
        temp4 = true;
    } else {
        temp4 = false;
    }
    console.log(temp4);
    if (document.getElementById('temp5').checked) {
        temp5 = true;
    } else {
        temp5 = false;
    }
    console.log(temp5);
    if (document.getElementById('temp6').checked) {
        temp6 = true;
    } else {
        temp6 = false;
    }
    console.log(temp6);
// °
    if (temp1 === true && temp4 === true) {
        document.getElementById("tmpVal").value = (b + "° F");
    } else if (temp1 == true && temp5 == true) {
        document.getElementById("tmpVal").value = ((b-32)*(5/9) + "° C");
    } else if (temp1 == true && temp6 == true) {
        document.getElementById("tmpVal").value = ((b + 459.67)*(5/9) + "° K");
    } else if (temp2 == true && temp4 == true) {
        document.getElementById("tmpVal").value = (((b*(9/5))+32) + "° F");
    } else if (temp2 == true && temp5 == true) {
        document.getElementById("tmpVal").value = (b + "° C");
    } else if (temp2 == true && temp6 == true) {
        document.getElementById("tmpVal").value = ((b + 273.15) + "° K");
    } else if (temp3 == true && temp4 == true) {
        document.getElementById("tmpVal").value = ((((9/5)*(b-273.15))+32)+"° F");
    } else if (temp3 == true && temp5 == true) {
        document.getElementById("tmpVal").value = ((b - 273.15) + "° C");
    } else if (temp3 == true && temp5 == true) {
        document.getElementById("tmpVal").value.value = (b + "° K");
    } else if (temp1 == false && temp2 == false && temp3 == false && temp4 == false && temp5 == false && temp6 == false) {
        Materialize.toast('You must choose a value to convert from and to first!', 2000, 'rounded') 
        return false;
    } else if ((temp1 == false && temp2 == false && temp3 == false)||(temp4 == false && temp5 == false && temp6 == false)) {
        Materialize.toast('You must choose a value to convert from and to first!', 2000, 'rounded') 
        return false;
    } else {
        console.log("Error: Unknown Error. app.js, calcTemp. End of IF.")
    }
}
function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }