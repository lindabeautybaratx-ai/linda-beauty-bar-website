/**
 * Utility functions for managing service booking links from environment variables
 */

/**
 * Converts a service ID to an environment variable name
 * Example: 'ombre-powder-brows' -> 'VITE_BOOKING_LINK_OMBRE_POWDER_BROWS'
 */
function serviceIdToEnvVar(serviceId: string): string {
  return `VITE_BOOKING_LINK_${serviceId.toUpperCase().replace(/-/g, '_')}`;
}

/**
 * Gets the booking link for a specific service from environment variables
 * Falls back to default booking link if service-specific link is not found
 * 
 * @param serviceId - The service ID (e.g., 'ombre-powder-brows') or 'default' for default link
 * @param defaultLink - Default booking link to use if service-specific link is not found
 * @returns The booking link for the service
 */
export function getServiceBookingLink(serviceId: string, defaultLink?: string): string {
  // Handle 'default' case specially
  if (serviceId === 'default') {
    return defaultLink || import.meta.env.VITE_DEFAULT_BOOKING_LINK || 'https://booking.lindasbeautybar.com';
  }
  
  const envVarName = serviceIdToEnvVar(serviceId);
  const serviceLink = import.meta.env[envVarName];
  
  if (serviceLink && typeof serviceLink === 'string' && serviceLink.trim() !== '') {
    return serviceLink.trim();
  }
  
  // Fallback to default booking link from env or hardcoded default
  return defaultLink || import.meta.env.VITE_DEFAULT_BOOKING_LINK || 'https://booking.lindasbeautybar.com';
}

/**
 * Gets booking link from service object, falling back to env vars if not set
 * 
 * @param service - Service object with optional bookingLink property
 * @returns The booking link for the service
 */
export function getBookingLink(service: { id: string; bookingLink?: string }): string {
  // If service has a bookingLink property, use it
  if (service.bookingLink && service.bookingLink.trim() !== '') {
    return service.bookingLink.trim();
  }
  
  // Otherwise, try to get from environment variables
  return getServiceBookingLink(service.id);
}

