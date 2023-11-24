import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useSelector} from "react-redux";
import TableCardList from '../TableCard/TableCardList';

export default function TableList({ type }) {
    const {tools} = useSelector(state => state.tableReducer);
    const selectedTools = tools.filter(el => el.selected)

    return (
    <Box className='table' >
      <Grid container display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={24}>
        {selectedTools.map((el, i) => {
          return (
            <Grid gridColumn={`span 12`} key={el.id} className='grid-table-item'>
              <TableCardList card={el} type={type}/>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}