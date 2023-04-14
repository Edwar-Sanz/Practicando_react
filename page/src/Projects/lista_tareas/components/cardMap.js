import Grid from "@mui/material/Grid";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalCard from "./modal.js";
import { useState} from "react";

function CardMap({ DataList, fnBorrarElemento, setDataList }) {
  const [open, setOpen] = useState(false);
  const [elmt, setElmt] = useState({}); 
  const [idx, setidx] = useState(null); 
  //debugger

  const handleOpen = (index) => {
    const element = DataList[index];
    setElmt(element);
    setidx(index);
    setOpen(true); 
  }
  //debugger
  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = (nuevoElemento) => {
    const a = [...DataList];
    a[idx] = nuevoElemento;
    setDataList(a);
    console.log(DataList, a);
  }


  return DataList.map((elemento, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`k${index}`}>
            <Card sx={{ minWidth: 275 }} key={`k${index}`}>
              <CardContent>
                <div className="card">
                  <Typography
                    className="card_title"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {elemento.title}
                  </Typography>
                  <Typography className="card_msj" variant="body2">
                    {elemento.msj}
                  </Typography>
                  <CardActions>
                    <Button
                      size="small"
                      className="card_button"
                      onClick={() => fnBorrarElemento(DataList, index)}
                    >
                      ❌borrar
                    </Button>
                    <Button
                      size="small"
                      className="card_buttonEdit"
                      onClick={() => handleOpen(index)}
                    >
                      🖊️editar
                    </Button>
                  </CardActions>
                </div>
              </CardContent>
            </Card>
            
            <ModalCard
              index={idx}
              elem={elmt} 
              Open={open}
              isClose={() => handleClose()}
              handleEdit={handleEdit}
            />
          </Grid>
        );
      })}


export default CardMap;
