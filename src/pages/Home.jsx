import React from 'react'
import { Typography } from '@mui/material'
import { MainLayout } from '../components/layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
        <Typography variant='h1' component='h1'>React</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>OpenCV</Typography>
    </MainLayout>
  )
}

export default Home