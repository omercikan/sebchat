import React from "react";

const PolicyTitle: React.FC<{ policyTitle: string }> = ({ policyTitle }) => {
  return <h2 className="font-medium">{policyTitle}</h2>;
};

export default PolicyTitle;
