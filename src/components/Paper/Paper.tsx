import {
  Paper as MuiPaper,
  type PaperProps as MuiPaperProps,
} from "@mui/material";
import React from "react";

export interface QuantumPaperProps extends Omit<MuiPaperProps, "variant"> {
  /**
   * Visual style variant
   * - standard: Default paper styling
   * - glass: Glassmorphism effect with backdrop blur
   * - elevated: Higher shadow and prominence
   * - subtle: Minimal styling for backgrounds
   */
  variant?: "standard" | "glass" | "elevated" | "subtle";

  /**
   * Content of the paper
   */
  children: React.ReactNode;
}

export const QuantumPaper = React.memo<QuantumPaperProps>(
  ({ variant = "standard", children, ...props }) => {
    return (
      <MuiPaper data-variant={variant} elevation={0} {...props}>
        {children}
      </MuiPaper>
    );
  }
);

QuantumPaper.displayName = "QuantumPaper";

export default QuantumPaper;
