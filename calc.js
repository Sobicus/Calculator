let a = '';//first number
let b = '';//second number
let sign = '';//operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-']

//screen
const out = document.querySelector('.calc-screen p')

function clearAll() {
    a = '';//first number
    b = '';//second number
    sign = '';//operation sign
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //button doesn't press
    if (!event.target.classList.contains('btn')) return;
    //button clearAll pressed
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //take button which we press
    const key = event.target.textContent;
    //if press [0-9]
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a, b, sign)
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key
            out.textContent = b
            console.log(a, b, sign)
        }
    }
    //if press ['-', '+', 'X', '/', '%']
    if (action.includes(key)) {
        sign = key
        out.textContent = sign;
        console.log(a, b, sign)
    }
    /*if (action.includes('+/-') && a!== '') {
        a = -a
    } else if(action.includes('+/-') && b!== '') {
        b = -b
    }*/

    //press =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if(b==='0'){
                    out.textContent = '0';
                    a =0;
                    b=0;
                    return;
                }
                a = a / b;
                break;
            case "%":
                a = (a / 100) * b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}
//
//
//
//