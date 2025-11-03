"use client";
import { FC, SVGProps, useMemo } from "react";
import dynamic from "next/dynamic";

interface DynamicSiIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const DynamicSiIcon: FC<DynamicSiIconProps> = ({
  name,
  ...props
}) => {
  const Icon = useMemo(() => {
    return dynamic(() => import("react-icons/si").then((mod) => {
      const icon = mod[name as keyof typeof mod];
      if (!icon) {
        console.warn(
          `Icon with name "${name}" not found in react-icons/si.`
        );
        return () => null;
      }
      return icon;
    }), {
      loading: () => <div style={{ width: 48, height: 48 }} />,
    });
  }, [name]);

  return <Icon {...props} />;
};
