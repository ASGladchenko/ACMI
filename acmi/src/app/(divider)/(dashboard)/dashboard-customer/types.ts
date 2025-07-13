export interface RFQCustomerRaw {
  id: number;
  aircraft: {
    type: string;
    msn: string;
    dom: string;
    layout: {
      j_seats: number;
      w_seats: number;
      f_seats: number;
      y_seats: number;
      yj_seats: number;
    };
  };
  rfq_data: {
    date_from: string;
    date_to: string;
  };
  provider: {
    provider_short_name: string;
  };
}
