import { useState, useEffect } from "react"
import { Flex, Loader, MantineProvider, Notification } from "@mantine/core"
import "@mantine/core/styles.css"
import { fetchDolarBlue } from "./services/fetchDolares"
import { calcularBlue, calcularExchanges } from "./services/conversion"
import { Monto, Dolares, Exchange } from "./components/index"
import "./App.css"

function App() {
  const [valorBlue, setValorBlue] = useState(0)
  const [monto, setMonto] = useState(0)
  const [comision, setComision] = useState(0)
  const [cambio, setCambio] = useState(null)
  const [descontarComisiones, setDescontarComisiones] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const calcularCambio = async () => {
    setLoading(true)
    try {
      if (monto > 0) {
        const dolarBlue = await fetchDolarBlue()
        setValorBlue(dolarBlue)
        const cambioBlue = await calcularBlue(monto, comision, dolarBlue.compra, descontarComisiones)
        const cambioExchanges = await calcularExchanges(monto, descontarComisiones)
        setCambio({
          cambioBlue,
          cambioExchanges
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
    const refreshDolar = async () => {
      try {
        const dolarBlue = await fetchDolarBlue()
        setValorBlue(dolarBlue)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    refreshDolar()
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
        <Notification onClose={() => setError(null)} maw="835px" mt="xl" m="auto" color="red" title="Error">
          {error}
        </Notification>
      )}
      <Flex gap="md" direction="column" p="xs" my="xl" mx="auto" justify="center" align="center" wrap="wrap">
        {loading ? (
          <Loader size={30} />
        ) : (
          <>
            <Dolares dolarBlue={valorBlue} />
            {!!cambio && <Exchange cambio={cambio} descontarComisiones={descontarComisiones} />}
          </>
        )}
      </Flex>
    </MantineProvider>
  )
}

export default App
