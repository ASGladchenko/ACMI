'use client';

import { useRef, useState } from 'react';

import { Form, Formik } from 'formik';

import { cn } from '@/utils';
import { Edit, Save, Cross } from '@/assets/svg';
import { useCertificationsStore } from '@/store';
import { useOutsideDatePickerClick } from '@/hooks';
import {
  Modal,
  Button,
  BtnColorType,
  FieldFleetInput,
  FieldFleetSelect,
  FieldFleetAirport,
  FieldFleetCheckbox,
  FieldFleetSwitcher,
  FieldFleetDatePicker,
  FieldFleetLayoutBlock,
  FieldFleetMultiSelect,
} from '@/components';

import { FleetCardFormValues } from '../types';
import { adaptCertifications } from './helpers';
import { useUpdateAircraft } from './useUpdateAircraft';
import { NormalizedAircraftFleet } from '../../../types';
import { serializeAirCraftFleet } from '../../../serialize';
import { getInitialValues, validationSchema } from './config';

interface FleetCardProps {
  id: string;
  initialState: NormalizedAircraftFleet;
}

export const FleetCard = ({ id, initialState }: FleetCardProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const refResetForm = useRef<() => void>(null);
  const certifications = useCertificationsStore((s) => s.certifications);

  const [isOpen, setIsOpen] = useState(false);

  const [isEdited, setIsEdited] = useState(false);

  const onSuccess = () => {
    setIsEdited(false);
    setIsOpen(false);
  };

  const { isLoading, updateAircraft } = useUpdateAircraft({ onSuccess });

  useOutsideDatePickerClick(() => {
    if (isEdited) {
      setIsOpen(true);
    }
  }, [ref]);

  const onDeclineChanges = () => {
    refResetForm.current?.();
    setIsOpen(false);
    setIsEdited(false);
  };

  const onSubmit = async (values: FleetCardFormValues) => {
    const preparesData = serializeAirCraftFleet(values);

    await updateAircraft(id, preparesData);
  };

  const onDecline = (resetForm: () => void) => {
    resetForm();
  };

  const initialValues = getInitialValues(initialState);

  const miniBlockClass = 'flex flex-col w-[calc((100%-16px)/3)]';

  return (
    <Formik
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ resetForm, values }) => {
        refResetForm.current = resetForm;

        return (
          <>
            <Form
              ref={ref}
              className="border-gray-light shadow-sm-black flex w-full flex-col gap-4 rounded-[15px] border px-8 py-5 max-[968px]:px-4 max-[768px]:gap-2"
            >
              <div className="flex justify-between gap-7 max-[968px]:flex-col-reverse max-[968px]:gap-2">
                <FieldFleetSelect
                  isDisabled
                  label="Type :"
                  name="aircraftType"
                  typeFleet="aircraftTypes"
                  className="min-w-0 shrink-1"
                />

                <div className="ml-auto flex gap-7 max-[968px]:max-w-max">
                  <p className="font-inter text-blue-deep text-[16px] font-bold">Active</p>

                  <FieldFleetSwitcher id={id} name="isActive" disabled={!isEdited} />
                </div>
              </div>

              <div className="flex justify-between max-[768px]:flex-col">
                <FieldFleetInput
                  head
                  disabled
                  name="msn"
                  label="MSN :"
                  type="number"
                  className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
                />

                <FieldFleetInput
                  head
                  disabled
                  name="reg"
                  label="Reg #:"
                  className="w-[calc((100%-16px)/3)] max-[768px]:w-full"
                />

                <FieldFleetDatePicker
                  name="date"
                  isDisabled
                  label="Manufactured:"
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

                  <FieldFleetCheckbox
                    label="All male crew: "
                    name="all_male_crew"
                    isDisabled={!isEdited}
                  />
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

                  <FieldFleetCheckbox name="galleys" label="Galley ovens:" isDisabled={!isEdited} />

                  <FieldFleetCheckbox
                    name="dangerous"
                    label="Dangerous goods:"
                    isDisabled={!isEdited}
                  />
                </div>

                <div className={cn(miniBlockClass, 'gap-2 max-[768px]:w-full')}>
                  <FieldFleetCheckbox name="ife" label="IFE:" isDisabled={!isEdited} />

                  <FieldFleetCheckbox name="isps" label="ISPS:" isDisabled={!isEdited} />

                  <FieldFleetCheckbox name="wifi" label="WiFi:" isDisabled={!isEdited} />

                  <FieldFleetCheckbox name="iosa" label="IOSA:" isDisabled={!isEdited} />

                  <FieldFleetCheckbox
                    name="sharklets"
                    isDisabled={!isEdited}
                    label="Winglets/Sharklets:"
                  />
                </div>
              </div>

              <div className="flex w-full gap-2">
                <span className="font-roboto text-gray-dark pl-1 text-[18px] font-bold">
                  Engines:
                </span>
                <span className="text-gray-dark shrink-0 font-bold">{values.engines}</span>
              </div>

              <FieldFleetMultiSelect
                label="Certifications:"
                isDisabled={!isEdited}
                name="certifications_id"
                className="w-[unset] max-w-full min-w-0 shrink-1"
                options={adaptCertifications(certifications)}
              />

              <FieldFleetLayoutBlock name="layoutValues" id={id} isDisabled={!isEdited} />

              <div className="flex items-center justify-end gap-2">
                {isEdited && (
                  <>
                    <Button
                      type="button"
                      className="max-w-max"
                      loading={isLoading}
                      onClick={() => {
                        onDecline(resetForm);
                        setIsEdited(false);
                      }}
                    >
                      <Cross className="h-4 w-4 text-red-400" />
                    </Button>

                    <Button className="max-w-max" type="submit" loading={isLoading}>
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
            </Form>

            <Modal isOpen={isOpen}>
              <div className="flex w-[540px] flex-col gap-5 rounded-xl bg-white p-6 text-center max-[780px]:w-[300px]">
                <h2 className="text-blue-dark text-lg font-semibold">
                  Are you sure you want to undo the changes ?
                </h2>

                <div className="flex w-full gap-4">
                  <Button
                    buttonType="outline"
                    onClick={onDeclineChanges}
                    colorType={BtnColorType.RED}
                  >
                    Yes
                  </Button>

                  <Button onClick={() => setIsOpen(false)} colorType={BtnColorType.GREEN}>
                    No
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        );
      }}
    </Formik>
  );
};
