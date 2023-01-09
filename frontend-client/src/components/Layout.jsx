import React from 'react';

const Layout = ({ children }) => {
  return <div className='relative w-full h-screen md:max-w-[768px] md:mx-auto p-2 pt-[60px]'>{children}</div>;
};

export default Layout;
