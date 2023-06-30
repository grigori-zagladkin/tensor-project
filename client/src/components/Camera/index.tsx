import React, { useEffect, useRef, useState } from "react";

import styles from "./Camera.module.scss";

// export const getBase64 = (file) => new Promise((resolve, reject) => {

// })

// export const sendResult = ()

interface IProps {
  image: string;
  setImage: (img: string) => void;
}

const CameraComponent: React.FC<IProps> = ({ image, setImage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Ошибка при получении доступа к камере:", error);
      }
    };

    startCamera();

    const handleExtractImage = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;

        const canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

          const imageSrc = canvas.toDataURL();

          setImage(imageSrc);
        }
      }
    };

    const intervalId = setInterval(handleExtractImage, 5000);

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <video ref={videoRef} autoPlay playsInline />
      <div className={styles.cameraImg}>
        <img src={image} alt="фотка" />
      </div>
    </div>
  );
};

export default CameraComponent;
