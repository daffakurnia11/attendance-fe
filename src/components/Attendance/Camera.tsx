import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { useCamera } from "./useCamera";
import { useAtom } from "jotai";
import { photoAtom } from "@/utils/atoms";
import Typography from "../Typography";

export default function Camera() {
  const [photo, setPhoto] = useAtom(photoAtom);
  const { videoRef, canvasRef, cameraError, takePhoto, startCamera } =
    useCamera();

  React.useEffect(() => {
    startCamera();
    setPhoto(null);
  }, []);

  return (
    <div>
      {cameraError ? (
        <div className="h-[150px] flex justify-center items-center">
          <Typography.Text className="text-red-500 text-center">
            {cameraError}
          </Typography.Text>
        </div>
      ) : (
        <>
          {photo ? (
            <>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={photo}
                alt="Captured"
                className="w-full rounded shadow"
              />
              <div className="flex justify-center">
                <Button
                  type="default"
                  className="mt-4 !w-[130px]"
                  onClick={() => {
                    startCamera();
                    setPhoto(null);
                  }}
                >
                  Retake Photo
                </Button>
              </div>
            </>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full rounded shadow"
              />
              <div className="flex justify-center">
                <Button
                  type="default"
                  htmlType="button"
                  className="mt-4 !w-[130px]"
                  onClick={takePhoto}
                >
                  Take Photo
                </Button>
              </div>
            </>
          )}
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </>
      )}
    </div>
  );
}
