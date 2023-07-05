import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <div>
      <nav class="navbar" style={{backgroundColor:'#007bff'}}>
        <a class="navbar-brand"  style={{color:'white'}}>STUDENT MANAGEMENT</a>
      </nav>
    </div>

  );
}
