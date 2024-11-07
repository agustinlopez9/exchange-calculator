export const comisiones = {
  bep20: 1,
  trc20: 3,
  ontop: 1.2,
}

const exchangesACotizar = [
  {
    nombre: "Lemon Cash",
    etiqueta: "lemoncash",
    color: "teal",
  },
  {
    nombre: "Binance",
    etiqueta: "binance",
    color: "yellow",
  },
  {
    nombre: "Fiwind",
    etiqueta: "fiwind",
    color: "cyan",
  },
]

export const calcularExchanges = async (monto, descontarComisiones) => {
  try {
    const response = await fetch("https://criptoya.com/api/USDT/ARS/1")

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    const montoMenosComision = descontarComisiones ? monto - comisiones.bep20 - monto * (comisiones.ontop / 100) : monto

    for (const exchange in exchangesACotizar) {
      const nombreDeExchange = exchangesACotizar[exchange].etiqueta
      exchangesACotizar[exchange].cotizacion = parseFloat(data[nombreDeExchange].totalBid.toFixed(2)).toLocaleString()
      exchangesACotizar[exchange].totalEnUSDT = montoMenosComision.toLocaleString()
      exchangesACotizar[exchange].totalEnPesos = parseFloat(
        (data[nombreDeExchange].totalBid * montoMenosComision).toFixed(2)
      ).toLocaleString()
    }
    return exchangesACotizar
  } catch (error) {
    throw error
  }
}

export const calcularBlue = async (monto, comision, dolarBlue, descontarComisiones) => {
  const montoMenosComision =
    (descontarComisiones ? monto - comisiones.trc20 - monto * (comisiones.ontop / 100) : monto) - monto * (comision / 100)
  return {
    compra: parseFloat(dolarBlue.toFixed(2)).toLocaleString(),
    totalEnDolares: parseFloat(montoMenosComision.toFixed(2)).toLocaleString(),
    totalEnPesos: parseFloat((dolarBlue * montoMenosComision).toFixed(2)).toLocaleString(),
  }
}
