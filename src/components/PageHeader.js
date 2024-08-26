import React from "react";

function PageHeader({ text, heading }) {
  return (
    <div className="my-16 w-full text-center">
      {text && <span className="text-violet-400 font-bold">{text}</span>}
      <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">
        {heading}
      </h2>
    </div>
  );
}

export default PageHeader;
