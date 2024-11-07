import { useEffect, useState } from "react"
import { Button, Flex, Paper, Text } from "@mantine/core"

const CalculoDeExchange = ({ cambio, descontarComisiones }) => {
  const { cambioBlue, cambioExchanges } = cambio
  return (
    <Flex justify="center" gap="md" wrap="wrap" w="100%" maw="1024px">
      <Paper align="center" shadow="sm" radius="md" p="xl" w="100%" miw="300px" maw="504px">
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
      {cambioExchanges.map((exchange) => (
        <Paper align="center" shadow="sm" radius="md" p="xl" w="100%" miw="300px" maw="504px">
          <Text c={exchange.color} ta="center">
            Cambio {exchange.nombre}:
          </Text>
          {exchange && (
            <>
              <p>Cotizacion: ${exchange.cotizacion}</p>
              <p>Total en USDT: ${exchange.totalEnUSDT}</p>
              <p>Total en pesos: ${exchange.totalEnPesos}</p>
            </>
          )}
        </Paper>
      ))}
    </Flex>
  )
}
export default CalculoDeExchange
