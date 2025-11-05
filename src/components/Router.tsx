import { useState, useEffect, ReactNode } from 'react';

interface Route {
  path: string;
  component: ReactNode;
}

interface RouterProps {
  routes: Route[];
  defaultPath?: string;
}

// Global state to track current path for navigate function
let currentPathState: string = window.location.pathname || '/';
let pathUpdateCallback: ((path: string) => void) | null = null;

export function Router({ routes, defaultPath = '/' }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || defaultPath);

  useEffect(() => {
    currentPathState = window.location.pathname || defaultPath;
    pathUpdateCallback = setCurrentPath;

    const handlePopState = () => {
      const newPath = window.location.pathname || defaultPath;
      currentPathState = newPath;
      setCurrentPath(newPath);
      // Scroll to top on route change
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      pathUpdateCallback = null;
    };
  }, [defaultPath]);

  const currentRoute = routes.find(route => {
    // Remove query parameters for route matching
    const pathWithoutQuery = currentPath.split('?')[0];
    if (route.path === pathWithoutQuery) return true;
    // Handle dynamic routes like /service/:id
    const pathParts = route.path.split('/');
    const currentParts = pathWithoutQuery.split('/');
    if (pathParts.length !== currentParts.length) return false;
    return pathParts.every((part, i) => part.startsWith(':') || part === currentParts[i]);
  });

  return <>{currentRoute ? currentRoute.component : routes.find(r => r.path === defaultPath)?.component}</>;
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  currentPathState = path;
  if (pathUpdateCallback) {
    pathUpdateCallback(path);
  }
  // Dispatch custom event for search params and other listeners
  window.dispatchEvent(new CustomEvent(NAVIGATION_EVENT));
  // Scroll to top on route change
  window.scrollTo(0, 0);
}

export function useParams(routePath: string): Record<string, string> {
  const currentPath = window.location.pathname;
  const pathParts = routePath.split('/');
  const currentParts = currentPath.split('?')[0].split('/');
  const params: Record<string, string> = {};

  pathParts.forEach((part, i) => {
    if (part.startsWith(':')) {
      const paramName = part.slice(1);
      params[paramName] = currentParts[i];
    }
  });

  return params;
}

// Custom event for navigation updates
const NAVIGATION_EVENT = 'navigation';

export function useSearchParams(): URLSearchParams {
  const [searchParams, setSearchParams] = useState(() => {
    return new URLSearchParams(window.location.search);
  });

  useEffect(() => {
    const handleUpdate = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    const handlePopState = () => {
      handleUpdate();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener(NAVIGATION_EVENT as any, handleUpdate);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener(NAVIGATION_EVENT as any, handleUpdate);
    };
  }, []);

  return searchParams;
}
