import React, { memo } from "react";

interface VariantsProps {
  variant: string;
  selectedVariant: string;
  onSelect: (variant: string) => void;
}

const Variants = memo(
  ({ variant, selectedVariant, onSelect }: VariantsProps) => {
    const isSelected = selectedVariant === variant;

    return (
      <button
        onClick={() => onSelect(variant)}
        className={`cursor-pointer font-medium text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 rounded-full hover:bg-muted  hover:text-foreground text-foreground transition-colors ${
          isSelected
            ? "bg-indigo-600  text-white"
            : "text-black  bg-transparent"
        }`}
      >
        {variant}
      </button>
    );
  }
);

Variants.displayName = "Variants";

export default Variants;
