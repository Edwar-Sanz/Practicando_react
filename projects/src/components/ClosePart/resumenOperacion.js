import { 
  TableBody, Paper,
  Table, TableContainer, TableHead,
  TableRow, TableCell
} from "@mui/material";



function ResumenOperacion() {
  return (
    <TableContainer component={Paper} sx={{width:"300px"}} >
        <Table sx={{ minWidth: 250}} aria-label="simple table">
          <TableHead>
            <TableRow align="left">
              <div style={{margin:"15px"}} >Resumen de la operación</div>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor de la operacion </TableCell>
              <TableCell component="th" scope="row" align="right">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Valor actual</TableCell>
              <TableCell component="th" scope="row" align="right">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="left">Profit antes del cierre</TableCell>
              <TableCell component="th" scope="row" align="right">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default ResumenOperacion;