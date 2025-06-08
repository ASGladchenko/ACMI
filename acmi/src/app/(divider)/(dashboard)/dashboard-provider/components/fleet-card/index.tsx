'use client';

import { useState } from 'react';
import { Form, Formik } from 'formik';

import { cn } from '@/utils';
import { Edit, Save, Cross } from '@/assets/svg';
import {
  Button,
  Switcher,
  ISelectOption,
  FleetDatePicker,
  FieldFleetInput,
  FieldFleetSelect,
  FleetAirportSelect,
  FieldFleetCheckbox,
} from '@/components';

import { initialValues } from './config';
import { initialLayout } from './layout-block/mock';
import { LayOutItem, LayoutBlock, SetLayOutProps } from './layout-block';

interface FleetCardProps {
  id: string;
  isLoading?: boolean;
}

export const FleetCard = ({ isLoading, id }: FleetCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoadItem, setIsLoadItem] = useState(false);

  const [date, setDate] = useState<Date | null>(null);

  const [airportOption, setAirportOption] = useState<ISelectOption | null>(null);

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

  const onSubmit = (values: typeof initialValues) => {
    console.log({ isLoading });

    setIsLoadItem(true);
    console.log('Saving changes...', values);

    setTimeout(() => {
      setIsLoadItem(false);
    }, 1000);
  };

  const onDecline = () => {
    console.log('Changes declined, resetting to initial state...');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnMount>
      <Form>
        <div className="border-gray-light shadow-sm-black flex w-full flex-col gap-4 rounded-[15px] border px-8 py-5 max-[968px]:px-4 max-[768px]:gap-2">
          <div className="flex justify-between gap-7 max-[968px]:flex-col-reverse max-[968px]:gap-2">
            <FieldFleetSelect
              label="Type :"
              name="aircraftType"
              isDisabled={!isEdited}
              typeFleet="aircraftTypes"
            />

            <div className="ml-auto flex gap-7 max-[968px]:max-w-max">
              <p className="font-inter text-blue-deep text-[16px] font-bold">Active</p>

              <Switcher isActive={isActive} onClick={(isActive) => setIsActive(isActive)} />
            </div>
          </div>

          <div className="flex justify-between max-[768px]:flex-col">
            <FieldFleetInput
              head
              name="msn"
              label="MSN :"
              type="number"
              disabled={!isEdited}
              className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
            />

            <FieldFleetInput
              head
              name="reg"
              label="Reg #:"
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

              <FieldFleetInput
                decimal
                name="mtow"
                type="number"
                label="MTOW, kg:"
                disabled={!isEdited}
              />

              <FieldFleetInput
                name="thrust"
                type="number"
                label="Thrust, kn:"
                disabled={!isEdited}
              />

              <FieldFleetCheckbox label="ACT: " name="act" isDisabled={!isEdited} />
            </div>

            <div className={cn(miniBlockClass, 'gap-2 max-[768px]:w-full')}>
              <FieldFleetSelect
                name="etops"
                label="ETOPS :"
                typeFleet="etops"
                isDisabled={!isEdited}
              />

              <FieldFleetSelect
                name="noiseStage"
                label="Noise Stage :"
                isDisabled={!isEdited}
                typeFleet="noiseStage"
              />

              <FieldFleetSelect
                name="ilsCategory"
                label="ILS Category :"
                isDisabled={!isEdited}
                typeFleet="ilsCategory"
              />
              <FieldFleetCheckbox
                name="galleyOvens"
                label="Galley ovens: "
                isDisabled={!isEdited}
              />
            </div>

            <div className={cn(miniBlockClass, 'gap-2 max-[768px]:w-full')}>
              <FieldFleetCheckbox name="ife" label="IFE:" isDisabled={!isEdited} />

              <FieldFleetCheckbox name="isps" label="ISPS:" isDisabled={!isEdited} />

              <FieldFleetCheckbox
                name="sharklets"
                isDisabled={!isEdited}
                label="Winglets/Sharklets:"
              />
              <FieldFleetCheckbox name="galleys" label="Galleys:" isDisabled={!isEdited} />
            </div>
          </div>

          <LayoutBlock
            id={id}
            layout={layout}
            isDisabled={!isEdited}
            setLayout={handleChangeLayout}
          />

          <div className="flex items-center justify-end gap-2">
            {isEdited && (
              <>
                <Button
                  className="max-w-max"
                  type="button"
                  onClick={() => {
                    onDecline();
                    setIsEdited(false);
                  }}
                >
                  <Cross className="h-4 w-4 text-red-400" />
                </Button>

                <Button className="max-w-max" type="submit" loading={isLoadItem}>
                  <Save className="h-5 w-5 text-green-400" />
                </Button>
              </>
            )}

            {!isEdited && (
              <Button className="max-w-max" onClick={() => setIsEdited(!isEdited)} type="button">
                <Edit className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};
