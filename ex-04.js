function calcInvoicing() {
    const data = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53,
    }

    const total = Object.values(data).reduce((acc, currentValue) => acc + currentValue, 0)
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]} representa ${((data[keys[i]] / total) * 100).toFixed(2)}%`)
    }
    console.log('Total:', total)
}
calcInvoicing()
