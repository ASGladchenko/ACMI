export interface RFQBlockInitialValues {
  fhFc: string;
  minGBH: string;
  operator: string;
  position: string;
  airportFrom: string;
  airportTo: string[];
  estimatedBH: string;
  additionalRequest: string;
  positioning: { text: string; value: number } | null;
  perDiem: { text: string; value: number } | null;
  dates: {
    from: Date;
    to: Date;
  };
}

export interface RFQBlockProps {
  id: number;
  isEditing?: boolean;
  onSuccessRequest?: () => void;
  initialValues: RFQBlockInitialValues;
}
