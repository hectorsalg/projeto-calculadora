let calc1 = document.getElementById('calcnum1')
let calc2 = document.getElementById('calcnum2')
let sin1 = document.getElementById('calcsinal1')
let sin2 = document.getElementById('calcsinal2')
let res = document.getElementById('calcresul')
let flag1 = false // flag para saber qual calcnum será alterada.
let flag2 = false // flag para saber se é possível alterar o sinal da conta.

function inserir(valor) {
    let num = valor
    if (flag1 == false) {
        if (calc1.innerHTML != 0) {
            calc1.innerHTML += num
            res.innerHTML += num
            if (res.style.overflow == 'auto') {
                alert('número muito grande')
            }
            flag2 = true
        } else {
            calc1.innerHTML = ''
            calc1.innerHTML += num
            res.innerHTML = ''
            res.innerHTML += num
            flag2 = true
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML += num
            res.innerHTML += num
            flag2 = false
        } else {
            calc2.innerHTML = ''
            calc2.innerHTML += num
            res.innerHTML = ''
            res.innerHTML += num
            flag2 = false
        }
    }
}

function sinal(valor) {
    let calcsin = valor
    res.innerHTML = 0

    if (calc1.innerHTML != 0) {
        flag1 = true // já é possivel alterar o segundo valor do calcnum
        if (flag2 == true) { 
            sin1.innerHTML = calcsin
            sin2.innerHTML = calcsin
        }
    }
}

function limpar() {
    flag1 = false
    flag2 = false
    
    calc1.innerHTML = 0
    sin1.innerHTML = '+'
    calc2.innerHTML = 0
    sin2.innerHTML = ''
    res.innerHTML = 0
}

function apagar() {
    let borracha1 = calc1.innerHTML
    let borracha2 = calc2.innerHTML

    if (flag1 == false) {
        if (calc1.innerHTML != 0) {
            calc1.innerHTML = borracha1.slice(0, -1)
            res.innerHTML = borracha1.slice(0, -1)
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML = borracha2.slice(0, -1)
            res.innerHTML = borracha2.slice(0, -1)
        }
    }
}

function porcento() {
    let cento1 = calc1.innerHTML
    let cento2 = calc2.innerHTML

    if (flag1 == false) {
        if (calc1.innerHTML != 0) {
            calc1.innerHTML = cento1/100
            res.innerHTML = cento1/100
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML = cento2/100
            res.innerHTML = cento2/100
        }
    }
}

function calcular() {
    let num1 = calc1.innerHTML
    let sin = sin2.innerHTML
    let num2 = calc2.innerHTML
    let resul

    flag1 = true
    flag2 = true

    if (sin == '+') {
        resul = Number(num1) + Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
        if (resul == 0) {
            flag1 = false
        }
    } else if (sin == '-') {
        resul = Number(num1) - Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
        if (resul == 0) {
            flag1 = false
        }
    } else if (sin == 'x') {
        resul = Number(num1) * Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
        if (resul == 0) {
            flag1 = false
        }
    } else if (sin == '/') {
        if(Number(num2) == 0) {
            resul = 0
            calc1.innerHTML = resul
            sin1.innerHTML = '+'
            calc2.innerHTML = 0
            sin2.innerHTML = ''
            if (resul == 0) {
                flag1 = false
            }
        } else {
            resul = Number(num1) / Number(num2)
            res.innerHTML = resul
            calc1.innerHTML = resul
            sin1.innerHTML = '+'
            calc2.innerHTML = 0
            sin2.innerHTML = ''
        }
        
    } else {
        resul = Number(num1) + Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
        if (resul == 0) {
            flag1 = false
        }
    }
}

function pontuar(valor) {
    let ponto = valor
    if (flag1 == false) {
        if (calc1.innerHTML != 0 && res.innerHTML.indexOf('.') == -1) {
            calc1.innerHTML += ponto
            res.innerHTML += ponto
            flag2 = true
        }
    } else {
        if (calc2.innerHTML != 0 && res.innerHTML.indexOf('.') == -1) {
            calc2.innerHTML += ponto
            res.innerHTML += ponto
            flag2 = false
        }
    }
}