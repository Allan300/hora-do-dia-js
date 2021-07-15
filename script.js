const body = document.querySelector('body')

function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('image')
    let date = new Date()
    let hora = date.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'images/foto-manha.png'
        document.body.style.background = '#e2cd9f'        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'images/foto-noite.png'
        document.body.style.background = '#515154'
    }
}

body.onload = carregar()