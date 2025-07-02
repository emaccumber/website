/**
 * Utility function to get the correct URL for media assets
 * This handles switching between local public folder and Backblaze B2 bucket
 * @param path - Path to the media file, relative to public folder
 * @returns Full URL to the media file
 */
export function getMediaUrl(path: string): string {
  // Handle undefined or null paths
  if (!path) {
    console.warn('getMediaUrl called with undefined or null path');
    return '';
  }
  
  // If PUBLIC_MEDIA_URL is set, use it as the base URL
  if (import.meta.env.PUBLIC_MEDIA_URL) {
    // Remove leading slash if present for Backblaze URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.PUBLIC_MEDIA_URL}/${cleanPath}`;
  }
  
  // Otherwise, return the path as-is for local development
  // This assumes images are in the public folder
  return path;
}