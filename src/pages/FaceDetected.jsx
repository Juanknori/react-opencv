import React from 'react'
import Webcam from "react-webcam";
import cv from "@techstark/opencv-js";
import { Grid, Typography } from '@mui/material'
import { MainLayout } from '../components/layouts/MainLayout'
import { loadHaarFaceModels, detectHaarFace } from "../scripts/haarFaceDetection";
import "../styles/index.css";

const FaceDetected = () => {

  const [modelLoaded, setModelLoaded] = React.useState(false);

  React.useEffect(() => {
    loadHaarFaceModels().then(() => {
      setModelLoaded(true);
    });
  }, []);

  const webcamRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const faceImgRef = React.useRef(null);

  React.useEffect(() => {
    if (!modelLoaded) return;

    const detectFace = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;

      return new Promise((resolve) => {
        imgRef.current.src = imageSrc;
        imgRef.current.onload = () => {
          try {
            const img = cv.imread(imgRef.current);
            detectHaarFace(img);
            cv.imshow(faceImgRef.current, img);

            img.delete();
            resolve();
          } catch (error) {
            console.log(error);
            resolve();
          }
        };
      });
    };

    let handle;
    const nextTick = () => {
      handle = requestAnimationFrame(async () => {
        await detectFace();
        nextTick();
      });
    };
    nextTick();
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [modelLoaded]);

  return (
    <MainLayout>
        <Typography variant='h1' component='h1'>FaceDetector</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Utilizando OpenCV</Typography>
        <Typography variant='h2' sx={{ mb: 1 }} 
          display='flex' 
          justifyContent='center' 
          alignItems='center'
        >
          Real-time Face Detection
        </Typography>

        <Grid container>
          <Grid item xs={6} display='flex' justifyContent='center' alignItems='center'>
            <Webcam
              ref={webcamRef}
              className="webcam"
              mirrored
              screenshotFormat="image/jpeg"
            />
          </Grid>
          <Grid item xs={6} display='flex' justifyContent='center' alignItems='center'>
            <img className="inputImage" alt="input" ref={imgRef} />
            <canvas className="outputImage" ref={faceImgRef} />
            {!modelLoaded && <div>Loading Haar-cascade face model...</div>}
          </Grid>
        </Grid>

    </MainLayout>
  )
}

export default FaceDetected