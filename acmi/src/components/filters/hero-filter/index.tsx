'use client';

import {
  Input,
  Button,
  DateOpsFrom,
  BodySwitcher,
  SelectClient,
  ISelectOption,
} from '@/components';
import { cn } from '@/utils';
import { useFilters } from '@/context';
import { airports } from '@/components/mock';

export interface HeroFilterProps {
  portalId?: string;
  className?: string;
  onFind: () => void;
}

export const HeroFilter = ({ className, portalId, onFind }: HeroFilterProps) => {
  const {
    filter,
    selects,
    setFilter,
    setSelects,
    checkBoxes,
    dateInterval,
    setCheckBoxes,
    setDateInterval,
  } = useFilters();

  const handleSelectChange = (name: string, value: ISelectOption) => {
    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (name: string, value: boolean) => {
    setCheckBoxes({
      ...checkBoxes,
      [name]: value,
    });
  };

  const onHandleFind = () => {
    if (onFind) {
      onFind();
    }
  };

  const cl = cn(
    'bg-white-dark shadow-sm-black flex items-start flex-wrap min-[1360px]:flex-nowrap items-start justify-end gap-2.5 rounded-xl px-2.5 py-4',
    className
  );

  return (
    <div className={cl}>
      <BodySwitcher
        isWide={checkBoxes.isWideBody}
        btnClassName="max-w-full tablet:max-w-max"
        setIsWide={(value) => handleCheckBoxChange('isWideBody', value)}
        className="tablet:-order-2 tablet:max-w-max desktop:order-1 w-full"
      />

      <SelectClient
        label="Ops from"
        options={airports}
        selected={selects.fromLocation}
        onChange={(option) => handleSelectChange('fromLocation', option as ISelectOption)}
        className="laptop:basis-[330px] tablet:-order-0 desktop:order-2 grow-1"
      />
      <Input
        type="number"
        label="Min Pax"
        placeholder="enter"
        value={filter.minPax}
        onChange={(value) => setFilter({ ...filter, minPax: value })}
        className="laptop:max-w-[180px] tablet:max-w-[calc(100%-206px)] tablet:-order-1 desktop:order-3"
      />
      <DateOpsFrom
        portalId={portalId}
        initialEnd={dateInterval[1]}
        initialStart={dateInterval[0]}
        onChange={(dates) => setDateInterval(dates)}
        className="laptop:basis-[380px] tablet:max-w-[calc(100%-190px)] desktop:order-4 grow-1"
      />
      <Button onClick={onHandleFind} className="tablet:max-w-[180px] desktop:order-5">
        Find
      </Button>
    </div>
  );
};
