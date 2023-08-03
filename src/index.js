const calcular = document.querySelector("#button")
const monto = document.querySelector("#monto")
const comisionExchange = document.querySelector("#comision")
const comisionOntop = 1.54
const comisionOnTopUSD = 6

async function getDolarCCL() {
  try {
    const response = await fetch(
      "https://mercados.ambito.com//dolarrava/cl/variacion",
      { method: "GET" }
    )
    var data = await response.json()
    var dolarCCL = parseFloat(data.compra.replace(",", "."))
    let montoACambiar = parseFloat(monto.value)
    var totalOntop = (montoACambiar - comisionOntop - comisionOnTopUSD) * dolarCCL * 0.89
    if (!montoACambiar || Number.isNaN(montoACambiar) || montoACambiar < 20) {
      document.querySelector("#total-ontop").innerText = `
      El monto minimo para transferir desde Ontop es $20`
      return null
    }
    document.querySelector("#total-ontop").innerText = `
              Dolar CCL = $${dolarCCL}
              TOTAL = $${new Intl.NumberFormat().format(totalOntop.toFixed(2))} ARS
              Estarias cambiando a = $${(
        totalOntop / montoACambiar
      ).toFixed(2)}
              `
  } catch (error) {
    console.log(error)
  }
}

async function getDolarCrypto() {
  try {
    const response = await fetch(
      `https://criptoya.com/api/lemoncash/USDC`,
      { method: "GET" }
    )
    var data = await response.json()
    var montoACambiar = parseFloat(monto.value)
    const comisionCrypto = montoACambiar * 0.012 < 20 ? montoACambiar * 0.012 : 20
    var totalLemon = (
      parseFloat(data.totalBid) *
      (montoACambiar - comisionCrypto)
    )
    if (!montoACambiar || Number.isNaN(montoACambiar) || montoACambiar < 20) {
      document.querySelector("#total-lemon").innerText = `
      El monto minimo para transferir desde Ontop es $20`
      return null
    }
    document.querySelector("#total-lemon").innerText = `
              Dolar Crypto (Final) = $${data.totalBid.toFixed(2)}
              Comision de red BEP-20 = USD$${comisionCrypto}
              TOTAL = $${new Intl.NumberFormat().format(totalLemon.toFixed(2))} ARS
              Estarias cambiando a = $${(
        totalLemon / montoACambiar
      ).toFixed(2)}
              `
  } catch (error) {
    console.log(error)
  }
}

async function getDolarBlue() {
  try {
    const data = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const dolares = await data.json()
    const dolarBlue = dolares.blue.value_avg
    const montoACambiar = parseFloat(monto.value)
    const comisionCrypto = montoACambiar * 0.012 < 20 ? montoACambiar * 0.012 : 20

    const montoMenosComision = montoACambiar - comisionCrypto - (montoACambiar * comisionExchange.value / 100)
    const totalExchange = (dolarBlue * montoMenosComision).toFixed(2)

    if (!montoACambiar || Number.isNaN(montoACambiar) || montoACambiar < 1) {
      document.querySelector("#total-blue").innerText = `
      Monto invalido
      `
      return null
    }
    document.querySelector("#total-blue").innerText = `
    Monto menos comisión: $${montoMenosComision}
    Comision de red BEP-20 = USD$${comisionCrypto}
    Dolar Blue promedio compra/venta = $${dolarBlue}
    TOTAL = $${new Intl.NumberFormat().format(totalExchange)} ARS
    Estarias cambiando a = $${(totalExchange / montoACambiar).toFixed(2)}
    `
  } catch (error) {
    console.log(error)
  }
}

calcular.addEventListener("click", function (e) {
  e.preventDefault()
  getDolarCCL()
  getDolarCrypto()
  getDolarBlue()
})

comisionExchange.addEventListener("change", function (e) {
  e.preventDefault()
  getDolarBlue()
})