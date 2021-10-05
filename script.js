const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

var meuAddOuro = 0
var valor = 0
var addOuro = 1

var PlacaPc = new Image()
var Pc = new Image()

PlacaPc.src = 'sempc10.png'
Pc.src = 'pc.png'

//TEXTO
ctx.font = 'italic 18px Arial';
ctx.textAlign = 'center';
ctx. textBaseline = 'middle';
ctx.fillStyle = 'red';  // a color name or by using rgb/rgba/hex values
ctx.fillText('Click no canvas para ver o exemplo', 150, 250); // text and position


PlacaPc.onload = function(){
ctx.drawImage(PlacaPc, 80, 20)}

//variavel de inicil contagem regressiva
ctx.font = "50px tahoma"
ctx.fillStyle="black"
ctx.fillText(valor,20,53)
ctx.fillText(meuAddOuro,270,53)

const soma = () => {
    setInterval(() => {
        if (valor < 5 ) {
            valor += addOuro
            ctx.font = "50px tahoma"
            ctx.fillText(valor,20,53)
            ctx.fillText(meuAddOuro,270,53)
            ctx.drawImage(PlacaPc, 80, 20)
            ctx.drawImage(Pc, 83, 23)
        if (valor == 2) {
            ctx.drawImage(Pc, 83, 23)
            ctx.drawImage(Pc, 98, 23)
        }
        if (valor == 3) {            
            ctx.drawImage(Pc, 83, 23)
            ctx.drawImage(Pc, 98, 23)
            ctx.drawImage(Pc, 113, 23)
        }
        if (valor == 4) {
            ctx.drawImage(Pc, 83, 23)
            ctx.drawImage(Pc, 98, 23)
            ctx.drawImage(Pc, 113, 23)
            ctx.drawImage(Pc, 128, 23)
        }
        if (valor == 5) {
            ctx.drawImage(Pc, 83, 23)
            ctx.drawImage(Pc, 98, 23)
            ctx.drawImage(Pc, 113, 23)
            ctx.drawImage(Pc, 128, 23)
            ctx.drawImage(Pc, 143, 23)
            
        }
        } else {
            valor = 5
            
        }

        //TEXTO
        ctx.font = 'italic 18px Arial';
        ctx.textAlign = 'center';
        ctx. textBaseline = 'middle';
        ctx.fillStyle = 'red';  // a color name or by using rgb/rgba/hex values
        ctx.fillText('Click no canvas para ver o exemplo!', 150, 250); // text and position

    }, 1001)
}

soma ()

//limpar tela a cada 2 segundos
const clearCanvas = () => {
    setInterval(() => {
        if (valor < 5) {
            ctx.clearRect( 0, 0, canvas.width, canvas.height)
            var w = canvas.width
            canvas.width = 1
            canvas.width = w
        }
    }, 1000)
  }

clearCanvas()

canvas.addEventListener('click', function() {
    if (valor > 0) {
        valor -= 1
        meuAddOuro++
    }
    else if (valor < 0) {
        valor = 0
    }
})