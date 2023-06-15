import React, { useState } from 'react';
import { Button, TextField, Menu, MenuItem } from '@material-ui/core';
import CustomTable from '../Table';
import './index.css';

function InsertMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [tableData, setTableData] = useState([]); // Initialize tableData with an empty array

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleInsert = () => {
    const newData = { name, age };
    setTableData([...tableData, newData]);
    setName('');
    setAge('');
    handleClose();
  };

  return (
    <div>
      <div className='centered-container'>
        <div className='container'>
          <Button variant='contained' aria-controls="insert-menu" aria-haspopup="true" onClick={handleClick}>
            Insert Data
          </Button>
          <Menu
            id="insert-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
              />
            </MenuItem>
            <MenuItem>
              <TextField
                label="Age"
                value={age}
                onChange={handleAgeChange}
              />
            </MenuItem>
            <MenuItem>
              <Button onClick={handleInsert} variant="contained" color="primary">
                Insert
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {tableData.length > 0 && <CustomTable data={tableData} />} {/* Render CustomTable only if tableData has items */}
    </div>
  );
}

export default InsertMenu;
