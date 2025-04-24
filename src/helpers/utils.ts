import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImagePath = (imageName: string) => {
  if (process.env.NODE_ENV === "development") {
    return `/assets/images/${imageName}`;
  } else {
    return `assets/images/${imageName}`;
  }
};

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  }
};
