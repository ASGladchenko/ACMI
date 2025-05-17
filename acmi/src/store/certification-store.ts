import { create } from 'zustand';

interface CertificationType {
  id: number;
  certification: string;
}

type CertificationsState = {
  certifications: CertificationType[];
  setCertifications: (certifications: CertificationType[]) => void;
  getCertifications: () => CertificationType[];
};

export const useCertificationsStore = create<CertificationsState>((set, get) => ({
  certifications: [],
  setCertifications: (certifications: CertificationType[]) => {
    set({ certifications });
  },
  getCertifications: () => get().certifications,
}));
