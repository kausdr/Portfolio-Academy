var typing = document.querySelector('#typing')
var txt = ['Front-End.','de Jogos.']
var i = 0
var j = 0
var delay = 100
var startDelay = 600
var eraseDelay = 600

function type(){
    if (i<txt.length){
        if (j<txt[i].length){
          typing.textContent += txt[i].charAt(j)
          j++
          setTimeout(type, delay)
        }
        else if(j==txt[i].length){
            setTimeout(verifica, eraseDelay)
        }
    }
    else if(i>=txt.length){
        i=0
        setTimeout(type, delay)
    }
}

function verifica(){
    if(j>0){
        typing.textContent = txt[i].substring(0,j-1)
        j = j-1
        setTimeout(verifica, delay)
    }
    else if(j==0){
        i++
        setTimeout(type, delay)
    }
}

document.addEventListener(onload, setTimeout(type,startDelay))
