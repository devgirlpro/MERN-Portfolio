import React from 'react';

const leftSider = () => {
  return (
    <div className='fixed left-0 bottom-0 px-5 sm:hidden'>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 text-secondary">
          <i class="ri-linkedin-fill "></i>
          <i class="ri-github-fill "></i>
          <i class="ri-mail-send-fill "></i>
          <i class="ri-phone-fill "></i>
        </div>
        <div className="w-[1px] h-32 bg-secondary"></div>
      </div>
    </div>
  );
};

export default leftSider;
