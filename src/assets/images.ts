// Profile image - imported directly to ensure Vite bundles it correctly
import profileJpg from "../../../public/images/profile.jpg";

/**
 * Get the image URL for profile images
 * Directly returns imported image URL to avoid path issues in production
 */
export const getProfileImageUrl = (filename: string): string => {
  // Normalize filename
  const normalizedName = filename.toLowerCase();

  // Map all profile references to the imported image
  if (
    normalizedName === "profile" ||
    normalizedName === "profile.jpg" ||
    normalizedName === "profile.jpeg"
  ) {
    return profileJpg;
  }

  // For other custom images, construct path
  return `/images/${filename}`;
};
