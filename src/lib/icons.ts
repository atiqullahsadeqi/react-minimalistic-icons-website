import * as Icons from "react-minimalistic-icons";

export interface IconData {
  name: string;
  component: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  category: string;
  variant: string;
}

export const iconCategories = [
  "arrow",
  "essetional",
  "users",
  "business",
  "money",
  "security",
  "content",
  "design-tools",
  "programing",
  "video-audio-image-405",
  "computers-devices-electronics",
  "time",
  "location",
  "weather",
  "building",
  "delivery",
  "shop",
  "call",
  "emails-messages",
  "notifications",
  "support-like-question",
  "school-learning",
  "astrology",
  "files",
  "search",
  "settings",
  "grid",
  "crypto-currency",
  "archive",
  "type-paragraph-character",
];

export const variants = [
  "Linear",
  "Bold",
  "Outline",
  "Bulk",
  "Broken",
  "Twotone",
];

// Cache for icons
let iconsCache: IconData[] | null = null;

export function getAllIcons(): IconData[] {
  // Return cached icons if available
  if (iconsCache) {
    return iconsCache;
  }

  const icons: IconData[] = [];

  // Process icons in smaller batches to avoid blocking
  Object.entries(Icons).forEach(([name, component]) => {
    if (typeof component === "function") {
      // Extract variant
      let variant = "Linear";
      for (const v of variants) {
        if (name.endsWith(v)) {
          variant = v;
          break;
        }
      }

      // Simple category mapping
      let category = "essetional";
      const lowerName = name.toLowerCase();
      
      if (lowerName.includes("arrow")) category = "arrow";
      else if (lowerName.includes("user") || lowerName.includes("profile") || lowerName.includes("people")) category = "users";
      else if (lowerName.includes("calendar") || lowerName.includes("timer") || lowerName.includes("time")) category = "time";
      else if (lowerName.includes("video") || lowerName.includes("audio") || lowerName.includes("music") || lowerName.includes("camera")) category = "video-audio-image-405";
      else if (lowerName.includes("cloud") || lowerName.includes("sun") || lowerName.includes("moon") || lowerName.includes("weather")) category = "weather";
      else if (lowerName.includes("heart") || lowerName.includes("star") || lowerName.includes("like")) category = "support-like-question";

      icons.push({
        name,
        component,
        category,
        variant,
      });
    }
  });

  // Cache the result
  iconsCache = icons;
  return icons;
}

export function searchIcons(icons: IconData[], query: string): IconData[] {
  if (!query) return icons;

  const lowercaseQuery = query.toLowerCase();
  return icons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(lowercaseQuery) ||
      icon.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function filterByCategory(
  icons: IconData[],
  category: string
): IconData[] {
  if (category === "all") return icons;
  return icons.filter((icon) => icon.category === category);
}

export function filterByVariant(
  icons: IconData[],
  variant: string
): IconData[] {
  return icons.filter((icon) => icon.variant === variant);
}
