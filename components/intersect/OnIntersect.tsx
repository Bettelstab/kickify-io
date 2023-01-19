import React from 'react';

type Props = {
  onIntersect: (ref?: React.RefObject<HTMLDivElement>) => void;
  className?: string;
  children?: React.ReactNode;
};

export const OnIntersect = ({ onIntersect, className, children }: Props) => {
  const ref = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          // console.log('It works!');
          onIntersect(ref);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
  }, [onIntersect, ref]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
