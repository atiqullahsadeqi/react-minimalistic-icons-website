import React, { useState, useCallback, memo } from "react";
import { IconData } from "@/lib/icons";
import { CopyOutline } from "react-minimalistic-icons";

interface IconGridProps {
  icons: IconData[];
}

const IconItem = memo(({ icon, onCopy, isCopied }: {
  icon: IconData;
  onCopy: (name: string) => void;
  isCopied: boolean;
}) => {
  const IconComponent = icon.component;
  
  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => onCopy(icon.name)}
    >
      <div className="relative bg-white dark:bg-gray-800 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-[120px] xl:w-[120px] border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md dark:hover:shadow-lg transition-shadow duration-300">
        <IconComponent size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6 text-gray-700 dark:text-gray-300" />
        <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          {isCopied ? (
            <span className="text-white font-semibold text-lg">✓</span>
          ) : (
            <CopyOutline color="#fff" size={16} className="sm:w-5 sm:h-5" />
          )}
        </div>
      </div>
      <p className="text-gray-400 dark:text-gray-500 mt-2 sm:mt-3 text-xs sm:text-xs text-center leading-tight">
        {icon.name
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase()
          .replace(/^-/, "")}
      </p>
    </div>
  );
});

IconItem.displayName = "IconItem";

const Icons = memo(({ icons }: IconGridProps) => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (iconName: string) => {
    const code = `import { ${iconName} } from 'react-minimalistic-icons';\n\n<${iconName} size={24} />`;
    
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    }
  }, []);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-5">
        {icons.map((icon) => (
          <IconItem
            key={icon.name}
            icon={icon}
            onCopy={copyToClipboard}
            isCopied={copiedIcon === icon.name}
          />
        ))}
      </div>
    </div>
  );
});

Icons.displayName = "Icons";

export default Icons;
