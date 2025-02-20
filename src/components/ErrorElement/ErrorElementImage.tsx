import React from "react";

type ErrorElementImageProps = {
    src: string;
    alt: string;
    figureClassName?: string
}

const ErrorElementImage: React.FC<ErrorElementImageProps> = ({ src, alt, figureClassName }) => {
  return (
    <figure className={`absolute ${figureClassName || ""}`}>
      <img
        src={src}
        alt={alt}
        className="w-[170px] max-md:w-[150px] max-[430px]:w-[120px]"
      />
    </figure>
  );
};

export default ErrorElementImage;
