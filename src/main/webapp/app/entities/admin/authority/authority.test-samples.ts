import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd1c0397e-ad61-414e-bd5b-02b85fd52d0d',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f99569cf-8950-43bf-a2cf-f42e8347664f',
};

export const sampleWithFullData: IAuthority = {
  name: '70cb308e-9857-4509-80b9-b06c0fa31a98',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
