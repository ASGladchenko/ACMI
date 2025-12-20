import { ETOPSDTO, NoiseListDTO, ILSCategoryDTO, AircraftTypeDTO, CertificationDTO } from '..';

export type DictionaryDTOMap = {
  etops: ETOPSDTO;
  noise: NoiseListDTO;
  ils: ILSCategoryDTO;
  aircraft: AircraftTypeDTO;
  certifications: CertificationDTO;
};
