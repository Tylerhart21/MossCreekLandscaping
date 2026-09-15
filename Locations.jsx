// Locations.jsx — City service-area landing pages (SEO)
// Route pattern: /landscaping-<slug>-tx  (e.g. /landscaping-plano-tx)
// Each city carries unique copy to avoid duplicate-content penalties.

const CITY_DATA = [
  {
    slug: 'plano',
    city: 'Plano',
    metaTitle: 'Landscaping in Plano, TX | Moss Creek Landscaping',
    metaDescription:
      'Custom landscape design, hardscaping, irrigation, and tree care for Plano, TX homes. Family-owned, three generations in DFW. Free estimates across Plano.',
    heroSub: 'Custom landscape design, hardscaping, and tree care for Plano homeowners — from Willow Bend to west Plano.',
    h2: 'Landscaping built for Plano yards.',
    intro: [
      'Plano is a city of established, tree-lined neighborhoods and newer west-side builds — and each asks something different of a landscape. Mature live oaks and red oaks need careful pruning and root protection, while newer lots often need a full design from the ground up. Add Plano’s active HOAs and high standards, and you have yards that reward a thoughtful, tailored approach.',
      'Moss Creek Landscaping brings three generations of North Texas craftsmanship to Plano homes. We design gardens for your soil and sun, build stone patios and walls made to last decades, and keep irrigation efficient through the long Texas summer. We take on fewer projects than most, so your yard gets our full attention.',
    ],
    localNote: 'From Willow Bend and Deerfield to Los Rios and the newer builds off Legacy — we know Plano yards.',
    neighborhoods: ['Willow Bend', 'Deerfield', 'Kings Ridge', 'Los Rios', 'Hunters Glen', 'Prestonwood', 'Whiffletree', 'Ridgeview'],
    faqs: [
      { q: 'Do you work within Plano HOA guidelines?', a: 'Yes. Many Plano neighborhoods have active HOAs with landscaping standards, and we design with those in mind — helping you get the look you want while keeping everything compliant.' },
      { q: 'Can you care for the mature oaks in older Plano neighborhoods?', a: 'Absolutely. Established Plano yards often have decades-old live oaks and red oaks. We prune in the right seasonal windows, protect the root zone, and can excavate a buried root flare to add years of life to the tree.' },
      { q: 'Do you offer free estimates in Plano?', a: 'We do. We’ll walk your property, talk through your goals, and give you an honest, detailed estimate — usually within one business day of your first call.' },
    ],
  },
  {
    slug: 'frisco',
    city: 'Frisco',
    metaTitle: 'Landscaping in Frisco, TX | Moss Creek Landscaping',
    metaDescription:
      'Landscape design, hardscaping, irrigation, and outdoor living for Frisco, TX. We turn new-build lots into finished yards. Free estimates across Frisco.',
    heroSub: 'Turning Frisco’s new-build lots into finished, livable yards — design, stone, turf, and irrigation.',
    h2: 'From blank lot to finished yard in Frisco.',
    intro: [
      'Frisco has grown faster than almost anywhere in the country, and much of that growth means new construction — beautiful homes on blank-slate lots with builder-grade sod and little else. That’s an opportunity: a chance to design the whole outdoor space intentionally, from the first bed to the back patio, rather than working around what’s already there.',
      'Moss Creek Landscaping helps Frisco homeowners make that first landscape the right one. We amend the heavy clay soil so plants actually thrive, choose heat-proven plantings that look good past August, and build hardscape on properly engineered bases so it holds up for decades. Three generations of DFW experience, applied to your new yard.',
    ],
    localNote: 'Starwood, Newman Village, Phillips Creek Ranch, The Trails — we help new Frisco homeowners start their yards right.',
    neighborhoods: ['Starwood', 'Newman Village', 'Phillips Creek Ranch', 'The Trails', 'Frisco Lakes', 'Richwoods', 'Panther Creek', 'Stonebriar'],
    faqs: [
      { q: 'We just built in Frisco — where do we start?', a: 'With the soil and a plan. New Frisco lots are usually heavy clay under a thin layer of builder sod. We amend the beds, map out a full design, and phase the work if you’d like to spread it over time.' },
      { q: 'Can you landscape the whole yard at once?', a: 'Yes. New builds are ideal for a complete design — beds, trees, irrigation, patio, and lighting planned together so everything works as one finished space instead of piecemeal add-ons.' },
      { q: 'Do you offer free estimates in Frisco?', a: 'We do. We’ll visit your property, talk through your vision and budget, and follow up with a detailed estimate — typically within one business day.' },
    ],
  },
  {
    slug: 'allen',
    city: 'Allen',
    metaTitle: 'Landscaping in Allen, TX | Moss Creek Landscaping',
    metaDescription:
      'Custom landscaping, hardscape, irrigation, and tree care for Allen, TX homeowners. Three generations of DFW craftsmanship. Free on-site estimates across Allen.',
    heroSub: 'Custom gardens, hardscape, and outdoor living for Allen families — Twin Creeks to Star Creek.',
    h2: 'Landscaping that fits how Allen lives.',
    intro: [
      'Allen is a family town, and its yards tend to work hard — space for kids to play, room to entertain, and curb appeal that holds up on a tree-lined street. Its established neighborhoods have maturing landscapes ready for a refresh, while newer sections still have room to define. Either way, the goal is the same: an outdoor space you actually use.',
      'Moss Creek Landscaping designs Allen yards around real life. We build patios and fire features for the evenings out back, plant beds that stay handsome through the heat, and keep everything watered efficiently. It’s three generations of craftsmanship, focused on making your yard the best room in the house.',
    ],
    localNote: 'Twin Creeks, Watters Crossing, Star Creek, Montgomery Farm — we build yards Allen families live in.',
    neighborhoods: ['Twin Creeks', 'Watters Crossing', 'Star Creek', 'Montgomery Farm', 'Cottonwood Creek', 'Bethany Lakes', 'Waterford Parks', 'Raintree'],
    faqs: [
      { q: 'Can you design a backyard for kids and entertaining?', a: 'That’s a lot of what we do in Allen. We balance durable, low-maintenance play space with patios, fire features, and planting that makes the yard a place the whole family wants to be.' },
      { q: 'Our Allen landscape is dated — can you refresh it?', a: 'Yes. Many established Allen yards are ready for a refresh. We can rework tired beds, rebuild failing hardscape, and update plantings while keeping the trees and structure worth keeping.' },
      { q: 'Do you offer free estimates in Allen?', a: 'We do — a walk-through of your property, an honest conversation about your goals, and a detailed estimate, usually within one business day.' },
    ],
  },
  {
    slug: 'mckinney',
    city: 'McKinney',
    metaTitle: 'Landscaping in McKinney, TX | Moss Creek Landscaping',
    metaDescription:
      'Landscape design, hardscaping, irrigation, and tree care for McKinney, TX. We blend historic charm with modern outdoor living. Free estimates in McKinney.',
    heroSub: 'Landscape design and hardscape for McKinney homes — historic charm to Stonebridge Ranch.',
    h2: 'Landscaping with McKinney character.',
    intro: [
      'McKinney has a character all its own — a historic downtown with real charm, established tree-canopied streets, and fast-growing master-planned communities out toward the tollway. That range means everything from restoring a period-appropriate garden to designing a brand-new outdoor living space on a fresh lot. It calls for a landscaper who can read the setting.',
      'Moss Creek Landscaping brings three generations of North Texas craftsmanship to McKinney homes. We design gardens suited to your street and soil, build stonework that feels like it belongs, and keep it all thriving through the Texas seasons. Fewer projects, more attention — so your yard is done right.',
    ],
    localNote: 'From historic downtown to Stonebridge Ranch, Craig Ranch, and Adriatica — we tailor every McKinney yard to its setting.',
    neighborhoods: ['Stonebridge Ranch', 'Craig Ranch', 'Adriatica', 'Tucker Hill', 'Historic Downtown', 'Eldorado', 'Mallard Lakes', 'Winsor Ridge'],
    faqs: [
      { q: 'Can you match a landscape to a historic McKinney home?', a: 'Yes. Around downtown and the older districts, we design gardens and hardscape that suit the period and the street — natural stone, classic plantings, and details that feel original to the home.' },
      { q: 'Do you work in the newer McKinney master-planned communities?', a: 'We do — Stonebridge Ranch, Craig Ranch, and the newer builds toward the tollway. New lots are a great chance to design the whole outdoor space intentionally from the start.' },
      { q: 'Do you offer free estimates in McKinney?', a: 'We do. We’ll walk the property, talk through your goals, and provide a detailed estimate — usually within one business day of your call.' },
    ],
  },
];

const LOCATION_BY_SLUG = CITY_DATA.reduce((acc, c) => { acc[c.slug] = c; return acc; }, {});

const eyebrowStyle = { fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 };

const LocationPage = ({ citySlug, setPage }) => {
  const c = LOCATION_BY_SLUG[citySlug] || CITY_DATA[0];
  const scrollToForm = () => document.getElementById('home-estimate-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero band */}
      <div style={{ background: '#1e3b1e', padding: '72px 40px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={eyebrowStyle}>Service Area &middot; {c.city}, TX</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(38px,5vw,62px)', fontWeight: 300, color: '#f4f1eb', lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: 20 }}>
            Landscaping in {c.city}, TX
          </h1>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, fontStyle: 'italic', color: 'rgba(244,241,235,0.8)', lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
            {c.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#2d5626', color: '#f4f1eb', border: '2px solid #2d5626', borderRadius: 4, padding: '14px 30px', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
            }}>Get a Free Estimate</button>
            <a href="tel:+19728000155" style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'transparent', color: '#f4f1eb', border: '2px solid rgba(244,241,235,0.4)', borderRadius: 4, padding: '14px 30px',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
            }}>Call (972) 800-0155</a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: '#f4f1eb', padding: '72px 40px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={eyebrowStyle}>{c.city} Landscaping</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px,3.4vw,42px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 24 }}>
            {c.h2}
          </h2>
          {c.intro.map((para, i) => (
            <p key={i} style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, color: i === 0 ? '#3d2b1f' : '#6b4f35', lineHeight: 1.85, marginBottom: 18 }}>{para}</p>
          ))}
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, fontStyle: 'italic', color: '#2d5626', lineHeight: 1.7, marginTop: 8, paddingLeft: 18, borderLeft: '3px solid #6b8c5a' }}>
            {c.localNote}
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section style={{ background: '#ede8dc', padding: '56px 40px', borderTop: '1px solid #e0d9c8', borderBottom: '1px solid #e0d9c8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={eyebrowStyle}>Areas We Serve</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(24px,2.8vw,34px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, marginBottom: 24 }}>
            {c.city} neighborhoods we serve
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {c.neighborhoods.map(n => (
              <span key={n} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.03em', color: '#1e3b1e', background: '#f4f1eb', border: '1px solid #c4b99a', borderRadius: 999, padding: '8px 16px' }}>{n}</span>
            ))}
          </div>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 14, color: '#6b4f35', lineHeight: 1.7, marginTop: 20 }}>
            Don’t see your neighborhood? We serve all of {c.city} and the surrounding DFW area &mdash; <button onClick={() => setPage('Contact')} style={{ background: 'none', border: 'none', padding: 0, color: '#2d5626', fontFamily: "'Lora', Georgia, serif", fontSize: 14, cursor: 'pointer', textDecoration: 'underline' }}>just reach out</button>.
          </p>
        </div>
      </section>

      {/* Services recap */}
      {window.ServicesSection && <ServicesSection full={true} setPage={setPage} />}

      {/* Recent work */}
      {window.ProjectGallery && <ProjectGallery setPage={setPage} />}

      {/* FAQ */}
      <section style={{ background: '#f4f1eb', padding: '72px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={eyebrowStyle}>{c.city} Landscaping FAQ</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px,3vw,38px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, marginBottom: 32 }}>
            Questions from {c.city} homeowners
          </h2>
          {c.faqs.map((f, i) => (
            <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i === c.faqs.length - 1 ? 'none' : '1px solid #e0d9c8' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#1e3b1e', marginBottom: 10 }}>{f.q}</h3>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, color: '#3d2b1f', lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estimate form */}
      {window.HomeContactForm && <HomeContactForm />}

      {/* CTA + Footer */}
      {window.CTABanner && <CTABanner setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  );
};

Object.assign(window, { LocationPage, CITY_DATA, LOCATION_BY_SLUG });
