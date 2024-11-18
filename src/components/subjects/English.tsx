import React from 'react';
import { SubjectDocs } from '../SubjectDocs';
import { english } from '../../data/subjects/english';

export function English() {
  return <SubjectDocs subject={english} />;
}