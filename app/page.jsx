'use client'

import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    setDone(true)
    setEmail('')
  }

  return (
    <main style={styles.main}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.card}>
        <div style={styles.brand}>
          <div style={styles.logo} />
          <div style={styles.brandText}>OxPay</div>
        </div>

        <h1 style={styles.h1}>The simplest way to use crypto.</h1>
        <p style={styles.p}>
          Clean design. Built-in protection. Cashback that rewards real usage.
        </p>

        <div style={styles.chips}>
          {['Cashback rewards', 'Scam-aware protection', 'Built for real people'].map((t) => (
            <span key={t} style={styles.chip}>
              {t}
            </span>
          ))}
        </div>

        {done ? (
          <div style={styles.success}>✅ You’re in. Welcome to OxPay.</div>
        ) : (
          <form onSubmit={submit} style={styles.form}>
            <input
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Join Waitlist
            </button>
          </form>
        )}

        <div style={styles.footer}>
          <div style={styles.launch}>
            Launching <span style={styles.bold}>February 28</span>
          </div>
          <div style={styles.trust}>Powered by IOXA • Security-first • No hype, just utility</div>
        </div>
      </div>
    </main>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    background: '#05070D',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 24px',
    position: 'relative',
    overflow: 'hidden',
  },
  glow1: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '320px',
    height: '320px',
    background: 'rgba(123,97,255,0.20)',
    filter: 'blur(60px)',
    borderRadius: '999px',
  },
  glow2: {
    position: 'absolute',
    bottom: '-220px',
    left: '35%',
    width: '320px',
    height: '320px',
    background: 'rgba(79,209,197,0.15)',
    filter: 'blur(60px)',
    borderRadius: '999px',
  },
  card: {
    width: '100%',
    maxWidth: '860px',
    borderRadius: '28px',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(14px)',
    padding: '42px',
    boxShadow: '0 0 70px rgba(0,0,0,0.55)',
    position: 'relative',
  },
  brand: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg,#7B61FF 0%,#4FD1C5 100%)',
  },
  brandText: { fontSize: '18px', fontWeight: 600, letterSpacing: '0.5px' },
  h1: { textAlign: 'center', marginTop: '28px', fontSize: '52px', lineHeight: 1.05, fontWeight: 600 },
  p: { textAlign: 'center', marginTop: '14px', fontSize: '18px', color: 'rgba(255,255,255,0.70)' },
  chips: { marginTop: '28px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' },
  chip: {
    padding: '10px 14px',
    borderRadius: '999px',
    fontSize: '14px',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(0,0,0,0.20)',
    color: 'rgba(255,255,255,0.80)',
  },
  form: { marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },
  input: {
    height: '52px',
    width: '360px',
    maxWidth: '100%',
    borderRadius: '18px',
    background: '#0B1020',
    border: '1px solid rgba(255,255,255,0.10)',
    padding: '0 14px',
    color: '#fff',
    outline: 'none',
  },
  button: {
    height: '52px',
    padding: '0 18px',
    borderRadius: '18px',
    border: 'none',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.4px',
    cursor: 'pointer',
    background: 'linear-gradient(135deg,#7B61FF 0%,#4FD1C5 100%)',
  },
  success: {
    marginTop: '36px',
    borderRadius: '18px',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(0,0,0,0.25)',
    color: '#A7F3D0',
  },
  footer: { marginTop: '30px', textAlign: 'center' },
  launch: { fontSize: '14px', color: 'rgba(255,255,255,0.60)' },
  bold: { color: 'rgba(255,255,255,0.85)' },
  trust: { marginTop: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' },
}
