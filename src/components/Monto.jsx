import { Box, Button, Checkbox, Flex, TextInput, Tooltip } from "@mantine/core"

const Monto = ({ setMonto, setComision, setDescontarComisiones, calcularCambio }) => {
  const handleCalcularCambio = (e) => {
    e.preventDefault()
    calcularCambio()
  }
  return (
    <form onSubmit={handleCalcularCambio}>
      <Box bg="#242424">
        <Flex direction="column" justify="center" align="flex-start" w="100%" maw="750px" mx="auto">
          <Flex wrap="wrap" justify="center" align="flex-end" mx="auto" px="xs" gap="md">
            <Flex wrap="wrap" justify="center" px="xs" gap="md">
              <TextInput
                type="number"
                label={<p style={{ marginBottom: "14px", color: "#fff" }}>Monto:</p>}
                placeholder="Ingrese un monto"
                onChange={(event) => setMonto(parseInt(event.currentTarget.value, 10))}
                w="275px"
              />
              <TextInput
                type="number"
                min={0}
                max={100}
                label={
                  <Flex direction="row" align="flex-end">
                    <p>
                      Comision
                      <Tooltip
                        label="Solo aplica para transferencias a exchange físico."
                        color="blue"
                        events={{ hover: true, focus: true, touch: true }}
                      >
                        <span style={{ color: "#fff", fontStyle: "italic", marginLeft: "0.25rem" }}>(?):</span>
                      </Tooltip>
                    </p>
                  </Flex>
                }
                placeholder="Ingrese el porcentaje"
                onChange={(event) => setComision(event.currentTarget.value)}
                style={{ color: "#fff" }}
                w="275px"
              />
            </Flex>
            <Button type="submit">Calcular</Button>
          </Flex>
          <Flex direction="row" wrap="wrap" align="center">
            <Checkbox
              onChange={(e) => setDescontarComisiones(e.currentTarget.checked)}
              style={{ color: "#fff" }}
              my="md"
              ml="xl"
              label="Descontar comisiones de transferencias crypto"
            />
            <Tooltip
              position="bottom"
              label="Descontar comisiones de ontop y gas fees."
              color="blue"
              events={{ hover: true, focus: true, touch: true }}
            >
              <p style={{ color: "#fff", fontStyle: "italic", marginLeft: "0.25rem", cursor: "default" }}>(?)</p>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </form>
  )
}

export default Monto
