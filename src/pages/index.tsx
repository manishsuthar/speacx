import { DetailsPopup } from '@/components/DetailsPopup';
import { Results } from '@/components/Results';
import { SeachForm } from '@/components/SearchForm';
import { ResultResponse } from '@/types/ResultResponse';
import React, { useState } from 'react';

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [detailsView, setDetailsView] = useState<ResultResponse | null>(null);

  const onSearch = async (params: {
    status: string;
    originalLaunch: string;
    launchType: string;
  }) => {
    let url = new URL('https://api.spacexdata.com/v3/capsules');

    if (params.launchType) {
      url.searchParams.append('launchType', params.launchType);
    }
    if (params.originalLaunch) {
      url.searchParams.append('originalLaunch', params.originalLaunch);
    }
    if (params.status) {
      url.searchParams.append('status', params.status);
    }

    const requestOptions = {
      method: 'GET',
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let rndInt = 1;
        const data = JSON.parse(result);
        data.forEach((element: ResultResponse) => {
          element['img'] = `${rndInt}.png`;
          rndInt++;
          if (rndInt === 15) rndInt = 1;
        });
        setSearchResult(data);
      })
      .catch((error) => console.log('error', error));
  };

  const onDetailsClick = (viewItem: ResultResponse) => {
    console.log(viewItem, '----');
    setDetailsView(viewItem);
  };

  return (
    <div>
      <SeachForm onSearch={onSearch} />
      <Results searchResult={searchResult} onDetailsClick={onDetailsClick} />
      {detailsView && (
        <DetailsPopup data={detailsView} onClose={() => setDetailsView(null)} />
      )}
    </div>
  );
}
