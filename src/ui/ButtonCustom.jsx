import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { blue } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

export default function ButtonCustom({text,evento}) {
  return (
    
      <ColorButton variant="contained" onClick={evento}>{text}</ColorButton>
    
   
  );
}