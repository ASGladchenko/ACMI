export const getInitialValues = ({
  airports,
  dates,
}: {
  airports: string;
  dates: [string | null, string | null];
}) => {
  return {
    operator: '',
    position: '',
    fhFc: '',
    minGBH: '',
    perDiem: '',
    estimatedBH: '',
    airportTo: '',
    additionalRequest: '',
    positioning: '',
    datesFrom: dates[0] ? new Date(Number(dates[0])).toLocaleDateString() : null,
    datesTo: dates[1]
      ? new Date(Number(dates[1])).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      : null,
    airportFrom: airports,
  };
};
