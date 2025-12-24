'use client';

import { cn } from '@/shared/utils';
import { queryParams } from '@/constants';
import { useScrollThreshold } from '@/hooks';
import {
  Button,
  SelectETOPS,
  FilterLayout,
  SearchCheckbox,
  SelectNoiseStage,
  SearchParamsInput,
  SelectILSCategory,
  SelectAircraftTypes,
  SelectCertification,
} from '@/components';

import { getStyles } from './styles';
import {
  InputQuery,
  SelectQuery,
  CheckboxQuery,
  DatePickerQuery,
  MultiSelectQuery,
} from '@/features';

export interface SideFilterProps {
  className?: string;
  type?: 'standard' | 'portal';
  onFind?: () => void;
}

export const SideFilter = ({ className, onFind, type = 'standard' }: SideFilterProps) => {
  const isScrolled = useScrollThreshold(320);

  const styles = getStyles({ className, type });

  return (
    <div className={styles[type] || ''}>
      <div
        className={cn(
          'flex w-full flex-wrap items-start gap-2',
          isScrolled &&
            'scroll-bar-mini sticky top-[76px] max-h-[calc(100dvh-100px)] shrink-0 overflow-y-auto'
        )}
      >
        <SelectAircraftTypes />
        <MultiSelectQuery dictionaryKey="aircraft" queryKey="aircraft_types" />

        <DatePickerQuery />

        <FilterLayout />

        <SelectCertification />

        <SelectETOPS />

        <SearchParamsInput
          type="number"
          placeholder="enter"
          label="Max age, years"
          queryName={queryParams.maxAge}
        />
        <InputQuery queryKey="economy" />
        <SelectNoiseStage />

        <SelectQuery queryKey="min_approach_cat" dictionaryKey="ils" />
        <SelectILSCategory />

        <CheckboxQuery queryKey="iosa" label="IOSA" />
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
    </div>
  );
};
