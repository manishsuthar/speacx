import React from 'react';
import { ResultCard } from './ResultCard';
import { ResultResponse } from '@/types/ResultResponse';

export const Results = ({
  searchResult,
  onDetailsClick,
}: {
  searchResult: ResultResponse[];
  onDetailsClick: (arg: ResultResponse) => void;
}) => {
  return (
    <div className="mt-12">
      <div className="px-2">
        <div className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {searchResult.map((e: any, i: number) => (
            <ResultCard
              key={`iii${i}`}
              result={e}
              onDetailsClick={onDetailsClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
