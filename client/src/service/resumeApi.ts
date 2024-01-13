import { AxiosResponse } from 'axios';
import { hyerimHttp } from './hyerimHttp';
import { hyerimAxiosResponse } from '../types/data';

type getResumeDatasPropsType = {
  id: string | undefined;
};

export const getResumeDatas = (
  params: getResumeDatasPropsType
): Promise<hyerimAxiosResponse> => {
  return hyerimHttp.get(`/resume/${params.id}`);
};
