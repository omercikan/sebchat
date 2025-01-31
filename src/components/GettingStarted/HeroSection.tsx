import React from "react";
import ConnectStart from "../../assets/images/connect_start.png";

const HeroSection: React.FC = () => {
  return (
    <figure>
      <img
        src={ConnectStart}
        alt="Baslarken"
        className="w-[325px] max-md:w-[300px] max-sm:w-[250px] mx-auto pointer-events-none mb-10"
      />
      <figcaption className="text-2xl max-[500px]:text-xl font-medium">
        Sevdiklerinizle dünyanın
        <br /> her köşesinden anında bağlantı kurun.
      </figcaption>
    </figure>
  );
};

export default HeroSection;
