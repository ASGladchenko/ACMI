'use client';

import { queryParams } from '@/constants';
import { useILSCategoryDictionary } from '@/hooks';

import { SearchSelectClient } from '../select-client/search-select-client';

export const SelectILSCategory = () => {
  const { ilsCategory } = useILSCategoryDictionary();

  return (
    <SearchSelectClient
      keyName="value"
      options={ilsCategory.map((item) => ({
        value: item.id,
        text: item.category,
      }))}
      placeholder="enter"
      label="ILS Category"
      queryName={queryParams.ilsCategory}
    />
  );
};
