import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // type?: "button" | "submit" | "reset" | undefined
}