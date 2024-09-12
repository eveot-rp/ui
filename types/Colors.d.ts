import { COLORS } from '../constants/colors';

export type Colors = keyof typeof COLORS;
export type VariableColors = Colors | (string & {});
