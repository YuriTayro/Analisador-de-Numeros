let num = window.document.querySelector('input#numero')
let b = window.document.querySelector('input#but')
let s = window.document.querySelector('select#sel')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<=100){
        return true
    }else {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {                          //Significa: se o número não for encontrado na lista.
        return true
    } else{
        return false
    }

}

function adicionar(){

if(isNumero(num.value) && !inLista(num.value, valores)){    /*OBS: isNumero e inList foram nomes criados. Quer dizer o seguinte: Se isNumero é realmente um 
                                                                número e se esse número não está na lista (inLista) faremos o seguinte: add o número q está em num.value*/ 
    valores.push(Number(num.value))  
                                                              //As linhas 25 e 27 servem para armazenar e add os números digitados em input number.
    let item = window.document.createElement('option')        //As linhas 29, 30 e 31 vão mostrar no input select os números armazenados em input number.
    item.text = `Valor ${num.value} adicionado.`  
    s.appendChild(item)     
    res.innerHTML = ''                                        //Isso vai fazer com q precise finalizar novamente ao se add um número em input number.                                                
}else{
    window.alert('Valor inválido ou já encontrado na lista!')
}
    num.value = ''                                            //Esse comando vai apagar o número escrito em input number depois q vc apertar no botão Adicionar.
    num.focus()                                              //Esse comando vai fazer com q o cursor do mouse volte para o input number depois q vc tiver apertado em add o numero ao input select.

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]   
        let menor = valores[0]                             //Quando queremos saber qual número armazenado é o maior ou o menor, devemos supor q o primeiro pode ser o maior ou o menor número. Por isso fazemos a linha 46 e 47.
        let soma = 0
        let media= 0
        for(let pos in valores){
           soma += valores[pos] 
            if(valores[pos] > maior)
                maior = valores[pos]
             if(valores[pos]< menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ``                                  //Essa etapa evita q se add uma outra resposta a abaixo da já existente.
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
