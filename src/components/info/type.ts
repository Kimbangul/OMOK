export type InputSelectorRefType = React.MutableRefObject<null | HTMLInputElement>;

export interface InputSelectorType {
  row: InputSelectorRefType;
  cell: InputSelectorRefType;
}