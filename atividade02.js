const isAdulto = idade => idade >= 18

    console.log(`Idade: `)
    console.log(isAdulto(67))

const getAreaQuadrado = lado => lado*lado

    console.log(`Área: `)
    console.log(getAreaQuadrado(5))

const formatarReal = valor => `R$${valor.toFixed(2)}`

    console.log(`Real: `)
    console.log(formatarReal(150))