'use client'

import { useEffect, useRef, useState } from 'react'

const mono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

export default function DemoLauncher() {
  const [started, setStarted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // When the demo opens, bring it to the top of the screen so people see the whole phone.
  useEffect(() => {
    if (started && wrapRef.current) {
      wrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [started])

  if (!started) {
    return (
      <button
        type="button"
        onClick={() => setStarted(true)}
        style={{
          background: '#FF5800',
          color: '#05060E',
          border: 0,
          borderRadius: 999,
          padding: '14px 28px',
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Launch the prototype
      </button>
    )
  }

  return (
    <div
      ref={wrapRef}
      style={{ width: '100%', maxWidth: 1280, margin: '0 auto', scrollMarginTop: 90 }}
    >
      <div
        style={{
          display: 'inline-block',
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#FF5800',
          background: 'rgba(0,0,0,0.55)',
          border: '1px solid rgba(255,88,0,0.4)',
          borderRadius: 4,
          padding: '4px 8px',
          marginBottom: 12,
        }}
      >
        Prototype, simulated screens
      </div>

      {!loaded && (
        <p role="status" style={{ color: '#9AA3B2', margin: '0 0 12px' }}>
          Loading the prototype. This can take a few seconds on mobile data.
        </p>
      )}

      <iframe
        src="/demo-app/index.html"
        title="rarelm prototype"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: 'clamp(780px, 100vh, 980px)',
          border: 0,
          borderRadius: 16,
          background: '#05060E',
        }}
      />
    </div>
  )
}
