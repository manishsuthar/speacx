import React, { useState } from 'react';

export const SeachForm = ({
  onSearch,
}: {
  onSearch: (arg: {
    status: string;
    originalLaunch: string;
    launchType: string;
  }) => void;
}) => {
  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [launchType, setLaunchType] = useState('');
  return (
    <section className="mb-fluid-lg relative pb-fluid-lg bg-thd-color-violet-20 relative">
      <div className="pt-fluid-sm thd-container-max-inner gap-fluid-sm grid grid-cols-1 relative z-10 lg:grid-cols-2 mt-6">
        <div className="search-form-input mt-6 mb-6 mx-auto">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Status
            </span>
            <div className="relative">
              <select
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 text-gray-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                // className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="retired" selected={status === 'retired'}>
                  Retired
                </option>
                <option value="unknown" selected={status === 'unknown'}>
                  Unknown
                </option>
                <option value="active" selected={status === 'active'}>
                  Active
                </option>
                <option value="destroyed" selected={status === 'destroyed'}>
                  Destroyed
                </option>
              </select>
            </div>
          </label>
        </div>
        <div className="search-form-input mt-6 mb-6 mx-auto">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Original Launch
            </span>
            <input
              type="text"
              value={originalLaunch}
              onChange={(e) => setOriginalLaunch(e.target.value)}
              name="original_launch"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-gray-700 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Type..."
            />
          </label>
        </div>
      </div>
      <div className="pt-fluid-sm thd-container-max-inner gap-fluid-sm grid grid-cols-1 relative z-10 lg:grid-cols-2 mt-6">
        <div className="search-form-input mt-6 mb-6 mx-auto">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Type
            </span>
            <input
              type="text"
              value={launchType}
              onChange={(e) => setLaunchType(e.target.value)}
              name="type"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-gray-700 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Type..."
            />
          </label>
        </div>
        <div className=" mt-6 mb-6 mx-auto">
          <button
            onClick={() => onSearch({ status, originalLaunch, launchType })}
            className="search-form-input hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 search-button"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
