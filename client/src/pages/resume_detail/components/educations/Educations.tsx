import { useRef } from 'react';
import { FlexBox, SectionTitleTypo, SectionWrap } from 'atoms/Layout.style';
import { isDarkStore } from 'store/isDarkStore';
import { education } from 'types/data';

import { useInView } from 'hooks/useInView';
import { BodyTextTypo } from 'atoms/typography/Typography.style';
import Education from 'pages/resume_detail/components/educations/Education';

type educationsPropsType = {
  educations: education[];
};

const Educations = ({ educations }: educationsPropsType) => {
  const isDark = isDarkStore((state) => state.isDark);
  const target = useRef(null);
  const [inView] = useInView({ target: target });

  return (
    <SectionWrap $d="column" $j="start" $a="center" $g={12}>
      <SectionTitleTypo
        $isDark={isDark}
        $mode="primary"
        ref={target}
        className={inView ? 'frame-in' : 'frame-out'}
      >
        Educations
      </SectionTitleTypo>
      {educations.map((education) => (
        <Education key={education.educationId} education={education} />
      ))}
    </SectionWrap>
  );
};

export default Educations;
