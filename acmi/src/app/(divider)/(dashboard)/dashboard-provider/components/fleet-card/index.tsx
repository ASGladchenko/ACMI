'use client';

import { useState } from 'react';

import { cn } from '@/utils';
import { Cross, Edit, Save } from '@/assets/svg';
import {
  Button,
  Switcher,
  FleetInput,
  ISelectOption,
  FleetCheckbox,
  FleetIlsSelect,
  FleetDatePicker,
  FleetETOPSSelect,
  FleetNoiseSelect,
  FleetAirportSelect,
  FleetAircraftTypeSelect,
} from '@/components';

import { initialLayout } from './layout-block/mock';
import { LayOutItem, LayoutBlock, SetLayOutProps } from './layout-block';

interface FleetCardProps {
  id: string;
  onSave: () => void;
  isLoading?: boolean;
  onDecline: () => void;
}

export const FleetCard = ({ isLoading, id, onSave, onDecline }: FleetCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const [msn, setMsn] = useState('');
  const [iosa, setIosa] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [ilsOption, setILSOption] = useState<number | undefined>(1);
  const [option, setOption] = useState<number | undefined>(undefined);
  const [etopsOption, setEtopsOption] = useState<number | undefined>(4);
  const [airportOption, setAirportOption] = useState<ISelectOption | null>(null);
  const [noiseStageOption, setNoiseStageOption] = useState<number | undefined>(3);
  const [layout, setLayout] = useState<Record<string, LayOutItem>>(initialLayout);

  const [isEdited, setIsEdited] = useState(false);

  const miniBlockClass = cn('flex flex-col w-[calc((100%-16px)/3)]');

  const handleChangeLayout = ({ key, type, value }: SetLayOutProps) => {
    setLayout((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [type]: value,
      },
    }));
  };

  console.log({ isLoading });

  return (
    <div className="border-gray-light shadow-sm-black flex w-full flex-col gap-4 rounded-[15px] border px-8 py-5 max-[968px]:px-4 max-[768px]:gap-2">
      <div className="flex justify-between gap-7 max-[968px]:flex-col-reverse max-[968px]:gap-2">
        <FleetAircraftTypeSelect
          selected={option}
          isDisabled={!isEdited}
          error={!option ? 'error' : undefined}
          onChange={(option) => setOption(option)}
        />

        <div className="ml-auto flex gap-7 max-[968px]:max-w-max">
          <p className="font-inter text-blue-deep text-[16px] font-bold">Active</p>

          <Switcher isActive={isActive} onClick={(isActive) => setIsActive(isActive)} />
        </div>
      </div>

      <div className="flex justify-between max-[768px]:flex-col">
        <FleetInput
          head
          label="MSN :"
          value={msn}
          type="number"
          onChange={setMsn}
          disabled={!isEdited}
          error={!msn ? 'error' : undefined}
          className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
        />

        <FleetInput
          head
          value={msn}
          label="Reg #:"
          onChange={setMsn}
          disabled={!isEdited}
          className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
        />

        <FleetDatePicker
          initialDate={date}
          onChange={setDate}
          isDisabled={!isEdited}
          portalId="fleet-datepicker"
          className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
        />
      </div>

      <div className="flex justify-between max-[968px]:flex-wrap">
        <div className={cn(miniBlockClass, 'gap-2 max-[968px]:w-full')}>
          <FleetAirportSelect
            isDisabled={!isEdited}
            selectedOption={airportOption}
            onChange={(option) => setAirportOption(option)}
          />

          <FleetInput
            decimal
            value={msn}
            type="number"
            onChange={setMsn}
            label="MTOW, kg:"
            disabled={!isEdited}
            error={msn.length < 3 ? 'Min 3 symbols' : undefined}
          />

          <FleetInput
            label="Thrust, kn:"
            value={msn}
            type="number"
            onChange={setMsn}
            disabled={!isEdited}
            error={msn.length < 3 ? 'Min 3 symbols' : undefined}
          />

          <FleetCheckbox checked={iosa} label="ACT: " onChange={setIosa} isDisabled={!isEdited} />
        </div>

        <div className={cn(miniBlockClass, 'gap-2 max-[768px]:w-full')}>
          <FleetETOPSSelect
            isDisabled={!isEdited}
            selected={etopsOption}
            onChange={(option) => setEtopsOption(option)}
          />

          <FleetNoiseSelect
            isDisabled={!isEdited}
            selected={noiseStageOption}
            onChange={setNoiseStageOption}
          />

          <FleetIlsSelect selected={ilsOption} isDisabled={!isEdited} onChange={setILSOption} />

          <FleetCheckbox
            checked={iosa}
            onChange={setIosa}
            label="Galley ovens: "
            isDisabled={!isEdited}
          />
        </div>

        <div className={cn(miniBlockClass, 'gap-2 max-[768px]:w-full')}>
          <FleetCheckbox checked={iosa} label="IFE:" onChange={setIosa} isDisabled={!isEdited} />

          <FleetCheckbox checked={iosa} label="ISPS:" onChange={setIosa} isDisabled={!isEdited} />

          <FleetCheckbox
            checked={iosa}
            label="Winglets/Sharklets:"
            onChange={setIosa}
            isDisabled={!isEdited}
          />
          <FleetCheckbox
            checked={iosa}
            label="Galleys:"
            onChange={setIosa}
            isDisabled={!isEdited}
          />
        </div>
      </div>

      <LayoutBlock id={id} setLayout={handleChangeLayout} layout={layout} isDisabled={!isEdited} />

      <div className="flex items-center justify-end gap-2">
        {isEdited && (
          <>
            <Button
              className="max-w-max"
              onClick={() => {
                onDecline();
                setIsEdited(false);
              }}
            >
              <Cross className="h-4 w-4 text-red-400" />
            </Button>

            <Button className="max-w-max" onClick={onSave}>
              <Save className="h-5 w-5 text-green-400" />
            </Button>
          </>
        )}

        {!isEdited && (
          <Button className="max-w-max" onClick={() => setIsEdited(!isEdited)}>
            <Edit className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};
