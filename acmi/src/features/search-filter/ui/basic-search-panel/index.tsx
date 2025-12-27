'use client';

import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui';
import { Plane } from '@/shared/assets';

import { InputQuery, SwitcherQuery, DatePickerQuery, MultiSelectQuery } from '../controls';

export const BasicSearchPanel = ({ className }: { className?: string }) => {
  const cln = cn(
    'flex flex-col gap-6.25 p-5 w-full max-w-full bg-white rounded-2xl border border-iron ',
    className
  );

  console.log('Rendering BasicSearchPanel');

  return (
    <div className={cln}>
      <h1 className="font-manrope text-text-primary text-xl leading-[1.4] font-bold">
        Find live, verified ACMI offers
      </h1>

      <div className="flex w-full max-w-full flex-col gap-5">
        <SwitcherQuery queryKey="isWide" styleType="body" />

        <InputQuery
          queryKey="min_pax"
          LeftItem={<Plane className="h-6 w-6 shrink-0" />}
          placeholder="Enter minimum number of passengers"
        />

        <InputQuery
          queryKey="min_pax"
          LeftItem={<Plane className="h-6 w-6 shrink-0" />}
          placeholder="Enter minimum number of passengers"
        />

        <InputQuery
          queryKey="min_pax"
          LeftItem={<Plane className="h-6 w-6 shrink-0" />}
          placeholder="Enter minimum number of passengers"
        />

        <InputQuery
          queryKey="min_pax"
          LeftItem={<Plane className="h-6 w-6 shrink-0" />}
          placeholder="Enter minimum number of passengers"
        />

        <MultiSelectQuery queryKey="aircraft_types" dictionaryKey="aircraft" />

        <DatePickerQuery queryKey="dates" />
      </div>

      <Button className="w-full">Search</Button>
    </div>
  );
};
