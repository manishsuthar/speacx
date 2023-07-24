import React from 'react';

export const Banner = () => {
  return (
    <section className="mb-fluid-lg relative pb-fluid-lg bg-thd-color-violet-20 relative">
      <div className="pt-fluid-sm thd-container-max-inner gap-fluid-sm grid grid-cols-1 relative z-10 lg:grid-cols-2 mt-6">
        <div className="bg-thd-color-violet-20 px-fluid-base flex flex-col h-full justify-center items-start mb-fluid-sm lg:mb-0 lg:pl-0 text-center">
          <div className="grid gap-4 place-content-center banner-text-width">
            <h2 className="">To advance the future</h2>
          </div>
        </div>
        <div className="px-fluid-base lg:px-0 lg:m-auto">
          <div className="grid gap-4 place-content-center">
            <img
              alt="alt"
              src="https://thenewscrypto.com/wp-content/uploads/2022/04/SPACEX.jpg"
              decoding="async"
              data-nimg="intrinsic"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
