import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const LAUNCH_DATE = new Date('2027-01-01T00:00:00+05:30')

const SERVICES = [
  { icon: '✦', label: 'Janam Kundli Analysis' },
  { icon: '♥', label: 'Kundli Matching' },
  { icon: '☀', label: 'Horoscope & Predictions' },
  { icon: '_clock', label: 'Muhurat Guidance' },
  { icon: '✦', label: 'Career & Finance' },
  { icon: '⌂', label: 'Vastu Consultation' },
]

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now())
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(t)
  }, [])
  return time
}

function Stars() {
  const stars = []
  for (let i = 0; i < 80; i++) {
    const top = Math.random() * 100
    const left = Math.random() * 100
    const size = Math.random() * 2 + 1
    const opacity = Math.random() * 0.7 + 0.2
    const delay = (Math.random() * 4).toFixed(1)
    stars.push(
      <span
        key={i}
        className="star"
        style={{
          top: top + '%',
          left: left + '%',
          width: size + 'px',
          height: size + 'px',
          opacity,
          animationDelay: delay + 's',
        }}
      />
    )
  }
  return <div className="stars">{stars}</div>
}

function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE)
  const cells = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]
  return (
    <div className="countdown">
      {cells.map((c) => (
        <div className="count-cell" key={c.label}>
          <div className="count-value">{String(c.value).padStart(2, '0')}</div>
          <div className="count-label">{c.label}</div>
        </div>
      ))}
    </div>
  )
}

function ComingSoon() {
  return (
    <div className="page">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { min-height: 100%; }
        body { background: #0b0d17; }
        .page {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(ellipse at 50% -20%, #1d2340 0%, #0b0d17 55%);
          color: #e8e6f0;
          font-family: 'Inter', system-ui, sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 24px 40px;
        }
        .stars { position: absolute; inset: 0; pointer-events: none; }
        .star {
          position: absolute;
          background: #f5e9c8;
          border-radius: 50%;
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.9; }
        }
        .content { position: relative; z-index: 1; max-width: 760px; width: 100%; }
        .om {
          font-size: 44px;
          color: #d4af37;
          text-shadow: 0 0 24px rgba(212, 175, 55, 0.45);
          margin-bottom: 10px;
        }
        .brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 6vw, 52px);
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #f3ead7;
        }
        .brand-sub {
          font-size: 13px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #9aa0b8;
          margin-top: 6px;
        }
        .divider {
          width: 72px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 28px auto;
        }
        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 5.4vw, 46px);
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
        }
        h1 .gold { color: #d4af37; font-style: italic; }
        .lede {
          margin: 18px auto 0;
          max-width: 560px;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.75;
          color: #b9bdd0;
        }
        .countdown {
          display: flex;
          gap: 14px;
          justify-content: center;
          margin: 36px 0 8px;
          flex-wrap: wrap;
        }
        .count-cell {
          min-width: 86px;
          padding: 14px 10px;
          border: 1px solid rgba(212, 175, 55, 0.28);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(4px);
        }
        .count-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          font-weight: 700;
          color: #f3ead7;
          font-variant-numeric: tabular-nums;
        }
        .count-label {
          margin-top: 2px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9aa0b8;
        }
        .launch-note { font-size: 12px; color: #8a90a8; margin-top: 4px; }
        .services {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin: 34px 0 0;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          font-size: 13px;
          color: #d9dbe8;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
        }
        .chip .icon { color: #d4af37; font-size: 14px; }
        .chip .icon_clock { color: #d4af37; font-size: 13px; }
        .notify {
          margin: 38px auto 0;
          max-width: 440px;
          width: 100%;
        }
        .notify-label {
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9aa0b8;
          margin-bottom: 14px;
        }
        .notify-btn {
          display: inline-block;
          padding: 13px 34px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #10121e;
          background: linear-gradient(135deg, #e9c96a, #d4af37);
          border: none;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .notify-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(212, 175, 55, 0.35);
        }
        .contact {
          margin-top: 26px;
          font-size: 13px;
          color: #9aa0b8;
        }
        .contact a { color: #d4af37; text-decoration: none; }
        footer {
          position: relative;
          z-index: 1;
          margin-top: 44px;
          font-size: 12px;
          color: #6f7490;
          letter-spacing: 0.08em;
        }
        @media (max-width: 520px) {
          .page { padding: 36px 16px 32px; }
          .count-cell { min-width: 70px; padding: 10px 8px; }
          .count-value { font-size: 27px; }
        }
      `}</style>

      <Stars />
      <div className="content">
        <div className="om">ॐ</div>
        <div className="brand">Jyotish Sanskar</div>
        <div className="brand-sub">Vedic Astrology Consultation</div>
        <div className="divider" />
        <h1>
          The stars are aligning.
          <br />
          <span className="gold">Something divine is coming soon&hellip;</span>
        </h1>
        <p className="lede">
          We are crafting a space where ancient Vedic wisdom meets modern life —
          authentic guidance on your career, relationships, and life path, from
          experienced astrologers.
        </p>

        <Countdown />
        <div className="launch-note">Launching January 1, 2027</div>

        <div className="services">
          {SERVICES.map((s) => (
            <span className="chip" key={s.label}>
              <span className={s.icon === '_clock' ? 'icon_clock' : 'icon'}>
                {s.icon === '_clock' ? '◷' : s.icon}
              </span>
              {s.label}
            </span>
          ))}
        </div>

        <div className="notify">
          <div className="notify-label">Be the first to know</div>
          <a className="notify-btn" href="mailto:vyotish@gmail.com?subject=Notify%20me%20when%20Jyotish%20Sanskar%20launches">
            Notify Me
          </a>
          <div className="contact">
            Or write to us at <a href="mailto:vyotish@gmail.com">vyotish@gmail.com</a>
          </div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} Jyotish Sanskar · vyotish.com</footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComingSoon />
  </StrictMode>,
)
