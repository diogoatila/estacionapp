function calcula(){
    let calctempo = document.getElementById('calctempo')
    let sub = document.getElementById('sub')
    let total = document.getElementById('total')
    let tempo = 5
    let valor = 0
    let adc = 0
    calctempo.innerHTML =`Tempo: ${tempo} horas`
    if (tempo > 3){
        adc = tempo + 1

    if (tempo <= 3 && tempo > 0.15){
        valor = 4
    }else if (tempo > 3){
        valor = adc
    }else{
        valor = 10
    }
    }
    sub.innerHTML =`Subtotal: ${valor} reais`
    total.innerHTML =`Total: ${valor} reais`
    }
