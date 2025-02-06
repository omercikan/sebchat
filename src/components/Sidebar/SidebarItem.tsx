import React from "react";

type SidebarItemProps = {
  item: React.ReactNode;
  text?: string;
  keyword?: string;
  onClick?: () => void;
  className?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  text,
  keyword,
  className,
  ...props
}) => {
  return (
    <React.Fragment>
      <div className="text-center flex flex-col not-first:mt-4 max-md:not-first:mt-0">
        <li
          className={`p-2 rounded-md cursor-pointer w-12 max-md:w-10 h-12 max-md:h-10 grid place-content-center text-[28px] transition duration-500 ${
            keyword === text
              ? "bg-[#375FFF] text-white shadow shadow-[#375FFF]"
              : "bg-[#F8FAFC] text-[#979797] shadow shadow-[#F6F5F5]"
          } ${className || ""}`}
          {...props}
        >
          {item}
        </li>

        <span className="text-white text-xs max-md:text-[10px] mt-2">{text}</span>
      </div>
    </React.Fragment>
  );
};

export default SidebarItem;
