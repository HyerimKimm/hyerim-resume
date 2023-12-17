import React from 'react';
import { link } from '../../types/data';
import { SectionWrap } from '../../atoms/Layout.style';
import LinkItem from './LinkItem';

type LinkListPropsType = {
  list: link[];
};

const LinkList = ({ list }: LinkListPropsType) => {
  return <SectionWrap></SectionWrap>;
};

export default LinkList;
