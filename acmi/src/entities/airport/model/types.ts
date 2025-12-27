import { SelectOption, LoadingStatus } from '@/shared/types';

export type AirportDTO = {
  code: string;
  name: string;
};
export type State = {
  items: SelectOption[];
  error: string | null;
  status: LoadingStatus;
};

export type AirportOptionsResponse = {
  airports: AirportDTO[] | null;
};
