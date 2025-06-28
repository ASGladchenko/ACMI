export interface RFQProviderRaw {
  id: number;
  customer: string;
  aircraft?: {
    type?: string;
    msn?: string;
  };
  rfq_data: {
    date_from: string;
    date_to: string;
  };
}
