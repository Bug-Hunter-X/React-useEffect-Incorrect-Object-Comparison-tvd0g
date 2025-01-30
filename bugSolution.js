```javascript
import { useState, useEffect } from 'react';
import deepCompare from 'deep-compare'; // Or implement your own deep comparison function

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!deepCompare(props.data, prevProps?.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```