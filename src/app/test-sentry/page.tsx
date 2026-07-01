'use client';

export default function TestSentryPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sentry Test Page</h1>
      <button
        onClick={() => {
          throw new Error("Sentry Client-Side Test Error");
        }}
        style={{
          padding: '0.5rem 1rem',
          background: '#e15656',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Throw Client Error
      </button>
    </div>
  );
}
