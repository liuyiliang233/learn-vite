import React, { ReactNode } from 'react';

import './index.css'

function Button(props: Props) {
  const {children} = props;
  console.log(typeof children);
  
  return (
    <div className="normal-button">
      {children}
    </div>
  );
}

type Props = {
  children: string | ReactNode;
}

export default Button;
