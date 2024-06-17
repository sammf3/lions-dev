let resposta

console.log("Gosta de café?")
process.stdin.once('data', function(data) { 
resposta= data.toString().trim()
processamento(resposta)
process.exit()
})

function processamaento (resposta) {
    if (resposta == "sim") {
        console.log('voce gosta de café que legal')
        else if (resposta == "não") { 
            console.log('ahh que pena')
    }
}