// Safely get environment variables with validation
function getApiConfig() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://t3avn0bre7.execute-api.us-east-2.amazonaws.com/portfolio';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'website_key_rithvik_789';

  const config = {
    apiBase: apiBase.replace(/\/$/, ''), // Remove trailing slash
    apiKey
  };

  return config;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public path: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

function withAuth(init?: RequestInit): RequestInit {
  const { apiKey } = getApiConfig();
  const headers: HeadersInit = {
    Authorization: `Bearer ${apiKey}`,
    ...(init?.headers ?? {}),
  };
  // Only set Content-Type for JSON bodies; never for FormData
  if (init?.body && typeof init.body === 'string') {
    headers['Content-Type'] = 'application/json';
  }
  return { ...init, headers };
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { apiBase } = getApiConfig();
  const url = `${apiBase}${path}`;
  
  console.log('Making API request to:', url, 'with method:', init?.method || 'GET');

  try {
    const requestConfig = withAuth(init);
    const response = await fetch(url, requestConfig);

    console.log('API Response status:', response.status, response.statusText);

    if (!response.ok) {
      let message = response.statusText;
      let details: unknown;
      try {
        const data = await response.json();
        message = (data as any)?.message || (data as any)?.detail || message;
        details = (data as any)?.details ?? data;
      } catch {
        /* noop */
      }
      throw new ApiError(response.status, path, message, details);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return response.json() as Promise<T>;
    }
    return (response.text() as unknown) as T;
  } catch (error) {
    console.error('API Fetch failed:', error);
    throw error;
  }
}