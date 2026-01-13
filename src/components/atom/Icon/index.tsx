import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';

const ICONS = {
  feather: Feather,
  ionicons: Ionicons,
  material: MaterialIcons,
} as const;

type IconType = keyof typeof ICONS;

type IconName<T extends IconType> =
  ComponentProps<(typeof ICONS)[T]>['name'];

type BaseIconProps = {
  size?: number;
  color?: string;
};

export type IconProps<T extends IconType = IconType> = BaseIconProps & {
  type: T;
  name: IconName<T>;
};

export function Icon<T extends IconType>({
  type,
  name,
  size = 24,
  color = '#000',
}: IconProps<T>) {
  const IconComponent = ICONS[type] as React.ComponentType<{
    name: IconName<T>;
    size?: number;
    color?: string;
  }>;

  return <IconComponent name={name} size={size} color={color} />;
}

