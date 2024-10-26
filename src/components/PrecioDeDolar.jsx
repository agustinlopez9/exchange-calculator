import { Flex, Paper, Text } from "@mantine/core"

const PrecioDeDolar = ({ dolarBlue }) => {
  return (
    dolarBlue && (
      <Paper shadow="sm" radius="lg" p="xl" w="100%" maw="1024px">
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
      </Paper>
    )
  )
}
export default PrecioDeDolar
