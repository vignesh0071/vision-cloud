import { useEffect } from 'react';

export function useDocumentTitle(title: string, description?: string): void {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Vision Cloud` : 'Vision Cloud | Engineering Digital Experiences';

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, description]);
}
