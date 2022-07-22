import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </div>
  );
};

export default Details;
