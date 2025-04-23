import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImagePath = (imageName: HTMLImageElement) => {
  if (process.env.NODE_ENV === "development") {
    return `@images/${imageName}`;
  } else {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/images/${imageName}`;
  }
};

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  }
};
