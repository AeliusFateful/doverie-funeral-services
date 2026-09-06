import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix a public-folder path with the deploy basePath so assets resolve on
// GitHub Pages (served from /doverie-funeral-services/) and at the custom
// domain root alike. Relative "./images/..." breaks on nested routes, so
// always build asset URLs through this helper.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const clean = path.replace(/^\.?\//, "");
  return `${BASE_PATH}/${clean}`;
}
