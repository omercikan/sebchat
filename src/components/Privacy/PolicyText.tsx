import React from "react";

const PolicyText: React.FC<{ policyContent: string }> = ({ policyContent }) => {
  return <p className="mb-5 text-sm text-[#0F1828]">{policyContent}</p>;
};

export default PolicyText;
