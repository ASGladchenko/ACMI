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

export const getOfferInitial = ({
  minGBH,
  estimatedBH,
}: {
  minGBH: string | number;
  estimatedBH: string | number;
}) => {
  return {
    perDiem: '',
    overTimeBh: '',
    totalPrice: '',
    guaranteedBh: '',
    estimatedPrice: '',
    positioningPrice: '',
    responseAdditionalRequest: '',
    minGBH: !Number.isNaN(minGBH) ? Number(minGBH) : 0,
    estimatedBH: !Number.isNaN(estimatedBH) ? Number(estimatedBH) : 0,
  };
};
