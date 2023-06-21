import { ReactNode } from "react";

export interface ButtonPropsType {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined
}