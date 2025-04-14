'use client';

import React, { useMemo } from 'react';

import {
  Button,
  SearchParamsInput,
  SearchDateOpsFrom,
  SearchBodySwitcher,
  SearchSelectClient,
} from '@/components';
import { queryParams } from '@/constants';
import { airports } from '@/components/mock';

import { getStyles, HeroType } from './styles';

export interface HeroFilterProps {
  type?: HeroType;
  portalId?: string;
  className?: string;
  onFind: () => void;
}

export const HeroFilter = React.memo(
  ({ className, portalId, onFind, type = 'standard' }: HeroFilterProps) => {
    const styles = useMemo(() => getStyles(type, className), [type, className]);

    const onHandleFind = () => {
      if (onFind) {
        onFind();
      }
    };

    return (
      <div className={styles.cl}>
        <SearchBodySwitcher
          className={styles.body}
          btnClassName={styles.bodyBtn}
          queryName={queryParams.isWide}
        />
        <SearchSelectClient
          queryName={queryParams.opsFrom}
          label="Ops from"
          options={airports}
          className={styles.select}
        />

        <SearchParamsInput
          type="number"
          label="Min Pax"
          placeholder="enter"
          className={styles.input}
          queryName={queryParams.minPax}
        />

        <SearchDateOpsFrom
          portalId={portalId}
          className={styles.date}
          queryName={queryParams.dates}
        />

        <Button onClick={onHandleFind} className={styles.button}>
          Find
        </Button>
      </div>
    );
  }
);

HeroFilter.displayName = 'HeroFilter';
