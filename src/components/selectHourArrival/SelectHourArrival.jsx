import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";

const StyledBox = styled(Box)`
  color: black;
`;

const StyledSelect = styled(Select)`

`;

export default function SelectHourArrival({hours, date, setDate}) {

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <StyledBox sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Regreso</InputLabel>
        <StyledSelect
        name="date"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Fecha"
          onChange={handleChangeDate}
        >
          {hours
          .map((hour) => (
            <MenuItem key={hour.id} value={hour.id}>
              {hour.arrival_date}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </StyledBox>
  );
}
