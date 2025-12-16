import { useEffect } from 'react';

const useDocumentTitle = (...segments: Array<string | undefined | null>) => {
  useEffect(() => {
    const filtered = segments.filter((segment): segment is string => Boolean(segment && segment.trim()));
    const title = [...filtered, 'Verax'].join(' · ');
    document.title = title;
  }, [segments.join('|')]);
};

export default useDocumentTitle;
