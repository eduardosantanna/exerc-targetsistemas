function invertString(str) {
    const strArray = str.split('')
    let stringReverse = []

    for (let i = strArray.length - 1; i >= 0; i--) {
        stringReverse.push(strArray[i])
    }
    console.log('Normal:', strArray.toString().replaceAll(',', ''))
    console.log('Inverso:', stringReverse.toString().replaceAll(',', ''))
}
invertString('target sistemas')