import { useState, useEffect } from "react"
import { Flex, Loader, MantineProvider, Notification } from "@mantine/core"
import "@mantine/core/styles.css"
import { fetchDolarBlue, fetchDolarCCL, getDolares } from "./services/fetchDolares"
import { calcularLemon, calcularBlue } from "./services/conversion"
import { Monto, Dolares, Exchange } from './components/index'
import "./App.css"

function App() {
  const [valorBlue, setValorBlue] = useState(0)
  const [valorCCL, setValorCCL] = useState(0)
  const [monto, setMonto] = useState(0)
  const [comision, setComision] = useState(0)
  const [cambio, setCambio] = useState({})
  const [descontarComisiones, setDescontarComisiones] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const calcularCambio = async () => {
    setLoading(true)
    try {
      if (monto > 0) {
        const { ccl, dolarBlue } = await getDolares()
        setValorBlue(dolarBlue)
        setValorCCL(ccl)
        const lemonCash = await calcularLemon(monto, descontarComisiones)
        const cambioBlue = await calcularBlue(monto, comision, dolarBlue.compra, descontarComisiones)
        setCambio({
          lemon: lemonCash,
          cambioBlue: cambioBlue,
        })
      } else {
        setError("El monto debe ser mayor a 0")
      }
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    const refreshDolares = async () => {
      try {
        const { ccl, dolarBlue } = await getDolares()
        setValorBlue(dolarBlue)
        setValorCCL(ccl)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    refreshDolares()
  }, [])

  return (
    <MantineProvider>
      <Monto
        setMonto={setMonto}
        setComision={setComision}
        calcularCambio={calcularCambio}
        setDescontarComisiones={setDescontarComisiones}
      />
      {error && (
        <Notification onClose={() => setError(null)} maw="1024px" mt="xl" m="auto" color="red" title="Error">
          {error}
        </Notification>
      )}
      <Flex gap="md" direction="row" p="xs" my="xl" justify="center" align="center" wrap="wrap">
        {loading ? (
          <Loader size={30} />
        ) : (
          <>
            <Dolares dolarBlue={valorBlue} dolarCCL={valorCCL} />
            <Exchange cambio={cambio} descontarComisiones={descontarComisiones} />
          </>
        )}
      </Flex>
    </MantineProvider>
  )
}

export default App
