import React, { useState } from 'react';

import { useQuery } from '~/app/hooks';
import { Customer } from '~/app/protocols/Customer';
import { GET_CUSTOMERS } from '~/app/queries/getCustomers';

import PanelForm from './Panel';

function PanelContainer() {
  const [page, setPage] = useState(1);
  const { response, execute, loading } = useQuery<{
    getCustomers: { items: Customer[]; total: number };
  }>({
    query: GET_CUSTOMERS,
    immediate: true,
    useIsLoading: true,
    variables: { page },
  });

  const onRefresh = () => {
    execute({
      page,
    });
  };

  const handlePageChange = (tempPage: number) => {
    setPage(tempPage);
    execute({
      page: tempPage,
    });
  };

  let total = 1;
  if (response.getCustomers?.total) {
    total = Math.ceil(response.getCustomers?.total / 10);
  }

  return (
    <PanelForm
      onRefresh={onRefresh}
      //videos={response.getCustomers?.items}
      isLoading={loading}
      page={page}
      total={total}
      onPageChange={handlePageChange}
    />
  );
}

export default PanelContainer;
