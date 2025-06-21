export const getInitialValues = ({ airport, dates }: { airport: string; dates: [string, string] }) => {
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
    airportFrom: airport,
    dates: {
      from: new Date(Number(dates[0])),
      to: new Date(Number(dates[1])),
    },
  };
};
