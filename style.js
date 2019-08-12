function onClick1() {
    document.getElementById('input').value = document.getElementById('input').value + 1;
}
function onClick2() {
    document.getElementById('input').value = document.getElementById('input').value + 2;
}
function onClick3() {
    document.getElementById('input').value = document.getElementById('input').value + 3;
}
function onClick4() {
    switch (document.getElementById('input').value.substring(0, 1)) {
        case '+':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            }
            break;
        case '-':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            }
            break;
        case '*':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            }
            break;
        case '/':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "+";
            }
            break;

        default:
            res1 = document.getElementById('input').value;
            document.getElementById('input').value = "+";

    }
}

function onClick5() {
    document.getElementById('input').value = document.getElementById('input').value + 4;
}
function onClick6() {
    document.getElementById('input').value = document.getElementById('input').value + 5;
}
function onClick7() {
    document.getElementById('input').value = document.getElementById('input').value + 6;
}
function onClick8() {
    switch (document.getElementById('input').value.substring(0, 1)) {
        case '+':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            }
            break;
        case '-':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            }
            break;
        case '*':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            }
            break;
        case '/':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "-";
            }
            break;

        default:
            res1 = document.getElementById('input').value;
            document.getElementById('input').value = "-";

    }

}

function onClick9() {
    document.getElementById('input').value = document.getElementById('input').value + 7;
}
function onClick10() {
    document.getElementById('input').value = document.getElementById('input').value + 8;
}
function onClick11() {
    document.getElementById('input').value = document.getElementById('input').value + 9;
}
function onClick12() {
    switch (document.getElementById('input').value.substring(0, 1)) {
        case '+':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            }
            break;
        case '-':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            }
            break;
        case '*':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            }
            break;
        case '/':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "*";
            }
            break;

        default:
            res1 = document.getElementById('input').value;
            document.getElementById('input').value = "*";

    }
}

function onClick13() {
    document.getElementById('input').value = document.getElementById('input').value + ".";
}
function onClick14() {
    document.getElementById('input').value = document.getElementById('input').value + 0;
}
function onClick15() {
    switch (document.getElementById('input').value.substring(0, 1)) {
        case '+':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            }
            break;
        case '-':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            }
            break;
        case '*':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            }
            break;
        case '/':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = null;
            }
            break;

        default:
            document.getElementById('result').value = document.getElementById('input').value;
            document.getElementById('input').value = null;

    }
}
function onClick16() {
    switch (document.getElementById('input').value.substring(0, 1)) {
        case '+':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) + parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            }
            break;
        case '-':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) - parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            }
            break;
        case '*':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseFloat(res1) * parseFloat(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            }
            break;
        case '/':
            if (document.getElementById('result').value.length == 0) {
                res2 = document.getElementById('input').value.substring(1);
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            } else {
                res2 = document.getElementById('input').value.substring(1);
                res1 = document.getElementById('result').value;
                let result = parseInt(res1) / parseInt(res2);
                document.getElementById('result').value = result;
                document.getElementById('input').value = "/";
            }
            break;

        default:
            res1 = document.getElementById('input').value;
            document.getElementById('input').value = "/";

    }
}

function onClick17(){
    document.getElementById('input').value = null;
    document.getElementById('result').value = null;
}