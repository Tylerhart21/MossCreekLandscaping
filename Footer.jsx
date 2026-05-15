// Footer.jsx — Moss Creek Footer
const Footer = ({ setPage }) => (
  <footer style={{ background: '#1e3b1e', padding: '56px 40px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(168,196,154,0.2)' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src="../../assets/MCL-logo-optimized.webp" alt="MCL" style={{ width: 48, height: 48, borderRadius: '50%' }} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 600, color: '#f4f1eb' }}>Moss Creek Landscaping</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginTop: 2 }}>Richardson, TX &amp; DFW</div>
            </div>
          </div>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 14, fontStyle: 'italic', color: 'rgba(244,241,235,0.65)', lineHeight: 1.7, maxWidth: 320 }}>
            Rooted in Nature. Crafted for Living.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 16 }}>Navigation</div>
          {['Home', 'About', 'Services', 'Contact'].map(link => (
            <button key={link} onClick={() => setPage(link)} style={{
              display: 'block', fontFamily: "'Lora', Georgia, serif", fontSize: 14,
              color: 'rgba(244,241,235,0.75)', background: 'none', border: 'none',
              cursor: 'pointer', padding: '4px 0', textAlign: 'left',
            }}>{link}</button>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 16 }}>Contact</div>
          {['(972) 800-0155', 'info@mosscreeklandscaping.com', 'Richardson, TX & DFW'].map(t => (
            <div key={t} style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 13, color: 'rgba(244,241,235,0.65)', padding: '4px 0', lineHeight: 1.5 }}>{t}</div>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'rgba(244,241,235,0.35)', letterSpacing: '0.04em' }}>
          © 2026 Moss Creek Landscaping. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.04em' }}>
          <a href="/privacy-policy" style={{ color: 'rgba(244,241,235,0.55)', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: 'rgba(244,241,235,0.25)' }}>·</span>
          <a href="/terms-of-service" style={{ color: 'rgba(244,241,235,0.55)', textDecoration: 'none' }}>Terms of Service</a>
          <span style={{ color: 'rgba(244,241,235,0.25)' }}>·</span>
          <span style={{ color: 'rgba(244,241,235,0.35)' }}>Family-Owned · Insured · Richardson, TX</span>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
