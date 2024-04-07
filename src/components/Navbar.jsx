import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <div className="nav-links">
          <Button color="inherit" component={Link} to="/" className="nav-link">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/employee-form" className="nav-link">
            Employee Form
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
