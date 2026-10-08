import type { Metadata } from 'next'
import Link from 'next/link'
import DemoLauncher from './DemoLauncher'

export const metadata: Metadata = {
  title: 'Try the rarelm prototype',
  description:
    'Walk through the rarelm prototype: verified sign up, feed, Explore, Expression and more. Screens are simulated.',
  alternates: { canonical: 'https://www.rarelm.com/demo/' },
}

const faqs = [
  {
    q: 'What is the rarelm prototype?',
    a: 'It is a clickable preview of rarelm, an AI-Verified social expression platform where every account is a real human. It shows the main screens and how they connect.',
  },
  {
    q: 'Is the face scan real?',
    a: 'No. In this prototype the face scan, OTP and payments are simulated. No camera is used and no personal data is collected.',
  },
  {
    q: 'Is the content real?',
    a: 'No. Posts, names and numbers are sample content. Real posts appear at launch. The 3D avatar arrives after launch.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function DemoPage() {
  return (
    <main
      style={{
        background: '#05060E',
        color: '#F4F6FA',
        minHeight: '100vh',
        padding: '64px 20px',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section style={{ maxWidth: 720, margin: '0 auto 40px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', margin: '0 0 16px' }}>
          Try the rarelm prototype
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#C5CBD6' }}>
          rarelm is an AI-Verified social expression platform where every
          account is a real human. This prototype lets you walk through the main
          screens.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: '#9AA3B2' }}>
          Prototype note: the face scan, OTP and payments are simulated, posts
          are sample content, and no data is collected.
        </p>
      </section>

      <section style={{ textAlign: 'center', marginBottom: 56 }}>
        <DemoLauncher />
      </section>

      <section style={{ maxWidth: 720, margin: '0 auto 40px' }}>
        <h2 style={{ fontSize: 24, margin: '0 0 16px' }}>Common questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 18, margin: '0 0 6px' }}>{f.q}</h3>
            <p style={{ margin: 0, lineHeight: 1.6, color: '#C5CBD6' }}>{f.a}</p>
          </div>
        ))}
      </section>

      <section style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link href="/join/" style={{ color: '#FF5800', fontWeight: 600 }}>
          Join the waitlist
        </Link>
      </section>
    </main>
  )
}
