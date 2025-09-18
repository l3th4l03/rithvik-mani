export interface ApiConfig {
  baseUrl: string;
  apiKey: string;
}

export function getApiConfig(): ApiConfig {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!baseUrl) {
    throw new Error(
      'NEXT_PUBLIC_API_BASE_URL environment variable is required. ' +
      'Please add it to your .env.local file.'
    );
  }

  if (!apiKey) {
    throw new Error(
      'NEXT_PUBLIC_API_KEY environment variable is required. ' +
      'Please add it to your .env.local file.'
    );
  }

  // Remove trailing slash if present
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '');

  return {
    baseUrl: normalizedBaseUrl,
    apiKey,
  };
}