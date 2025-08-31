declare module 'react-minimalistic-icons' {
  import { ComponentType } from 'react';
  
  interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export const ArchiveBold: ComponentType<IconProps>;
  export const ArchiveBroken: ComponentType<IconProps>;
  export const ArchiveBulk: ComponentType<IconProps>;
  export const ArchiveLinear: ComponentType<IconProps>;
  export const ArchiveOutline: ComponentType<IconProps>;
  export const ArchiveTwotone: ComponentType<IconProps>;
  
  // Wildcard for all other icons
  const icons: Record<string, ComponentType<IconProps>>;
  export = icons;
}
