import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TableCardCategories from '../TableCard/TableCardCategories';

export default function TableCategories({ categories, type, handleSetFilter }) {
    const gridTableTemplate = (type.view === 'row') ? '12' : '6';

    return (
        <Box className='table' >
            <Grid container display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={24}>
                {categories.map((el, i) => {
                    return (
                        <Grid gridColumn={`span ${gridTableTemplate}`} key={i} className='grid-table-item'>
                            <TableCardCategories card={el} type={type} handleSetFilter={handleSetFilter} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}