import { hyerimHttp } from 'service/hyerimHttp';
import { data } from 'types/data';

type getResumeDatasPropsType = {
  id: string | undefined;
};

export type hyerimAxiosResponse = {
  code: number;
  isSuccess: boolean;
  message: string;
  result: data;
};

export const getResumeDatas = (
  params: getResumeDatasPropsType
): Promise<hyerimAxiosResponse> => {
  return hyerimHttp.get(`/resume/${params.id}`);
};
