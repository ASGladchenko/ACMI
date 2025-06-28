export interface RFQCustomerRaw {
  id: number;
  aircraft?: {
    type?: string;
    msn?: string;
  };
  rfq_data: {
    date_from: string;
    date_to: string;
  };
  provider: {
    provider_short_name: string;
  };
}
