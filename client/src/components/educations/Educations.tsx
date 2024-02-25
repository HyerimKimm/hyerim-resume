import { useRef } from 'react';
import { SectionTitleTypo, SectionWrap } from '../../atoms/Layout.style';
import { useIsDarkStore } from '../../store/store';
import { career, education } from '../../types/data';
import { useInView } from '../../hooks/useInView';

type educationsPropsType = {
  educations: education[];
};

const Educations = ({ educations }: educationsPropsType) => {
  return <div></div>;
};

export default Educations;
