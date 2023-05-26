import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";

const StyledBox = styled(Box)`
  /* Estilos para Box */
  color: black;
`;

const StyledSelect = styled(Select)`

`;

export default function SelectHourDeparture({hoursDre, dateDre, setDateDre}) {

  const handleChangeDateDre = (event) => {
    setDateDre(event.target.value);
  };

  return (
    <StyledBox sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Salida</InputLabel>
        <StyledSelect
        name="dateDre"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dateDre}
        label="Fecha"
        onChange={handleChangeDateDre}
        >
        {hoursDre
        .map((hour) => (
          <MenuItem key={hour.id} value={hour.id}>
            {hour.departure_date}
          </MenuItem>
        ))}
        </StyledSelect>
      </FormControl>
    </StyledBox>
  );
}
