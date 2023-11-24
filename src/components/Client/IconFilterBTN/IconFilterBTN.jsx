import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

export default function IconFilterBTN({handleChangeTableView, filter, isDisable}) {
  return (
      <IconButton
          disabled={isDisable}
          onClick={handleChangeTableView}
          className='table-icon-btn'
      >
        {filter ? <FilterListIcon /> : <FilterListOffIcon />}
      </IconButton>
  );
}