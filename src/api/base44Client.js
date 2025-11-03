import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication required for public access
export const base44 = createClient({
  appId: "69074074f7f859062aa83943",
  requiresAuth: false // Allow public access without authentication
});
