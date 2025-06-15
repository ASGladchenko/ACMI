'use client';

import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';

import { cn } from '@/utils';
import { Edit, Save, Cross } from '@/assets/svg';
import { useOutsideDatePickerClick } from '@/hooks';
import {
  Button,
  FieldFleetInput,
  FieldFleetSelect,
  FieldFleetAirport,
  FieldFleetCheckbox,
  FieldFleetSwitcher,
  FieldFleetDatePicker,
  FieldFleetLayoutBlock,
} from '@/components';

import { getInitialValues, validationSchema, initialValuesMock } from './config';

interface FleetCardProps {
  id: string;
  isLoading?: boolean;
}

export const FleetCard = ({ isLoading, id }: FleetCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refResetForm = useRef<() => void>(null);

  const [isLoadItem, setIsLoadItem] = useState(false);

  const [isEdited, setIsEdited] = useState(false);

  useOutsideDatePickerClick(() => {
    if (refResetForm.current && isEdited) {
      onDecline(refResetForm.current);
      setIsEdited(false);
    }
  }, [ref]);

  const onSubmit = (values: typeof initialValues) => {
    console.log({ isLoading });

    setIsLoadItem(true);
    console.log('Saving changes...', values);

    setTimeout(() => {
      setIsLoadItem(false);
      setIsEdited(false);
    }, 1000);
  };

  function onDecline(resetForm: () => void) {
    resetForm();
  }

  const initialValues = getInitialValues(initialValuesMock);

  const miniBlockClass = cn('flex flex-col w-[calc((100%-16px)/3)]');

  return (
    <Formik
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ resetForm }) => {
        refResetForm.current = resetForm;

        return (
          <Form>
            <div
              ref={ref}
              className="border-gray-light shadow-sm-black flex w-full flex-col gap-4 rounded-[15px] border px-8 py-5 max-[968px]:px-4 max-[768px]:gap-2"
            >
              <div className="flex justify-between gap-7 max-[968px]:flex-col-reverse max-[968px]:gap-2">
                <FieldFleetSelect
                  label="Type :"
                  name="aircraftType"
                  isDisabled={!isEdited}
                  typeFleet="aircraftTypes"
                />

                <div className="ml-auto flex gap-7 max-[968px]:max-w-max">
                  <p className="font-inter text-blue-deep text-[16px] font-bold">Active</p>

                  <FieldFleetSwitcher name="isActive" disabled={!isEdited} />
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

                <FieldFleetDatePicker
                  name="date"
                  label="Manufactured:"
                  isDisabled={!isEdited}
                  portalId="fleet-datepicker"
                  className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
                />
              </div>

              <div className="flex justify-between max-[968px]:flex-wrap">
                <div className={cn(miniBlockClass, 'gap-2 max-[968px]:w-full')}>
                  <FieldFleetAirport
                    name="ops"
                    label="Base :"
                    isDisabled={!isEdited}
                    placeholderEmpty="No available options"
                    placeholderFilter="Enter to start search"
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

              <FieldFleetLayoutBlock name="layoutValues" id={id} isDisabled={!isEdited} />

              <div className="flex items-center justify-end gap-2">
                {isEdited && (
                  <>
                    <Button
                      className="max-w-max"
                      type="button"
                      onClick={() => {
                        onDecline(resetForm);
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
                  <Button
                    className="max-w-max"
                    onClick={() => setIsEdited(!isEdited)}
                    type="button"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
