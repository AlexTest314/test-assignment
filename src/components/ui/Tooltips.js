import React from "react";

const Tooltips = ({ children }) => {
  return <div className='position absolute left-10 h-6 w-max z-20 bg-black text-base text-white text-clip'>{children}</div>;
};

export default Tooltips;
