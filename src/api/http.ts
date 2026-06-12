import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api';

function getCookie(name: string): string | null {
  const escaped = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export const http = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  const method = (config.method ?? 'get').toLowerCase();
  const unsafe = method === 'post' || method === 'put' || method === 'patch' || method === 'delete';

  if (unsafe) {
    const csrfToken = getCookie('csrftoken');
    if (csrfToken) {
      config.headers.set('X-CSRFToken', csrfToken);
    }
  }

  return config;
});
