import { 
  TableBody, Paper,
  Table, TableContainer, TableHead,
  TableRow, TableCell, Grid
} from "@mui/material";
import { useEffect, useState } from "react";


function ResumenOperacion({result}) {
  const [color, setColor] = useState("")
  useEffect(
    ()=>{
      if (result.profCierre > 0) {
        setColor("lawngreen")
      }else if (result.profCierre < 0) {
        setColor("orangered")
      }
    },[result]
  )


  const variacion = (valAnterior, valActual, prof)=>{
    return `(${(((valActual-valAnterior)/valAnterior)*100).toFixed(2)}%) ${prof.toFixed(2)}`
  }
  
  return (
    <Grid item xs={12} sm={9} md={6} lg={6}>
    <TableContainer component={Paper}  >
        <Table  aria-label="simple table"  size="small" height="360px">
          <TableHead>
            <TableRow >
              <TableCell sx={{fontWeight:600}} > Operación antes del cierre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor de la operacion </TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && result.valOperation.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor actual</TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && result.valActual.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Profit antes del cierre</TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && variacion(result.valOperation, result.valActual, result.profitAntesCierre )}</TableCell>
            </TableRow>
          </TableBody>
          {/* ------------------------------------------------------------------ */}
          <TableHead>
            <TableRow align="center">
              <TableCell sx={{fontWeight:600}}>Operación despues del cierre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Unidades restantes</TableCell>
              <TableCell component="th" scope="row" align="right">{result.unisRestantes}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor unidades restantes</TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && result.valUnisRestantes.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor actual unidades restantes</TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && result.valActualUnisRestantes.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Profit unidades restantes</TableCell>
              <TableCell component="th" scope="row" align="right">{result.ok && result.profUnisRestantes.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow sx={{backgroundColor:color}} >
              <TableCell sx={{fontWeight:600}} component="th" scope="row" align="left">Profit del cierre</TableCell>
              <TableCell sx={{fontWeight:600}} component="th" scope="row" align="right">{result.ok && result.profCierre.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
  );
}

export default ResumenOperacion;