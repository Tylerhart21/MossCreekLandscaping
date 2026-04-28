// Nav.jsx — Moss Creek Landscaping Navigation
const Nav = ({ page, setPage }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '72px', background: '#f4f1eb',
      borderBottom: '1px solid #e0d9c8',
      boxShadow: scrolled ? '0 2px 16px rgba(30,59,30,0.13)' : '0 1px 6px rgba(30,59,30,0.07)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px',
      transition: 'box-shadow 300ms ease',
    }}>
      <button onClick={() => setPage('Home')} style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      }}>
        <img src="../../assets/MCL-logo-optimized.webp" alt="Moss Creek Landscaping" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 600, color: '#1e3b1e', letterSpacing: '0.01em' }}>Moss Creek Landscaping</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b4f35', marginTop: 1 }}>Richardson, TX &amp; DFW</div>
        </div>
      </button>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {links.map(link => (
          <button key={link} onClick={() => setPage(link)} style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: page === link ? '#2d5626' : '#3d2b1f',
            background: 'none', border: 'none', cursor: 'pointer',
            position: 'relative', padding: '4px 0',
          }}>
            {link}
            {page === link && (
              <span style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 1.5, background: '#2d5626', borderRadius: 1 }} />
            )}
          </button>
        ))}
        <button onClick={() => setPage('Contact')} style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          background: '#2d5626', color: '#f4f1eb',
          border: '2px solid #2d5626', borderRadius: 4,
          padding: '9px 20px', cursor: 'pointer',
          transition: 'background 200ms ease',
        }}
          onMouseEnter={e => e.target.style.background = '#1e3b1e'}
          onMouseLeave={e => e.target.style.background = '#2d5626'}
        >Free Estimate</button>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
