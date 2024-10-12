import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10432,
  login: '=5C~|@kW\\^TGG\\6T3vWb\\6co\\vr',
};

export const sampleWithPartialData: IUser = {
  id: 15777,
  login: 'PBh',
};

export const sampleWithFullData: IUser = {
  id: 21197,
  login: '7zy',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
