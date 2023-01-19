import React from 'react';

import { OnIntersect } from './OnIntersect';

type Props = {
  render: (wasEntered: boolean) => React.ReactNode;
  className?: string;
};

export const AnimateOnIntersect = ({ className, render }: Props) => {
  const [wasEntered, setEntered] = React.useState(false);

  return (
    <OnIntersect className={className} onIntersect={() => setEntered(true)}>
      {render(wasEntered)}
    </OnIntersect>
  );
};
