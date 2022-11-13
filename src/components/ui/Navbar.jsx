
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Outlet, Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
                <RouterLink to='/'>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Next |</Typography>
                        <Typography sx={{ ml: 0.5 }}>OpenCV</Typography>
                    </Link>
                </RouterLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    
                    <RouterLink to='/face-detected'>
                        <Link>
                            <Button>Face-Detected</Button>
                        </Link>
                    </RouterLink>
                    
            </Box>


            <Box flex={ 1 } />

            <Button>
                Menú
            </Button>

        </Toolbar>
        <Outlet />
    </AppBar>
  )
}
