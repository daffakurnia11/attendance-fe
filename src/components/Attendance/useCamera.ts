import { photoAtom } from "@/utils/atoms";
import { useSetAtom } from "jotai";
import React from "react";

export const useCamera = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [cameraError, setCameraError] = React.useState<string | null>(null);
  const setPhoto = useSetAtom(photoAtom);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setCameraError("Failed to access the camera.");
      console.error("Error accessing camera:", err);
    }
  };

  React.useEffect(() => {
    startCamera();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        const width = 300;
        const height =
          (videoRef.current.videoHeight / videoRef.current.videoWidth) * width;

        canvasRef.current.width = width;
        canvasRef.current.height = height;

        context.drawImage(videoRef.current, 0, 0, width, height);

        const base64String = canvasRef.current.toDataURL("image/jpeg", 0.7);
        setPhoto(base64String);
      }
    }
  };

  return { videoRef, canvasRef, cameraError, takePhoto, startCamera };
};
