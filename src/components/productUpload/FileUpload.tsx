"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { UploadIcon } from "../../../public/assets/icons";

const FileUpload = ({ name = "file", onFilesSelected }: { name?: string, onFilesSelected?: (files: any) => void }): JSX.Element => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      if (onFilesSelected) {
        onFilesSelected(files[0]);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      //setSelectedFiles(Array.from(files));
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      if (onFilesSelected) {
        onFilesSelected(files[0]);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
        ref={inputRef}
        accept="image/*"
        name={name}
      />
      {selectedFiles.length > 0
        ? <div className="flex flex-col xl:gap-6 lg:gap-[15px] gap-3 w-full">
            {selectedFiles.map((file, index) =>
              <div
                key={index}
                className="flex flex-col xl:gap-6 lg:gap-[15px] gap-3 w-full"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  width={222}
                  height={221}
                  alt="product-img"
                  className="object-cover rounded-[7px] w-full xl:h-[180px] lg:h-[130px] md:h-[180px] h-[110px] max-w-full border border-black border-opacity-60"
                />
                <button className="xl:py-[13px] lg:py-[10px] py-2 font-inter text-[#84adfe] xl:text-base lg:text-sm text-xs font-normal w-full rounded-[7px] border border-[#cec1c1]">
                  Upload by this link
                </button>
              </div>
            )}
          </div>
        : <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
            className="flex flex-col items-center xl:gap-6 lg:gap-[15px] gap-3 w-full cursor-pointer"
          >
            <div className="w-full xl:h-[180px] lg:h-[130px] md:h-[180px] h-[110px] flex flex-col items-center justify-center border border-black border-opacity-40 rounded-[7px]">
              <UploadIcon />
              <p className="font-inter text-primary_100 xl:text-base lg:text-sm text-xs font-normal">
                Click to upload or
              </p>
              <p className="font-inter text-dark_500 xl:text-base lg:text-sm text-xs font-normal">
                drag and drop
              </p>
            </div>
            <button className="xl:py-[13px] lg:py-[10px] py-2 font-inter text-[#84adfe] xl:text-base lg:text-sm text-xs font-normal w-full rounded-[7px] border border-[#cec1c1]">
              upload by this link
            </button>
          </div>}
    </div>
  );
};

export default FileUpload;
