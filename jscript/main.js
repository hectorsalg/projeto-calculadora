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
            flag2 = true
        } else {
            calc1.innerHTML = ''
            calc1.innerHTML += num
            flag2 = true
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML += num
            flag2 = false
        } else {
            calc2.innerHTML = ''
            calc2.innerHTML += num
            flag2 = false
        }
    }
}

function sinal(valor) {
    let calcsin = valor
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
            calc1.innerHTML = Math.floor(borracha1/10)
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML = Math.floor(borracha2/10)
        }
    }
}

function porcento() {
    let cento = calc2.innerHTML

    if (flag1 == false) {
        if (calc1.innerHTML != 0) {
            calc1.innerHTML = 0
        }
    } else {
        if (calc2.innerHTML != 0) {
            calc2.innerHTML = cento/100
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
    } else if (sin == '-') {
        resul = Number(num1) - Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
    } else if (sin == 'x') {
        resul = Number(num1) * Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
    } else if (sin == '/') {
        resul = Number(num1) / Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
    } else {
        resul = Number(num1) + Number(num2)
        res.innerHTML = resul
        calc1.innerHTML = resul
        sin1.innerHTML = '+'
        calc2.innerHTML = 0
        sin2.innerHTML = ''
    }
}
