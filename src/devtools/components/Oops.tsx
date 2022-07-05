import type React from 'react';

const Oops: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Oops.. No React Hook Form here!</h1>
      <div>
        <div>If your page have React Hook Form</div>
        <div>
          Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to
          reload the page.
        </div>
      </div>
    </div>
  );
};

export default Oops;
