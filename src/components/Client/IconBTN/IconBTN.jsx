import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

export default function IconBTN({handleChangeTableView, view, isDisable}) {
  return (
      <IconButton
          disabled={isDisable}
          onClick={handleChangeTableView}
          className='table-icon-btn'
      >
        {view === 'row' ? <GridViewIcon /> : <FormatAlignLeftIcon />}
      </IconButton>
  );
}