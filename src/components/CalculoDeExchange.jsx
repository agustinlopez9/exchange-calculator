import { useEffect, useState } from "react"
import { Button, Paper, Text } from "@mantine/core"

const CalculoDeExchange = ({ cambio, descontarComisiones }) => {
  const { lemon, cambioBlue } = cambio
  return (
    <>
      <Paper shadow="sm" radius="lg" p="xl" miw="20rem" mih="320px">
        <Text c="blue" ta="center">
          Cambio Lemon Cash:
        </Text>
        {lemon && (
          <>
            <p>Dolar Lemon: ${lemon.compra}</p>
            <p>Total en USDT: ${lemon.totalEnUSDT}</p>
            <p>Total en pesos: ${lemon.totalEnPesos}</p>
          </>
        )}
      </Paper>
      <Paper shadow="sm" radius="lg" p="xl" miw="20rem" mih="320px">
        <Text c="blue" ta="center">
          Cambio Blue:
        </Text>
        {cambioBlue && (
          <>
            <p>Dolar Blue: ${cambioBlue.compra}</p>
            <p>Total en dolares: ${cambioBlue.totalEnDolares}</p>
            <p>Total en pesos: ${cambioBlue.totalEnPesos}</p>
          </>
        )}
      </Paper>
    </>
  )
}
export default CalculoDeExchange
