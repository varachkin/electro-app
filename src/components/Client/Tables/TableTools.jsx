import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TableCard from '../TableCard/TableCard';

export default function TableTools({ type, tools }) {
  const gridTableTemplate = (type.view === 'row') ? '12' : '4';
  
  return (
    <Box className='table' >
      <Grid container display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={24}>
        {tools.map((el) => {
          return (
            <Grid gridColumn={`span ${gridTableTemplate}`} key={el.id} className='grid-table-item'>
              <TableCard card={el} type={type.view} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}