import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonPropsType extends ButtonHTMLAttributes<'button'> {
  children: ReactNode;
  // type?: "button" | "submit" | "reset" | undefined
}