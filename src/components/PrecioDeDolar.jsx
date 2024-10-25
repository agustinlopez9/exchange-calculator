import { Paper, Text } from "@mantine/core"

const PrecioDeDolar = ({ dolarBlue, dolarCCL }) => {
  const dolares = [
    {
      title: "Dolar Blue",
      compra: dolarBlue.compra,
      venta: dolarBlue.venta,
      theme: "blue",
    },
    {
      title: "Dolar CCL",
      compra: dolarCCL.compra,
      venta: dolarCCL.venta,
      theme: "teal",
    },
  ]

  return (
    <Paper shadow="sm" radius="lg" p="xl" miw="20rem" mih="320px">
      {!!dolarBlue && !!dolarCCL && dolares.map((dolar) => (
        <>
          <Text c={dolar.theme} ta="center">
            {dolar.title}:
          </Text>
          <>
            <p>
              <b>Compra:</b> ${parseFloat(dolar.compra.toFixed(2)).toLocaleString()}
            </p>
            <p>
              <b>Venta:</b> ${parseFloat(dolar.venta.toFixed(2)).toLocaleString()}
            </p>
          </>
        </>
      ))}
    </Paper>
  )
}
export default PrecioDeDolar
