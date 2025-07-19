import { CertificationType } from '@/store/certification-store';

export const adaptCertifications = (certifications: CertificationType[]) => {
  return certifications.map((cert) => ({
    value: cert.id,
    text: cert.certification,
  }));
};
