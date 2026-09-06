import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const clean = path.replace(/^\.?\//, "");
  return `${BASE_PATH}/${clean}`;
}
