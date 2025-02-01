import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackToPrevious: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute left-8 top-8 max-sm:left-5 max-sm:top-6"
      onClick={() => navigate("/")}
    >
      <FaChevronLeft
        cursor="pointer"
        color="#F7F7FC"
        className="text-[1.75rem] max-sm:text-xl"
      />
    </div>
  );
};

export default BackToPrevious;
