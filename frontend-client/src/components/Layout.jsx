import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="relative w-full md:max-w-[768px] md:mx-auto p-2 pt-[60px]"
      style={{
        height: `calc(var(--vh, vh) * 100)`,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
