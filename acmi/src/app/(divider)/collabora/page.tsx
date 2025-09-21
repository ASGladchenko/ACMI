import { Comp } from './comp';

export default async function CollaboraTest() {
  const cfi = await fetch(
    'https://wopi.acmi.direct/wopi/files/dGVzdHVzZXIvdGVzdGZpbGUub2R0?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ0ZXN0dXNlciIsInVzZXJuYW1lIjoiVGVzdCBVc2VyIiwid29waXVzZXIiOiJUZXN0IFVzZXIhdGVzdHVzZXIiLCJ1c2VydHlwZSI6InJlZ3VsYXIiLCJmaWxlbmFtZSI6InRlc3R1c2VyL3Rlc3RmaWxlLm9kdCIsImZpbGVpZCI6ImRHVnpkSFZ6WlhJdmRHVnpkR1pwYkdVdWIyUjAiLCJ2aWV3bW9kZSI6IlZJRVdfTU9ERV9SRUFEX1dSSVRFIiwiZm9sZGVydXJsIjoiIiwiZW5kcG9pbnQiOiIvdG1wL3dvcGktc3RvcmFnZSIsImFwcG5hbWUiOiJDb2xsYWJvcmEiLCJhcHBlZGl0dXJsIjoiIiwiYXBwdmlld3VybCI6IiIsInRyYWNlIjoibWFudWFsLXRva2VuIiwiZXhwIjoxNzg5NjczNzcxLCJpc3MiOiJjczNvcmc6d29waXNlcnZlcjozLjAuMCJ9.-G4T-WkqdPqnqYZZvy6eDr6xARszCyG80elatOxpQto'
  ).then((res) => res.json());

  const base = 'https://collabora.acmi.direct/browser/dist/cool.html';
  const iframeSrc = base + cfi.HostEditUrl;

  console.log({ cfi, iframeSrc });

  return (
    <div className="h-[600px] w-[100%]">
      <iframe
        src={iframeSrc}
        allowFullScreen
        title="Collabora"
        referrerPolicy="no-referrer"
        allow="clipboard-read; clipboard-write"
        style={{ width: '100%', height: '100%', border: 0 }}
      />
      <Comp />
    </div>
  );
}
