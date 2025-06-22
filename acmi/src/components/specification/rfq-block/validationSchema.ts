import * as Yup from 'yup';

export const rfqValidationSchema = Yup.object({
  fhFc: Yup.number().typeError('Must be a number').required('FH/FC is required'),
  minGBH: Yup.number().typeError('Must be a number').required('Minimum GBH is required'),
  airportFrom: Yup.string().required('Airport from is required'),
  airportTo: Yup.array()
    .min(1, 'At least one airport destination is required')
    .required('Airport destination is required'),
  estimatedBH: Yup.number().typeError('Must be a number').required('Estimated BH is required'),
  positioning: Yup.object().required('Positioning is required'),
  perDiem: Yup.object().required('Per diem is required'),
  dates: Yup.object({
    from: Yup.date().required('Date from is required'),
    to: Yup.date().required('Date to is required'),
  }).required('Dates is required'),
});
