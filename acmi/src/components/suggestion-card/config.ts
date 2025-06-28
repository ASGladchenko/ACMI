interface GetInitialValuesRFQ {
  airport: string;
  dates: [string, string];
  position?: string;
  operator?: string;
}
export const getInitialValues = ({ airport, dates, position, operator }: GetInitialValuesRFQ) => {
  return {
    fhFc: '',
    minGBH: '',
    operator: operator ? operator : 'N/A',
    position: position ? position : 'N/A',
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
