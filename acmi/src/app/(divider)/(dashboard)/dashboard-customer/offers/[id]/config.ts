export const getInitialValues = () => {
  return {
    fhFc: '',
    minGBH: '',
    operator: '',
    position: '',
    perDiem: null,
    airportTo: [],
    estimatedBH: '',
    positioning: null,
    additionalRequest: '',
    airportFrom: 'LCA, Larnaca',
    dates: {
      from: new Date(),
      to: new Date(),
    },
  };
};

export const getOfferInitial = () => {
  return {
    guaranteedBh: 0,
    overTimeBh: 0,
    estimatedPrice: 0,
    positioningPrice: 0,
    perDiem: 0,
    responseAdditionalRequest: '',
    totalPrice: 0,
  };
};
