// Hero.jsx — Moss Creek Landscaping Hero Section
const Hero = ({ setPage }) => {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background photo */}
      <img
        src="../../assets/rose-arch-garden.webp"
        alt="Beautiful landscaped garden"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Green-tinted overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(20,45,20,0.62) 0%, rgba(30,59,30,0.45) 60%, rgba(30,59,30,0.28) 100%)' }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 60px', maxWidth: 900,
      }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#a8c49a', marginBottom: 20 }}>
          Richardson, TX · DFW Area
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(48px, 6vw, 82px)',
          fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em',
          color: '#f4f1eb', marginBottom: 24,
        }}>
          Rooted in Nature.<br /><em>Crafted for Living.</em>
        </h1>
        <p style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: 18, fontStyle: 'italic',
          color: 'rgba(244,241,235,0.88)', lineHeight: 1.7, maxWidth: 520, marginBottom: 40,
        }}>
          Third-generation craftsmanship, applied to your backyard. Custom garden design, hardscaping, tree care, and irrigation — built to last.
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <button onClick={() => { setPage('Contact'); setTimeout(() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120); }} style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: '#2d5626', color: '#f4f1eb',
            border: '2px solid #2d5626', borderRadius: 4, padding: '14px 32px', cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(30,59,30,0.35)', transition: 'background 200ms',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1e3b1e'}
            onMouseLeave={e => e.currentTarget.style.background = '#2d5626'}
          >Get a Free Estimate</button>
          <button onClick={() => setPage('Services')} style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: 'transparent', color: '#f4f1eb',
            border: '2px solid rgba(244,241,235,0.6)', borderRadius: 4, padding: '14px 32px', cursor: 'pointer',
            transition: 'border-color 200ms, background 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f4f1eb'; e.currentTarget.style.background = 'rgba(244,241,235,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(244,241,235,0.6)'; e.currentTarget.style.background = 'transparent'; }}
          >View Our Work</button>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,241,235,0.5)' }}>Scroll</div>
        <div style={{ width: 1, height: 36, background: 'rgba(244,241,235,0.3)' }} />
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
