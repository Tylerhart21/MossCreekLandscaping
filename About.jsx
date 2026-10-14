// About.jsx — About Section + About Page
const teamMembers = [
  {
    name: 'Regan Keane',
    title: 'Founder',
    bio: 'With more than a decade of landscaping experience, Regan carries on his family\'s third-generation tradition of integrity and creativity in every project he leads.',
    img: '../../assets/Regan.png',
  },
];

const TeamCard = ({ name, title, bio, img, featured }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/5', boxShadow: featured ? '0 8px 32px rgba(30,59,30,0.16)' : 'none' }}>
      <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
    </div>
    <div>
      <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#1e3b1e', marginBottom: 4 }}>{name}</div>
      <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: title }} />
      <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 14, color: '#6b4f35', lineHeight: 1.7 }}>{bio}</div>
    </div>
  </div>
);

const AboutSection = ({ full = false, setPage }) => (
  <section style={{ background: '#f4f1eb', padding: '80px 40px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      {/* Origin Story */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: full ? 80 : 0, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 'clamp(30px,3.5vw,44px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Your Trusted Local Landscaper in Richardson
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 15, color: '#3d2b1f', lineHeight: 1.75, marginBottom: 16 }}>
            Moss Creek was founded by Regan Keane, a third-generation landscaper who grew up around the industry and learned the value of hard work, quality craftsmanship, and treating people right.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 15, color: '#6b4f35', lineHeight: 1.75, marginBottom: 16 }}>
            Based in Richardson, TX, we work with homeowners and businesses throughout the DFW area on everything from landscape design and installation to patios, drainage, irrigation, fencing, outdoor living, and custom stonework.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 15, color: '#6b4f35', lineHeight: 1.75, marginBottom: 28 }}>
            Our goal is simple: do good work, communicate with our customers, and build outdoor spaces we’re proud to put our name on.
          </p>
          {!full && (
            <button onClick={() => setPage('About')} style={{
              fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#2d5626', color: '#f4f1eb',
              border: '2px solid #2d5626', borderRadius: 4, padding: '12px 28px', cursor: 'pointer',
            }}>Meet the Team</button>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <img src="../../assets/espalier-wall.webp" alt="Craftsmanship" style={{ width: '100%', borderRadius: 4, display: 'block', objectFit: 'cover', maxHeight: 420 }} />
          <div style={{ position: 'absolute', bottom: -16, left: -16, background: '#2a2724', padding: '16px 24px', borderRadius: 4 }}>
            <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 28, fontWeight: 300, color: '#f4f1eb', lineHeight: 1 }}>3rd</div>
            <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a8c49a', marginTop: 4 }}>Generation</div>
          </div>
        </div>
      </div>

      {/* Founder feature — shown on full About page */}
      {full && (
        <div>
          <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 }}>Meet the Founder</div>
          <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 36, fontWeight: 400, color: '#1e3b1e', marginBottom: 40 }}>The person behind the work.</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            <div style={{ flex: '0 0 320px', maxWidth: 320, borderRadius: 6, overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 8px 32px rgba(30,59,30,0.16)' }}>
              <img src={teamMembers[0].img} alt={teamMembers[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ flex: '1 1 320px' }}>
              <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 30, fontWeight: 600, color: '#1e3b1e', marginBottom: 6 }}>{teamMembers[0].name}</div>
              <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 16 }}>{teamMembers[0].title}</div>
              <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 16, color: '#3d2b1f', lineHeight: 1.8, marginBottom: 14 }}>{teamMembers[0].bio}</p>
              <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 16, color: '#6b4f35', lineHeight: 1.8 }}>
                When you hire Moss Creek, you know exactly who's standing behind the work — a local, family-owned team that treats your project like our own.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
);

Object.assign(window, { AboutSection, teamMembers, TeamCard });
