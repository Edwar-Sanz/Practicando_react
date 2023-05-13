import './Appage.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Grid from "@mui/material/Grid";



let fechaActual = new Date();
function BasicSelect({getBorn}) {
  // ----------- generar lista de dias mes-------------
  function range(start, stop) {
    let arr = [];
    for (let i = start; i < stop; i ++) {
      arr.push(i);
    }
    return arr;
  }
  const days = range(1, 32);
  // ----------- estados-------------
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [dayError, setDayError] = useState(false);
  
  // ----------- manejadores-------------
  const handleChangeMonth = (event) => {setMonth(event.target.value); };
  const handleChangeDay = (event) => { setDay(event.target.value);};
  const handleChangeyear = (event) => {
    if (Number(event.target.value) !== 0 && 
      !isNaN(Number(event.target.value)) &&
      Number(event.target.value) > 0 &&
      Number(event.target.value) <= fechaActual.getFullYear() ){ 
        setYear(Number(event.target.value));
      }else{
      setYear("");
      }
  };

  const handleCalculations = () =>{
    if (month !== "" && day !== "" && year !== "" && year > 99) {
      getBorn(month, day, year) 
      setMonthError(false) 
      setDayError(false) 
      setYearError(false);
    }else if (month === "") {
      setMonthError(true)
    }else if (day === "") {
      setDayError(true)
    }else if (year === "") {
      setYearError(true)
    }
  }

  return (
    <Box >
        {/* //---------------month------------------------ */}
        <FormControl error={monthError} sx={{ width: 190, marginLeft:"5px", marginTop:"5px" }} >
        <InputLabel >Mes</InputLabel>
        <Select 
          value={month}
          label="Mes"
          onChange={handleChangeMonth}
        >
          <MenuItem value={1}>Enero</MenuItem>
          <MenuItem value={2}>Febrero</MenuItem>
          <MenuItem value={3}>Marzo</MenuItem>
          <MenuItem value={4}>Abril</MenuItem>
          <MenuItem value={5}>Mayo</MenuItem>
          <MenuItem value={6}>Junio</MenuItem>
          <MenuItem value={7}>Julio</MenuItem>
          <MenuItem value={8}>Agosto</MenuItem>
          <MenuItem value={9}>Septiembre</MenuItem>
          <MenuItem value={10}>Octubre</MenuItem>
          <MenuItem value={11}>Noviembre</MenuItem>
          <MenuItem value={12}>Diciembre</MenuItem>
        </Select>
      </FormControl>
      {/* //---------------day------------------------ */}
      <FormControl error={dayError} sx={{ width: 190, marginLeft:"5px", marginTop:"5px" }} >
        <InputLabel >Día</InputLabel>
        <Select 
          value={day}
          label="Día"
          onChange={handleChangeDay}
        >
          {
            days.map((element)=>{
              return <MenuItem key={element} value={element}>{element}</MenuItem>
            }
            )
          } 
        </Select>   
      </FormControl>
      {/* //---------------year------------------------ */}
      <TextField error={yearError} sx={{ width: 190, marginLeft:"5px", marginTop:"5px" }} value={year} label="Año" variant="outlined" onChange={handleChangeyear}/>
      <Button variant="contained" sx={{ width: 190, marginLeft:"5px", marginTop:"15px", height:"100%" }} onClick={()=> handleCalculations()}> CALCULAR</Button>
    </Box>
  );
}

//console.log(fechaActual - year, day, month)
function Appage() {
  const [date, setDate] = useState('');
  
  const getBorn = ( month, day, year) => { 
    let born = new Date(`${month}/${day}/${year}`)
    
    let milliseconds = fechaActual-born;
    let years = Math.trunc(milliseconds / (1000*60*60*24*30.4166666666666*12));
    let months = Math.trunc(milliseconds % (1000*60*60*24*30.4166666666666*12) / (1000*60*60*24*30.4166666666666));
    let dias = Math.trunc(((milliseconds % (1000*60*60*24*30.4166666666666*12)) % (1000*60*60*24*30.4166666666666)) / (1000*60*60*24));
    //console.log(years, months, dias)
    setDate(`, ${years} años, ${months} meses, ${dias} días`)
  };

  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={ 10} sm={10} md={6} >
        <h3>Calcular Edad</h3>
        <div className="App" style={{padding:"15px", maxWidth:"700px"}}>
          <BasicSelect getBorn={getBorn} />
          <div style={{marginTop:"50px", fontSize:"22px"}} >Su edad es de{date}</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Appage;
