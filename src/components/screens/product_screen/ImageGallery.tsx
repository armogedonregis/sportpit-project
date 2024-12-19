import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  sachet?: boolean;
}

const isVideo = (url: string | undefined) => {
  return url && url.match(/\.(mp4|webm|ogg)$/i) !== null;
};

const MediaElement = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover w-full"
    />
  );
};

export function ImageGallery({ images, sachet }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-[5px]">
      {sachet ? (
        <>
          <div className="relative">
            <Image
              src={images[0]}
              alt="Product view 1"
              width={325}
              height={444}
              className="object-cover w-full"
            />
          </div>
          <div className="relative">
            <Image
              src={images[1]}
              alt="Product view 2"
              width={325}
              height={444}
              className="object-cover w-full"
            />
          </div>

          <div className="relative col-span-2">
            <Image
              src={images[2]}
              alt="Product view 3"
              width={650}
              height={444}
              className="object-cover w-full"
            />
          </div>

          <div className="relative">
            <MediaElement
              src={images[3]}
              alt="Product view 4"
              width={325}
              height={444}
            />
          </div>
          <div className="relative">
            <MediaElement
              src={images[4]}
              alt="Product view 4"
              width={325}
              height={444}
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <Image
              src={images[0]}
              alt="Product view 1"
              width={325}
              height={444}
              className="object-cover w-full"
            />
          </div>
          <div className="relative">
            <Image
              src={images[1]}
              alt="Product view 2"
              width={325}
              height={444}
              className="object-cover w-full"
            />
          </div>

          <div className="relative">
            <Image
              src={images[2]}
              alt="Product view 3"
              width={325}
              height={444}
              className="object-cover w-full"
            />
          </div>
          <div className="relative">
            <MediaElement
              src={images[3]}
              alt="Product view 4"
              width={325}
              height={444}
            />
          </div>

          {images[4] && (
            <div className="relative col-span-2">
              <MediaElement
                src={images[4]}
                alt="Product view 5"
                width={650}
                height={444}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
