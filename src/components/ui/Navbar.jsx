import { useContext } from 'react';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Outlet, Link as RouterLink } from "react-router-dom";
import { UiContext } from '../../context/ui';

export const Navbar = () => {

    const { toggleSideMenu } = useContext( UiContext );

  return (
    <AppBar>
        <Toolbar>
                <RouterLink to='/'>
                    <Link display='flex' alignItems='center' underline='none'>
                        <Typography variant='h6'>Next |</Typography>
                        <Typography sx={{ ml: 0.5 }}>OpenCV</Typography>
                    </Link>
                </RouterLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    
                    <RouterLink to='/face-detected'>
                        <Link underline='none'>
                            <Button>Face-Detected</Button>
                        </Link>
                    </RouterLink>
                    
            </Box>


            <Box flex={ 1 } />

            <Button
                onClick={ toggleSideMenu }
            >
                Menu
            </Button>

        </Toolbar>
        <Outlet />
    </AppBar>
  )
}
