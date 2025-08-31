# React Minimalistic Icons

A comprehensive React icon library with **5,172 beautiful minimalistic icons** across 6 different styles. Built with TypeScript and optimized for modern React applications.

## ✨ Features

- 🎨 **5,172 Icons** across multiple categories
- 🎯 **6 Icon Styles**: Bold, Broken, Bulk, Linear, Outline, Twotone
- 📦 **TypeScript Support** with full type definitions
- ⚡ **Tree Shakable** - Only import what you need
- 🔧 **Zero Configuration** - Works out of the box
- 🎨 **Customizable** - Size, color, and styling props
- ⚛️ **React 18+ Compatible**
- 📱 **Next.js Ready** - No additional setup required

## 📦 Installation

```bash
npm install react-minimalistic-icons
```

```bash
yarn add react-minimalistic-icons
```

```bash
pnpm add react-minimalistic-icons
```

## 🚀 Quick Start

```tsx
import { HomeBold, UserLinear, HeartOutline } from 'react-minimalistic-icons';

function App() {
  return (
    <div>
      <HomeBold size={24} color="#000" />
      <UserLinear size={32} color="#3b82f6" />
      <HeartOutline size={20} color="#ef4444" />
    </div>
  );
}
```

## 🎨 Icon Styles

Each icon comes in 6 different styles:

- **Bold** - Filled with bold weight
- **Broken** - Stylized broken line style
- **Bulk** - Filled with transparency effects
- **Linear** - Clean outline style
- **Outline** - Detailed outline version
- **Twotone** - Two-tone color style

```tsx
import { 
  PlayBold, 
  PlayBroken, 
  PlayBulk, 
  PlayLinear, 
  PlayOutline, 
  PlayTwotone 
} from 'react-minimalistic-icons';
```

## 🔧 Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (CSS color value) |
| `className` | `string` | `""` | CSS class name |
| `style` | `React.CSSProperties` | `{}` | Inline styles |

```tsx
<HomeBold 
  size={32}
  color="#3b82f6"
  className="my-icon"
  style={{ margin: '10px' }}
/>
```

## 📂 Categories

Icons are organized into the following categories:

- **Arrows** - Navigation and directional icons
- **Audio** - Music and sound related icons
- **Building** - Architecture and construction icons
- **Business** - Office and business icons
- **Call** - Communication icons
- **Crypto** - Cryptocurrency icons
- **Delivery** - Shipping and logistics icons
- **Design Tools** - Creative and design icons
- **Devices** - Technology and device icons
- **Emoji** - Emotion and expression icons
- **Files** - Document and file icons
- **Hands** - Gesture icons
- **Home** - Household and furniture icons
- **Like** - Social interaction icons
- **Map** - Location and navigation icons
- **Medicine** - Healthcare icons
- **Messages** - Communication icons
- **Money** - Financial icons
- **Nature** - Environmental icons
- **Network** - Connectivity icons
- **Notifications** - Alert icons
- **People** - User and person icons
- **Programming** - Development icons
- **School** - Education icons
- **Search** - Discovery icons
- **Security** - Safety and protection icons
- **Settings** - Configuration icons
- **Shopping** - E-commerce icons
- **Sports** - Athletic icons
- **Text Formatting** - Typography icons
- **Time** - Clock and calendar icons
- **Transport** - Vehicle icons
- **Travel** - Tourism icons
- **Video** - Media icons
- **Weather** - Climate icons

## 🌐 Browse All Icons

**[📖 See All Icons →](https://react-minimalistic-icons-website.vercel.app/)**

Explore the complete icon library with search, filtering, and copy-to-clipboard functionality.

## 💡 Usage Examples

### Basic Usage
```tsx
import { SearchLinear, FilterBold } from 'react-minimalistic-icons';

function SearchBar() {
  return (
    <div className="flex items-center gap-2">
      <SearchLinear size={20} color="#6b7280" />
      <input placeholder="Search..." />
      <FilterBold size={18} color="#374151" />
    </div>
  );
}
```

### Dynamic Styling
```tsx
import { HeartBold } from 'react-minimalistic-icons';
import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  
  return (
    <button onClick={() => setLiked(!liked)}>
      <HeartBold 
        size={24} 
        color={liked ? "#ef4444" : "#6b7280"} 
      />
    </button>
  );
}
```

### With Tailwind CSS
```tsx
import { UserLinear, SettingsOutline } from 'react-minimalistic-icons';

function Navigation() {
  return (
    <nav className="flex space-x-4">
      <UserLinear className="w-6 h-6 text-blue-500 hover:text-blue-700" />
      <SettingsOutline className="w-6 h-6 text-gray-500 hover:text-gray-700" />
    </nav>
  );
}
```

## 🔍 Finding Icons

1. **Browse Online**: Visit our [icon library](https://react-minimalistic-icons-website.vercel.app/) to search and preview icons
2. **Import Pattern**: Icons follow the pattern `{IconName}{Style}`
3. **TypeScript**: Full IntelliSense support for easy discovery

## 📱 Framework Support

### Next.js
Works out of the box with Next.js 13+ and App Router:

```tsx
// app/page.tsx
import { HomeBold } from 'react-minimalistic-icons';

export default function Page() {
  return <HomeBold size={24} />;
}
```

### Vite
Compatible with Vite and modern build tools:

```tsx
import { UserLinear } from 'react-minimalistic-icons';
```

### Create React App
Full support for CRA projects:

```tsx
import { SearchOutline } from 'react-minimalistic-icons';
```

## 🎯 Tree Shaking

The library is fully tree-shakable. Only the icons you import will be included in your bundle:

```tsx
// ✅ Only imports the specific icon
import { HomeBold } from 'react-minimalistic-icons';

// ❌ Imports the entire library
import * as Icons from 'react-minimalistic-icons';
```

## 📊 Bundle Size

- **Individual Icon**: ~1-3KB
- **Tree Shaking**: Only pay for what you use
- **TypeScript Declarations**: Included
- **Zero Dependencies**: No external dependencies

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **[📖 Icon Library](https://react-minimalistic-icons-website.vercel.app/)** - Browse all icons
- **[📦 NPM Package](https://www.npmjs.com/package/react-minimalistic-icons)** - Package details
- **[🐛 Issues](https://github.com/atiqullahsadeqi/react-minimalistic-icons/issues)** - Report bugs
- **[💡 Feature Requests](https://github.com/atiqullahsadeqi/react-minimalistic-icons/discussions)** - Suggest improvements

---

Made with ❤️ for the React community
