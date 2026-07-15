// About.jsx — About Section + About Page

const AboutSection = ({ full = false, setPage }) => (
  <section style={{ background: '#f4f1eb', padding: '80px 40px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      {/* Origin Story */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px,3.5vw,44px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 20 }}>
            {full ? 'Three generations of knowing the land.' : 'Your Trusted Local Landscaper in Richardson'}
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, color: '#3d2b1f', lineHeight: 1.75, marginBottom: 16 }}>
            Moss Creek Landscaping was founded by Regan Keane, who carries on his family's third-generation tradition of integrity and creativity in every project. Based in Richardson, TX, we serve homeowners and businesses across the greater DFW area.
          </p>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, color: '#6b4f35', lineHeight: 1.75, marginBottom: 28 }}>
            We take on fewer projects than most — because we believe your outdoor space deserves our full attention, from the first conversation to the final stone.
          </p>
          {!full && (
            <button onClick={() => setPage('About')} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#2d5626', color: '#f4f1eb',
              border: '2px solid #2d5626', borderRadius: 4, padding: '12px 28px', cursor: 'pointer',
            }}>Our Story</button>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <img src="../../assets/espalier-wall.webp" alt="Craftsmanship" style={{ width: '100%', borderRadius: 4, display: 'block', objectFit: 'cover', maxHeight: 420 }} />
          <div style={{ position: 'absolute', bottom: -16, left: -16, background: '#1e3b1e', padding: '16px 24px', borderRadius: 4 }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 300, color: '#f4f1eb', lineHeight: 1 }}>3rd</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a8c49a', marginTop: 4 }}>Generation</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { AboutSection });
