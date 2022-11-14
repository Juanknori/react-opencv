import React from 'react'
import { Link, Typography, Button, Box } from '@mui/material'
import { MainLayout } from '../components/layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
        <Typography variant='h1' component='h1'>React</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>OpenCV</Typography>

        <Box
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          justifyContent='center'
          alignItems='center'
          className='fadeIn'
        >
          <Typography>Detector de rostros</Typography>
          <Link href='/face-detected' ml={2}>
            <Button 
              size='medium' 
              sx={{ 
                  backgroundColor: '#1E1E1E', 
                  color: '#fff', 
                  ":hover": {
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    color: 'rgba(0,0,0,0.5)',
                    transition: 'all 0.3s ease-in-out'
                  }
              }}
            >
              FaceDetector
            </Button>
          </Link>
        </Box>

    </MainLayout>
  )
}

export default Home