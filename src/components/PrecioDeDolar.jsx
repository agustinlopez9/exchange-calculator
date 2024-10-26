import { Divider, Flex, Paper, Text } from "@mantine/core"
import { comisiones } from "../services/conversion"

const PrecioDeDolar = ({ dolarBlue }) => {
  return (
    dolarBlue && (
      <Paper shadow="sm" radius="lg" p="xl" w="100%" maw="1024px">
        <Flex direction="row" justify="center" gap="lg">
          <Flex direction="column" justify="center" w="100%">
            <Text c="blue" ta="center">
              Dolar Blue:
            </Text>
            <Flex direction="row" justify="space-around" mx="auto" gap="md" maw="600px">
              <p>
                <b>Compra:</b>
                <br />${parseFloat(dolarBlue.compra.toFixed(2)).toLocaleString()}
              </p>
              <p>
                <b>Venta:</b>
                <br />${parseFloat(dolarBlue.venta.toFixed(2)).toLocaleString()}
              </p>
            </Flex>
          </Flex>
          <Divider position="right" orientation="vertical" />
          <Flex direction="column" w="100%" justify="center">
            <Text c="red" ta="center" my="sm">
              Comisiones:
            </Text>
            <div>
              <Text ta="center">Gas fee BEP-20: {`$${comisiones.bep20}`}</Text>
              <Text ta="center">Gas fee TRC-20: {`$${comisiones.trc20}`}</Text>
              <Text ta="center">Comision Ontop: {`${comisiones.ontop}%`}</Text>
            </div>
          </Flex>
        </Flex>
      </Paper>
    )
  )
}
export default PrecioDeDolar
