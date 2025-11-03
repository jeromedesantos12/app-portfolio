import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export const DynamicIcon = ({ name, ...props }: IconProps) => {
  if (!dynamicIconImports[name]) {
    console.warn(`Icon with name "${name}" not found in lucide-react/dynamicIconImports.`);
    return null; // Or render a fallback icon
  }
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};
