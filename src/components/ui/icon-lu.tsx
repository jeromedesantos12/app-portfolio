import { FC, SVGProps, useMemo } from "react";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";

interface DynamicSiIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const DynamicLuIcon: FC<DynamicSiIconProps> = ({ name, ...props }) => {
  const Icon = useMemo(() => {
    return dynamic(
      async () => {
        const mod = await import("react-icons/lu");
        const icon = mod[name as keyof typeof mod] as IconType | undefined;
        if (!icon) {
          console.warn(`Icon with name "${name}" not found in react-icons/lu.`);
          return () => null;
        }
        return icon;
      },
      {
        loading: () => <div style={{ width: 48, height: 48 }} />,
      }
    );
  }, [name]);

  return <Icon {...props} />;
};
