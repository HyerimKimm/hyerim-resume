import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { data } from '../types/data';
import { getResumeDatas } from '../service/resumeApi';

export const useResumeQuery = () => {
  const { id } = useParams();

  return useQuery<data>({
    queryKey: ['resume'],
    queryFn: () => getResumeDatas({ id: id }).then((res) => res.result),
  });
};
