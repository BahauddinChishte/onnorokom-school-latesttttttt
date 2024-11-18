import { Subject } from '../types';
import { higherMath1 } from './subjects/higherMath1';
import { physics1 } from './subjects/physics1';
import { chemistry1 } from './subjects/chemistry1';
import { biology1 } from './subjects/biology1';
import { english } from './subjects/english';
import { ict } from './subjects/ict';

// Export all subjects as an array
export const subjects: Subject[] = [
  higherMath1,
  physics1,
  chemistry1,
  biology1,
  english,
  ict
];