export interface ItemsType {
  title: string;
  icon: string;
  disabled: boolean;
  type?: SystemType;
}

export type SystemType = 'identify' | 'report';
