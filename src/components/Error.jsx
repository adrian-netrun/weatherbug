import React from 'react';

function Error({ error, setError }) {
  if (error) {
    return (<>
      <h4>
        {error}
      </h4>
    </>)
  }
  setError('')
}

export default Error;