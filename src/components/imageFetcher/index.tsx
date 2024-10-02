"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchImage, selectImage } from "@/redux/image";

interface IImageFetcher {
    name: string;
    altName: string;
}

interface ImageState {
    url: string | null;
    isLoading: boolean;
    error: string | null;
}

const ImageFetcher: React.FC<IImageFetcher> = ({ name, altName }) => {
    const dispatch = useDispatch<AppDispatch>();

    const imageState: ImageState = useSelector((state: RootState) => selectImage(name)(state)) || {
        url: null,
        isLoading: false,
        error: null,
    };

    const { url, isLoading, error } = imageState;
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const getImage = async () => {
            if (!url) {
                try {
                    await dispatch(fetchImage(name));
                } catch (error) {
                    console.error('Failed to load image', error);
                }
            }
        };

        getImage();
    }, [dispatch, name, url]);

    const handleError = () => {
        setHasError(true);
    };

    const fallbackCharacter = altName.charAt(0).toUpperCase();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="loader border-4 border-t-transparent border-gray-300 rounded-full w-4 h-4 animate-spin"></div>
            </div>
        );
    }

    if (error || hasError) {
        return (
            <div className="flex h-full w-full items-center justify-center p-2 rounded-md bg-primary_100 text-black text-lg font-bold">
                {fallbackCharacter}
            </div>
        );
    }

    return (
        <div className="relative w-full h-full overflow-hidden">
            {url && (
                <Image
                    src={url}
                    alt={altName}
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-xl ${hasError ? 'hidden' : ''}`}
                    onError={handleError}
                />
            )}
        </div>
    );
};

export default ImageFetcher;
