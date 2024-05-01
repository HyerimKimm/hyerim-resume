import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { data } from 'types/data';
import { getResumeDatas } from 'service/resumeApi';

export const useResumeQuery = () => {
  const { id } = useParams();

  const initialData = {
    profile: {
      title: '',
      name: '',
      profileImageUrl: '',
      address: '',
      email: '',
      phoneNumber: '',
      introduce: '',
    },
    links: [],
    skills: [],
    projects: [],
    careers: [],
    experiences: [],
    educations: [],
    certificates: [],
  };

  const fallback: data = initialData;

  const { data = fallback } = useQuery<data>({
    queryKey: ['resume', id],
    queryFn: () => getResumeDatas({ id: id }).then((res) => res.result),
  });

  return data;
};
