import React from 'react';

const leftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-5  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 text-secondary sm:flex-row">
          <a
            href="https://www.linkedin.com/in/azadeh-galidari/"
            target="_blank"
          >
            <i class="ri-linkedin-fill "></i>
          </a>
          <a href="https://github.com/devgirlpro" target="_blank">
            <i class="ri-github-fill "></i>
          </a>
          <a href="">
            <i class="ri-mail-send-fill "></i>
          </a>
          <a href="">
            <i class="ri-phone-fill "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-secondary sm:hidden"></div>
      </div>
    </div>
  );
};

export default leftSider;