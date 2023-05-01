import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';




function BasicSelect({getBorn}) {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const [validations, setValidations] = useState(true);

  

  const handleChangeMonth = (event) => {setMonth(event.target.value); };
  const handleChangeyear = (event) => { setYear(event.target.value);};
  const handleChangeDay = (event) => { setDay(event.target.value);};


    // console.log(event.target.value)
    // if (event.target.value !== 0 && 
    //   event.target.value !== NaN &&
    //   event.target.value > 0){ 
      //   }else{
    //     setYear("hola"); 
    //   }
    
    function range(start, stop) {
      let arr = [];
      for (let i = start; i < stop; i ++) {
        arr.push(i);
      }
      return arr;
    }
    const days = range(1, 32)
  

  return (
    <Box >
        {/* //---------------month------------------------ */}
        <FormControl sx={{ minWidth: 120 }} >
        <InputLabel >Month</InputLabel>
        <Select 
          value={month}
          label="month"
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
      {/* //---------------day------------------------ */}
      </FormControl>
        <FormControl sx={{ minWidth: 120 }} >
        <InputLabel >Day</InputLabel>
        <Select 
          value={day}
          label="day"
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
      <TextField label="Year" variant="outlined" onChange={handleChangeyear}/>
      <Button onClick={()=> getBorn()}>send</Button>
    </Box>
  );
}

//console.log(fechaActual - year, day, month)
function Appage() {
  const [date, setDate] = useState('');
  let fechaActual = new Date();
  const getBorn = (validations, year, month, day) => { setDate()};

  return (
    <div className="App">
      <BasicSelect getBorn={getBorn} />
      <div>Tu edad es de: {date}</div>
    </div>
  );
}

export default Appage;
