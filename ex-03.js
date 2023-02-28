const fs = require('fs')

function reportInvoicing() {
    const data = JSON.parse(fs.readFileSync('./dados.json', 'utf-8')).filter(el => el.valor > 0)
    const averageInvoicing = data.reduce((acc, currentEl) => acc + currentEl.valor, 0) / data.length
    let maxInvoicing = 0
    let minInvoicing = data[0].valor
    let totalDays = []

    for (let i = 0; i < data.length; i++) {
        maxInvoicing < data[i].valor ? maxInvoicing = data[i].valor : null
        minInvoicing > data[i].valor ? minInvoicing = data[i].valor : null
        data[i].valor > averageInvoicing ? totalDays.push(data[i].dia) : null
    }

    console.log(`O menor valor de faturamento ocorrido foi ${minInvoicing.toFixed(2)}`) 
    console.log(`O maior valor de faturamento ocorrido ${maxInvoicing.toFixed(2)}`)
    console.log(`Dias em que o faturamento foi superior a média mensal(${averageInvoicing.toFixed(2)}): ${totalDays}`)
                 
}
reportInvoicing()