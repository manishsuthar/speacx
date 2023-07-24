import { ResultResponse } from '@/types/ResultResponse';
import moment from 'moment';
import React from 'react';

export const ResultCard = ({
  result,
  onDetailsClick,
}: {
  result: ResultResponse;
  onDetailsClick: (arg: ResultResponse) => void;
}) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{cursor:'pointer'}}
      onClick={() => onDetailsClick(result)}
    >
      <div>
        <img
          className="m-auto"
          style={{ height: '200px' }}
          src={`/rockets/${result.img}`}
          alt="Sunset in the mountains"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">
          Capsule Serial : {result.capsule_serial}
        </div>
        <div>
          Status
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-2">
            {result.status}
          </span>
        </div>
      </div>
      <div className="px-6 pt-4 text-sm pb-2">
        Launch On :{' '}
        {result.original_launch
          ? moment(result.original_launch).format('MM-DD-YYYY')
          : '-'}
      </div>
    </div>
  );
};
