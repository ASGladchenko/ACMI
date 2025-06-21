export const getInitialValues = ({
  airport,
  dates,
}: {
  airport: string;
  dates: [string | null, string | null];
}) => {
  return {
    operator: '',
    position: '',
    fhFc: '',
    minGBH: '',
    perDiem: '',
    estimatedBH: '',
    airportTo: [],
    additionalRequest: '',
    positioning: '',

    dates: {
      from: dates[0] ? new Date(Number(dates[0])) : null,
      to: dates[1] ? new Date(Number(dates[1])) : null,
    },
    airportFrom: airport,
  };
};
