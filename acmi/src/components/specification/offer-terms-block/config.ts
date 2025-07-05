import * as Yup from 'yup';

export const offerTermsValidationSchema = Yup.object({
  guaranteedBh: Yup.number().typeError('Must be a number').required('GBH price is required'),
  overTimeBh: Yup.number().typeError('Must be a number').required('Overtime BH price is required'),
  // estimatedPrice: Yup.number()
  //   .typeError('Must be a number')
  //   .required('Estimated price is required'),
  positioningPrice: Yup.number()
    .typeError('Must be a number')
    .required('Positioning price is required'),
  perDiem: Yup.number().typeError('Must be a number').required('Per diem is required'),
  responseAdditionalRequest: Yup.string(),
  // totalPrice: Yup.number().typeError('Must be a number').required('Total price is required'),
});
