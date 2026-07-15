// Services.jsx — Moss Creek Services Section + Full Services Page
const servicesData = [
  {
    tag: 'Garden Design',
    title: 'Custom Garden Design',
    desc: 'Every plant chosen to thrive here. We design and install gardens that work with your soil, your climate, and the way you live — from formal beds to naturalistic plantings.',
    img: '../../assets/garden-beds.webp',
  },
  {
    tag: 'Hardscaping',
    title: 'Patios, Walls & Outdoor Kitchens',
    desc: 'Hardscaping is the bones of your outdoor life. Stone pavers, retaining walls, pergolas, and outdoor kitchens — built with materials that last decades.',
    img: '../../assets/outdoor-kitchen.webp',
  },
  {
    tag: 'Tree Care',
    title: 'Tree Trimming & Removal',
    desc: "Mature trees deserve expert attention. We prune, shape, and safely remove trees of any size — preserving what's healthy and clearing what isn't.",
    img: '../../assets/tree-care.webp',
  },
  {
    tag: 'Irrigation',
    title: 'Irrigation & Drainage',
    desc: 'A smart irrigation system pays for itself. We design zone-by-zone sprinkler layouts, install efficient controllers, and solve drainage problems before they become expensive.',
    img: '../../assets/irrigation.webp',
  },
];

const ServiceCard = ({ tag, title, desc, img }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#f4f1eb', border: '1px solid #c4b99a', borderRadius: 4,
        boxShadow: hovered ? '0 8px 32px rgba(30,59,30,0.13)' : '0 2px 8px rgba(30,59,30,0.08)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow 300ms ease, transform 300ms ease',
      }}
    >
      <div style={{ height: 200, overflow: 'hidden' }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 500ms ease' }} />
      </div>
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 8 }}>{tag}</div>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 500, color: '#3d2b1f', lineHeight: 1.2, marginBottom: 10 }}>{title}</div>
        <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 14, color: '#6b4f35', lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  );
};

const ServicesSection = ({ full = false, setPage }) => {
  return (
    <section style={{ background: full ? '#f4f1eb' : '#ede8dc', padding: full ? '80px 40px' : '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 52, maxWidth: full ? '100%' : 600 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 }}>What We Do</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(32px,4vw,48px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {full ? <>Every outdoor space<br />tells a story.</> : 'Professional Lawn Care & Maintenance Services'}
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontStyle: 'italic', color: '#6b4f35', lineHeight: 1.7, maxWidth: 480 }}>
            We offer four core services — and take on fewer projects so we can do each one right.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {servicesData.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>

        {!full && (
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <button onClick={() => setPage('Services')} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'transparent', color: '#2d5626',
              border: '2px solid #2d5626', borderRadius: 4, padding: '12px 32px', cursor: 'pointer',
            }}>View All Services</button>
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { ServicesSection, servicesData, ServiceCard });
