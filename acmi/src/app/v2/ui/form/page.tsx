'use client';

import { Form, Formik } from 'formik';

import { Button } from '@/shared/ui';
import { SelectAirportField, SelectDictionaryField, MultiSelectDictionaryField } from '@/entities';
import {
  InputField,
  CheckboxField,
  SwitcherField,
  TextAreaField,
  DatePickerField,
  MultiSelectField,
} from '@/shared/lib';

const options = [
  { id: 'Tag1', label: 'tag1' },
  { id: 'Tag2', label: 'tag2' },
];

export default function Page() {
  return (
    <Formik
      initialValues={{ name: '', login: '', pass: '' }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="bg-accent-light mx-auto flex w-full max-w-[600px] flex-col gap-2 rounded-2xl p-4">
        <SwitcherField name="isWide" styleType="body" />
        <SwitcherField name="someSwitch" />
        <MultiSelectDictionaryField name="certifications" dictionaryKey="certifications" />
        <MultiSelectDictionaryField name="ils" dictionaryKey="ils" />

        <SelectDictionaryField name="noise" dictionaryKey="noise" />

        <InputField disabled name="name" placeholder="Name" />
        <InputField name="login" placeholder="Login" />
        <InputField name="pass" placeholder="Password" type="password" />

        <MultiSelectField name="tags" options={options} />

        <CheckboxField name="agree" label="I agree to the terms and conditions" />
        <CheckboxField name="gender" type="radio" value="male" label="Male" />
        <CheckboxField name="gender" type="radio" value="female" label="Female" />

        <DatePickerField name="date" />

        <SelectAirportField name="airport" />

        <TextAreaField
          maxLength={12}
          name="description"
          label="Description"
          placeholder="Enter description"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
