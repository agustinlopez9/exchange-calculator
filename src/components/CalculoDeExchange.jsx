import { useEffect, useState } from "react"
import { Button, Flex, Paper, Text } from "@mantine/core"

const CalculoDeExchange = ({ cambio, descontarComisiones }) => {
  const { lemon, cambioBlue } = cambio
  return (
    <Flex justify="center" gap="md" wrap="wrap" w="100%" maw="1024px">
      <Paper align="center" shadow="sm" radius="lg" p="xl" w="100%" miw="300px" maw="504px">
        <Text c="teal" ta="center">
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
      <Paper align="center" shadow="sm" radius="lg" p="xl" w="100%" miw="300px" maw="504px">
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
    </Flex>
  )
}
export default CalculoDeExchange
