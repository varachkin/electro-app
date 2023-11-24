import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    textAlign: 'center',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
}));

export default function GridButtons({ handleTypeNum }) {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    return (
        <Box sx={{ padding: '4rem', width: '85%' }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 3 }} >
                {values.map((el, index) => (
                    <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                        <Item sx={{ backgroundColor: '#ffffff' }}>
                            <Button sx={{
                                width: '100%',
                                height: '100%',
                                color: 'rgba(0, 0, 100, 0.671)',
                                borderRadius: '50%',
                                fontSize: {
                                    "xs": 25,
                                    "sm": 25,
                                    "md": 25,
                                    "lg": 25,
                                    "xl": 25
                                },
                                fontWeight: '800'
                            }}
                                onClick={handleTypeNum}
                            >
                                {el}
                            </Button>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}