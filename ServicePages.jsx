// ServicePages.jsx — Service landing pages (SEO), design-build focused.
// Routes: /landscape-design, /hardscaping, /tree-care, /irrigation-drainage
// Mirrors the city-page architecture; each service also gets a generated
// static HTML file (scripts/build-static-pages.js) for source-level SEO.

const SERVICE_DATA = [
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    metaTitle: 'Landscape Design in Richardson & DFW | Moss Creek',
    metaDescription:
      'Custom, design-build landscape design in Richardson, TX and across DFW. Moss Creek plans and builds gardens, outdoor living, and full yard transformations. Free consultation.',
    heroSub: 'Custom, design-build landscapes planned around your home, your soil, and how you live outdoors.',
    h2: 'Design-build landscapes, made for how you live.',
    intro: [
      'Great landscapes don’t happen by accident — they’re designed. Moss Creek is a design-build landscaper, which means the same team that draws your plan is the team that builds it. Nothing gets lost between the vision and the finished yard, and you have one accountable partner from first sketch to final stone.',
      'We design for your soil, your light, and the way you actually use your outdoor space — from a single garden bed to a full property transformation. Planting design, outdoor living, hardscape, lighting, and irrigation planned together as one cohesive space, backed by three generations of North Texas craftsmanship.',
    ],
    includes: [
      ['Custom design & plans', 'A tailored plan for your property and how you live — never a template.'],
      ['Planting design', 'Trees, beds, and gardens chosen to thrive in North Texas soil and heat.'],
      ['Outdoor living', 'Patios, kitchens, and gathering spaces designed into the whole plan.'],
      ['Full design-build', 'One team from the first sketch to the final planting.'],
    ],
    faqs: [
      { q: 'What is design-build landscaping?', a: 'One team designs your landscape and then builds it. The plan and the finished result match, coordination is tighter, and there are fewer surprises than handing a designer’s plan to a separate crew.' },
      { q: 'Do you design the whole yard or just part of it?', a: 'Both. We’ll design a single bed or a full property master plan — and we can phase a larger project over time so it fits your budget.' },
      { q: 'How does a landscape design project start?', a: 'With a free consultation and walk-through. We talk through your goals, your site, and your budget, then develop a plan built around all three.' },
    ],
  },
  {
    slug: 'hardscaping',
    name: 'Hardscaping',
    metaTitle: 'Hardscaping in Richardson & DFW | Moss Creek Landscaping',
    metaDescription:
      'Patios, retaining walls, walkways, and outdoor kitchens built to last in Richardson, TX and DFW. Moss Creek hardscaping and custom stonework. Free consultation.',
    heroSub: 'Patios, walls, walkways, and outdoor kitchens — the stonework that gives your yard its bones.',
    h2: 'Stonework built to outlast the seasons.',
    intro: [
      'Hardscaping is the structure of your outdoor life — the patio you gather on, the walls that shape the yard, the walkways that tie it all together. Done right, on a properly engineered base with the right stone for Texas heat and clay, it lasts for decades.',
      'Moss Creek builds flagstone and paver patios, retaining and seat walls, walkways, fire features, and outdoor kitchens — designed to suit your home and built by a team that has worked North Texas stone for three generations. We over-engineer the base every time, because hardscape fails from below.',
    ],
    includes: [
      ['Patios & pavers', 'Flagstone, natural stone, and paver patios set on compacted, engineered bases.'],
      ['Retaining & seat walls', 'Structural walls with real drainage, built for DFW’s shifting clay.'],
      ['Walkways & steps', 'Paths and steps that connect the whole property and hold up over time.'],
      ['Outdoor kitchens & fire', 'Built-in grills, counters, fire pits, and fireplaces for evenings outside.'],
    ],
    faqs: [
      { q: 'What’s the best patio material for North Texas?', a: 'Oklahoma flagstone and quality pavers on a compacted base handle our heat and clay well. We match the stone to your home and how you’ll use the space.' },
      { q: 'Do you build retaining walls that won’t fail?', a: 'Yes. With DFW clay, drainage and base engineering are everything — we build for the soil movement, not against it.' },
      { q: 'Can you add an outdoor kitchen to an existing patio?', a: 'Often, yes. We’ll assess the existing base, utilities, and layout in a free consultation and tell you honestly what’s possible.' },
    ],
  },
  {
    slug: 'tree-care',
    name: 'Tree Care',
    metaTitle: 'Tree Care, Trimming & Removal in DFW | Moss Creek',
    metaDescription:
      'Tree trimming, pruning, shaping, and safe removal in Richardson, TX and across DFW. Moss Creek cares for mature trees and clears what’s beyond saving. Free consultation.',
    heroSub: 'Trimming, pruning, shaping, and safe removal — expert care for the trees that anchor your yard.',
    h2: 'Care for the trees that make your yard.',
    intro: [
      'A mature tree is worth protecting — it shades the house, anchors the landscape, and can’t be replaced for decades. Moss Creek prunes and shapes trees to keep them healthy and structurally sound, and removes what’s beyond saving safely and cleanly.',
      'We time pruning to the season, protect the root zone, and know the North Texas threats — like oak wilt — that make when and how you cut genuinely matter. Three generations of working the land stand behind every job.',
    ],
    includes: [
      ['Trimming & pruning', 'For health, shape, safety, and clearance from structures and lines.'],
      ['Shaping & thinning', 'Improve structure, light, and air flow through the canopy.'],
      ['Safe tree removal', 'Clean, careful removal of trees that are dead, dying, or hazardous.'],
      ['Mature tree care', 'Root-flare, mulching, and seasonal-timing guidance to add years of life.'],
    ],
    faqs: [
      { q: 'When should oaks be trimmed in North Texas?', a: 'Mid-winter or the dead of summer, to reduce oak wilt risk. We seal fresh cuts on oaks and avoid pruning them in the high-risk spring window.' },
      { q: 'Do you remove large or dangerous trees?', a: 'Yes — safely and cleanly. We assess access, structures, and risk first, then remove and clean up so you’d never know we were there.' },
      { q: 'A company told me to remove my tree — can it be saved?', a: 'Sometimes. Removal is occasionally the right call, but often it isn’t. We’ll give you an honest read in a free consultation.' },
    ],
  },
  {
    slug: 'irrigation-drainage',
    name: 'Irrigation & Drainage',
    metaTitle: 'Irrigation & Drainage in Richardson & DFW | Moss Creek',
    metaDescription:
      'Sprinkler and drip irrigation, system repair, and drainage solutions in Richardson, TX and DFW. Moss Creek keeps water where it belongs. Free consultation.',
    heroSub: 'Efficient sprinkler and drip systems, repairs, and drainage that keeps water where it belongs.',
    h2: 'Water where you want it — not where you don’t.',
    intro: [
      'In North Texas, water is either the thing keeping your landscape alive or the thing tearing it apart. Moss Creek designs efficient irrigation that delivers the right amount of water to the right plants, and drainage that moves runoff away from your foundation and beds.',
      'New sprinkler and drip installs, controller upgrades, repairs and tune-ups, and drainage solutions for the low spots and heavy clay that plague DFW yards — planned as part of the whole landscape, not bolted on afterward.',
    ],
    includes: [
      ['Irrigation installation', 'Zoned sprinkler and drip systems designed for efficiency, not waste.'],
      ['Repairs & tune-ups', 'Fix leaks, heads, and controllers — and bring the water bill back down.'],
      ['Drainage solutions', 'French drains, grading, and runoff control for heavy clay soil.'],
      ['Smart controllers', 'Weather-based watering that saves water and money year-round.'],
    ],
    faqs: [
      { q: 'Can you fix an existing sprinkler system?', a: 'Yes — repairs, head adjustments, controller upgrades, and efficiency tune-ups on systems we didn’t install.' },
      { q: 'How do I fix a yard that holds water?', a: 'Grading and drainage — French drains, catch basins, and re-sloping — route water away from the house and beds. We’ll diagnose the low spots first.' },
      { q: 'Do you install drip irrigation for beds?', a: 'Yes. Drip delivers water straight to the roots with far less waste — ideal for beds and the North Texas heat.' },
    ],
  },
];

const SERVICE_BY_SLUG = SERVICE_DATA.reduce((a, s) => { a[s.slug] = s; return a; }, {});

const svcNav = (path) => { window.history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); };
const svcEyebrow = { fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 };
const svcLink = { fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 14, color: '#2d5626', textDecoration: 'none', fontWeight: 500 };

const ServicePage = ({ serviceSlug, setPage }) => {
  const s = SERVICE_BY_SLUG[serviceSlug] || SERVICE_DATA[0];
  const others = SERVICE_DATA.filter((x) => x.slug !== s.slug);
  const scrollToForm = () => document.getElementById('home-estimate-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero band */}
      <div style={{ background: '#2a2724', padding: '72px 40px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={svcEyebrow}>Our Services</div>
          <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 'clamp(38px,5vw,62px)', fontWeight: 400, color: '#f4f1eb', lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: 20 }}>
            {s.name} in Richardson &amp; DFW
          </h1>
          <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 17, color: 'rgba(244,241,235,0.82)', lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
            {s.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} style={{
              fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#2d5626', color: '#f4f1eb', border: '2px solid #2d5626', borderRadius: 4, padding: '14px 30px', cursor: 'pointer',
            }}>Schedule a Consultation</button>
            <a href="tel:+19728000155" style={{
              fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'transparent', color: '#f4f1eb', border: '2px solid rgba(244,241,235,0.4)', borderRadius: 4, padding: '14px 30px',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
            }}>Call or text (972) 800-0155</a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: '#f4f1eb', padding: '72px 40px 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={svcEyebrow}>{s.name}</div>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 'clamp(28px,3.4vw,42px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 24 }}>
            {s.h2}
          </h2>
          {s.intro.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 16, color: i === 0 ? '#3d2b1f' : '#6b4f35', lineHeight: 1.8, marginBottom: 18 }}>{p}</p>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#ede8dc', padding: '64px 40px', borderTop: '1px solid #e0d9c8', borderBottom: '1px solid #e0d9c8' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={svcEyebrow}>What’s Included</div>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 'clamp(24px,2.8vw,34px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, marginBottom: 28 }}>
            What {s.name.toLowerCase()} with Moss Creek covers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {s.includes.map(([t, d]) => (
              <div key={t} style={{ background: '#f4f1eb', border: '1px solid #c4b99a', borderRadius: 6, padding: '20px 20px' }}>
                <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, fontWeight: 600, color: '#1e3b1e', marginBottom: 8 }}>{t}</div>
                <div style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 14, color: '#6b4f35', lineHeight: 1.65 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      {window.ProjectGallery && <ProjectGallery setPage={setPage} />}

      {/* FAQ */}
      <section style={{ background: '#f4f1eb', padding: '72px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={svcEyebrow}>{s.name} FAQ</div>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 'clamp(26px,3vw,38px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.2, marginBottom: 32 }}>
            Common questions
          </h2>
          {s.faqs.map((f, i) => (
            <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i === s.faqs.length - 1 ? 'none' : '1px solid #e0d9c8' }}>
              <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 21, fontWeight: 600, color: '#1e3b1e', marginBottom: 10 }}>{f.q}</h3>
              <p style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 16, color: '#3d2b1f', lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}

          {/* Cross-links to other services + service areas */}
          <div style={{ marginTop: 8, paddingTop: 24, borderTop: '1px solid #e0d9c8' }}>
            <div style={svcEyebrow}>Explore More</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px', marginBottom: 14 }}>
              {others.map((o) => (
                <a key={o.slug} href={`/${o.slug}`} onClick={(e) => { e.preventDefault(); svcNav(`/${o.slug}`); }} style={svcLink}>{o.name} &rarr;</a>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px' }}>
              {[['Plano', 'plano'], ['Frisco', 'frisco'], ['McKinney', 'mckinney'], ['Allen', 'allen']].map(([c, sl]) => (
                <a key={sl} href={`/landscaping-${sl}-tx`} onClick={(e) => { e.preventDefault(); svcNav(`/landscaping-${sl}-tx`); }} style={{ ...svcLink, color: '#6b4f35' }}>{s.name} in {c} &rarr;</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimate form + CTA + Footer */}
      {window.HomeContactForm && <HomeContactForm />}
      {window.CTABanner && <CTABanner setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  );
};

Object.assign(window, { ServicePage, SERVICE_DATA, SERVICE_BY_SLUG });
