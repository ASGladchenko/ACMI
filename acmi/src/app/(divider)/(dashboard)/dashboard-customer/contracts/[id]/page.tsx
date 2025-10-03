import { apiServer } from '@/fetch-request';
import { getErrorMessage } from '@/utils';

export default async function ContractPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let errors;
  let cfi = { HostEditUrl: '' };

  try {
    await apiServer
      .get(`/rfq/contract`, { params: { rfq_id: id } })
      .then(({ data }) => (cfi = data));
  } catch (error) {
    errors = getErrorMessage(error, 'Failed to load contract info, connect support please');
  }

  const base = 'https://collabora.acmi.direct/browser/dist/cool.html';
  const iframeSrc = base + cfi?.HostEditUrl;

  console.log('iframeSrc', iframeSrc, errors);

  return (
    <div className="laptop:px-0 laptop:pr-1 h-[calc(100vh-120px)] w-full px-2">
      <iframe
        src={iframeSrc}
        allowFullScreen
        title="Collabora"
        referrerPolicy="no-referrer"
        allow="clipboard-read; clipboard-write"
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}
