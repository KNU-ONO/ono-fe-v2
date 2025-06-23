import { BASE_URL } from '@/shared';

export const DynamicImagePath = (path: string) => {
  return `${BASE_URL}/${path}`;
};
