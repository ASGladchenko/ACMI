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
