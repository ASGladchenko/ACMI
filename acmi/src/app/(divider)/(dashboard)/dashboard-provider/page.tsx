import { getErrorMessage } from '@/utils';
import { TitleDB } from '../components';
import { Fleets } from './components';
import { apiServer } from '@/fetch-request';
import { AircraftFleet } from './types';
import { normalizeAircraftFleet } from './normalize';

export default async function ProviderPage() {
  let error;
  let data;

  try {
    const res = await apiServer<AircraftFleet[]>('/aircrafts');

    data = res.data.map((aircraft) => normalizeAircraftFleet(aircraft));
  } catch (err) {
    error = getErrorMessage(err, 'Fleet loading error, connect with us');
  }

  return (
    <section>
      <TitleDB title="Fleet" />

      <Fleets error={error} data={data} />
    </section>
  );
}
