'use client';

import { SelectClient, Checkbox, FilterLayout } from '@/components/';

export const SideFilter = ({}) => {
  return (
    <div className="bg-white-dark flex w-[325px] flex-col gap-1.5 px-2.5 py-4.5">
      <SelectClient
        options={[]}
        selected={null}
        onChange={() => {}}
        placeholder="enter"
        label="Aircraft types"
      />
      <FilterLayout
        values={{ first: '', economy: '', business: '', premiumEconomy: '' }}
        onChange={() => {}}
      />
      <SelectClient
        options={[]}
        selected={null}
        onChange={() => {}}
        placeholder="enter"
        label="Cartifications"
      />

      <SelectClient
        options={[]}
        label="ETOPS"
        selected={null}
        onChange={() => {}}
        placeholder="enter"
      />

      <SelectClient
        options={[]}
        selected={null}
        onChange={() => {}}
        placeholder="enter"
        label="Max age, years"
      />

      <SelectClient
        options={[]}
        selected={null}
        onChange={() => {}}
        placeholder="enter"
        label="Max noise level"
      />

      <SelectClient
        options={[]}
        selected={null}
        onChange={() => {}}
        placeholder="enter"
        label="Min approach cat"
      />

      <Checkbox label="IOSA" subLabel="tick if mandatory" />
      <Checkbox label="ACT" subLabel="tick if mandatory" />
      <Checkbox label="Galley ovens" subLabel="tick if mandatory" />
      <Checkbox label="WiFi" subLabel="tick if mandatory" />
      <Checkbox label="IFE" subLabel="tick if mandatory" />
      <Checkbox label="ISPS" subLabel="tick if mandatory" />
      <Checkbox label="All male crew" subLabel="tick if mandatory" />
      <Checkbox label="Winglets/Sharklets" subLabel="tick if mandatory" />
      <Checkbox label="Dangerous goods certification" subLabel="tick if mandatory" />
    </div>
  );
};
