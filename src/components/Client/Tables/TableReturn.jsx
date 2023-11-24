import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import TableCardReturnList from '../TableCard/TableCardReturnList';
import SubTitle from '../SubTitle/SubTitle';
import { Box } from '@mui/material';


export default function TableReturn({ type }) {

  const { toolsList } = useSelector(state => state.userReducer);
  return (
    <>
    
      
    
      <Grid container display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={24}>

        {toolsList.map((el, i) => {
          return (
            <Grid gridColumn={`span 12`} key={i} className='grid-table-item'>
              <TableCardReturnList card={el} type={type} />
            </Grid>
          )
        })}
      </Grid>
    </>

  );
}