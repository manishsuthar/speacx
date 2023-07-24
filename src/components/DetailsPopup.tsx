import { ResultResponse } from '@/types/ResultResponse';
import moment from 'moment';
import React from 'react';

export const DetailsPopup = ({
  data,
  onClose,
}: {
  data: ResultResponse;
  onClose: () => void;
}) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => onClose()}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  {data.capsule_serial}
                </h4>
                <div>
                  Status
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-2">
                    {data.status}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500 mb-5 mt-5">
                  {data.details}
                </p>
                {data.missions.length && (
                  <div className="text-gray-500">
                    Missions
                    {data.missions.map((e) => (
                      <span
                        key={e.name}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-2"
                      >
                        {e.name} : {e.flight}
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-4 text-sm pb-2">
                  Launch On :{' '}
                  {data.original_launch
                    ? moment(data.original_launch).format('MM-DD-YYYY')
                    : '-'}
                </div>
                <div className="pt-4 text-sm pb-2">
                  Reuse Count : {data.reuse_count}
                </div>
                <div className="pt-4 text-sm pb-2">Type : <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-2">{data.type}</span></div>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-gray-600 rounded-md outline-none ring-offset-2 ring-gray-600 focus:ring-2"
                    onClick={() => onClose()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
