export const comisiones = {
  bep20: 1,
  trc20: 3,
  ontop: 1.2,
}

export const calcularLemon = async (monto, descontarComisiones) => {
  try {
    const response = await fetch("https://criptoya.com/api/lemoncash/USDT/ARS/1")

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    const montoMenosComision = descontarComisiones ? monto - comisiones.bep20 - monto * (comisiones.ontop / 100) : monto
    return {
      compra: parseFloat(data.totalBid.toFixed(2)).toLocaleString(),
      totalEnUSDT: montoMenosComision.toLocaleString(),
      totalEnPesos: parseFloat((data.totalBid * montoMenosComision).toFixed(2)).toLocaleString(),
    }
  } catch (error) {
    throw error
  }
}

export const calcularBlue = async (monto, comision, dolarBlue, descontarComisiones) => {
  const montoMenosComision = (descontarComisiones ? monto - comisiones.trc20 - monto * (comisiones.ontop / 100) : monto) - monto * (comision / 100)
  return {
    compra: parseFloat(dolarBlue.toFixed(2)).toLocaleString(),
    totalEnDolares: parseFloat(montoMenosComision.toFixed(2)).toLocaleString(),
    totalEnPesos: parseFloat((dolarBlue * montoMenosComision).toFixed(2)).toLocaleString(),
  }
}
