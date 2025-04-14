'use client';

import { queryParams } from '@/constants';
import { options } from '@/components/mock';
import { useScrollThreshold } from '@/hooks';
import {
  Button,
  FilterLayout,
  SearchCheckbox,
  SearchMultiSelect,
  SearchSelectClient,
} from '@/components';

import { getStyles } from './styles';

export interface SideFilterProps {
  className?: string;
  type?: 'standard' | 'portal';
  onFind?: () => void;
}

export const SideFilter = ({ className, onFind, type = 'standard' }: SideFilterProps) => {
  console.log('SideFilter');
  const isFixed = useScrollThreshold(220);

  const styles = getStyles({ isFixed, className, type });

  return (
    <>
      <div className={styles[type] || ''}>
        <SearchMultiSelect
          options={options}
          placeholder="enter"
          label="Aircraft types"
          queryName={queryParams.aircraftTypes}
        />

        <FilterLayout />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Certifications"
          queryName={queryParams.certifications}
        />

        <SearchSelectClient
          label="ETOPS"
          options={options}
          placeholder="enter"
          queryName={queryParams.etops}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Max age, years"
          queryName={queryParams.maxAge}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Max noise level"
          queryName={queryParams.maxNoiseLevel}
        />

        <SearchSelectClient
          options={options}
          placeholder="enter"
          label="Min approach cat"
          queryName={queryParams.minApproachCat}
        />

        <SearchCheckbox
          label="IOSA"
          queryName={queryParams.iosa}
          className={styles.checkboxesHalf}
        />

        <SearchCheckbox className={styles.checkboxesHalf} queryName={queryParams.act} label="ACT" />

        <SearchCheckbox
          label="Galley ovens"
          queryName={queryParams.galley}
          className={styles.checkboxesHalf}
        />

        <SearchCheckbox
          label="WiFi"
          queryName={queryParams.wifi}
          className={styles.checkboxesHalf}
        />

        <SearchCheckbox className={styles.checkboxesHalf} queryName={queryParams.ife} label="IFE" />

        <SearchCheckbox
          label="ISPS"
          queryName={queryParams.isps}
          className={styles.checkboxesHalf}
        />

        <SearchCheckbox
          label="All male crew"
          className={styles.checkBoxFull}
          queryName={queryParams.allMaleCrew}
        />

        <SearchCheckbox
          label="Winglets/Sharklets"
          className={styles.checkBoxFull}
          queryName={queryParams.wingletsSharklets}
        />

        <SearchCheckbox
          className={`${styles.checkBoxFull} min-[600px]:max-w-full`}
          queryName={queryParams.dangerous}
          label="Dangerous goods certification"
        />

        {type === 'portal' && <Button onClick={() => onFind && onFind()}>Find</Button>}
      </div>
    </>
  );
};
