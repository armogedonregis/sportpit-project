import Image from 'next/image';

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="grid grid-cols-2 gap-[5px] grid-rows-[auto] items-start justify-start">
            {images.map((image, index) => (
                <div 
                    key={index}
                    className="relative"
                >
                    <Image
                        src={image}
                        alt={`Product view ${index + 1}`}
                        width={325}
                        height={444}
                        className="object-cover w-full"
                    />
                </div>
            ))}
        </div>
    );
}