'use client';

import { queryParams } from '@/constants';
import { useScrollThreshold } from '@/hooks';
import { airCraftTypes, certifications, etopsRaiting, ilsCategory, noiseStage } from '@/config';
import {
  Button,
  FilterLayout,
  SearchCheckbox,
  SearchMultiSelect,
  SearchParamsInput,
  SearchSelectClient,
} from '@/components';
import { airCraftTypes, certifications, etopsRaiting, ilsCategory, noiseStage } from '@/config';

import { getStyles } from './styles';

export interface SideFilterProps {
  className?: string;
  type?: 'standard' | 'portal';
  onFind?: () => void;
}

export const SideFilter = ({ className, onFind, type = 'standard' }: SideFilterProps) => {
  const isFixed = useScrollThreshold(220);

  const styles = getStyles({ isFixed, className, type });

  return (
    <>
      <div className={styles[type] || ''}>
        <SearchMultiSelect
          options={airCraftTypes}
          placeholder="enter"
          label="Aircraft types"
          queryName={queryParams.aircraftTypes}
        />

        <FilterLayout />

        <SearchSelectClient
          options={certifications}
          placeholder="enter"
          label="Certifications"
          queryName={queryParams.certifications}
        />

        <SearchSelectClient
          label="ETOPS"
          options={etopsRaiting}
          placeholder="enter"
          queryName={queryParams.etops}
        />
        <SearchParamsInput
          type="number"
          placeholder="enter"
          label="Max age, years"
          queryName={queryParams.maxAge}
        />

        <SearchSelectClient
          options={noiseStage}
          placeholder="enter"
          label="Max noise level"
          queryName={queryParams.maxNoiseLevel}
        />

        <SearchSelectClient
          placeholder="enter"
          label="ILS Category"
          options={ilsCategory}
          queryName={queryParams.ilsCategory}
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
