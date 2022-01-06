import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import * as React from 'react';


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  menuItem: {
    marginLeft: theme.spacing(4),
  },
}));

export default function Navbar() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" component="div" className={classes.title}>
            <Link className={classes.menuItem} href="/" passHref>
              My Space
            </Link>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Link className={classes.menuItem} href="/resume" passHref>
              <Button color="inherit" className={classes.menuItem}>
                Resumé
              </Button>
            </Link>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
