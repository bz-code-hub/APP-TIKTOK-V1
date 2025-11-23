/**
 * Get the image URL for profile images
 * Uses /images/ path which is automatically served from public/images/ by Vite
 */
export const getProfileImageUrl = (filename: string): string => {
  if (!filename) return "";

  // Normalize filename
  const normalizedName = filename.toLowerCase();

  // For all images, use the /images/ path
  // The public/images/ folder is automatically served as /images/ by Vite
  if (normalizedName === "profile") {
    return "/images/profile.jpg"; // Default to JPG if no extension
  }

  // If filename already has extension, use as-is
  if (
    normalizedName === "profile.jpg" ||
    normalizedName === "profile.jpeg" ||
    normalizedName === "profile.png" ||
    normalizedName === "profile.gif" ||
    normalizedName === "profile.webp"
  ) {
    return `/images/${filename}`;
  }

  // For any other custom image
  return `/images/${filename}`;
};
