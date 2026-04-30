// Contact.jsx — Contact Page & CTA Section
const ContactPage = () => {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', address: '', service: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', fontFamily: "'Lora', Georgia, serif", fontSize: 15, color: '#3d2b1f',
    background: '#f4f1eb', border: '1.5px solid #c4b99a', borderRadius: 4,
    padding: '12px 14px', outline: 'none', display: 'block',
  };
  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3d2b1f', display: 'block', marginBottom: 6,
  };

  return (
    <section style={{ background: '#f4f1eb', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

        {/* Left — info */}
        <div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 14 }}>Get in Touch</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(32px,4vw,48px)', fontWeight: 400, color: '#1e3b1e', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Let's talk about<br />your outdoor space.
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, color: '#6b4f35', lineHeight: 1.75, marginBottom: 36 }}>
            We offer free estimates for all projects. Tell us a bit about your space and goals, and we'll be in touch within one business day.
          </p>

          {/* Contact details */}
          {[
            { icon: '📍', label: 'Location', val: 'Richardson, TX & DFW Area' },
            { icon: '📞', label: 'Phone', val: '(972) 800-0155' },
            { icon: '✉', label: 'Email', val: 'regan@mosscreeklandscaping.com' },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
              <span style={{ fontSize: 16, marginTop: 1 }}>{icon}</span>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a89878', marginBottom: 2 }}>{label}</div>
                <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, color: '#3d2b1f' }}>{val}</div>
              </div>
            </div>
          ))}

          {/* Photo */}
          <img src="../../assets/modern-backyard.webp" alt="Our work" style={{ width: '100%', borderRadius: 4, marginTop: 16, objectFit: 'cover', height: 200, display: 'block' }} />
        </div>

        {/* Right — form */}
        <div id="estimate-form" style={{ background: '#ede8dc', border: '1px solid #c4b99a', borderRadius: 4, padding: 36, boxShadow: '0 2px 12px rgba(30,59,30,0.08)', scrollMarginTop: 100 }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#2d5626', marginBottom: 12 }}>Thank you.</div>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, fontStyle: 'italic', color: '#6b4f35', lineHeight: 1.7 }}>We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input style={inputStyle} type="text" placeholder="Jane Smith" value={form.name} onChange={e => handle('name', e.target.value)} required />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input style={inputStyle} type="tel" placeholder="(972) 800-0155" value={form.phone} onChange={e => handle('phone', e.target.value)} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" placeholder="you@email.com" value={form.email} onChange={e => handle('email', e.target.value)} required />
              </div>
              <div>
                <label style={labelStyle}>Property Address</label>
                <input style={inputStyle} type="text" placeholder="1234 Oak St, Richardson, TX 75080" value={form.address} onChange={e => handle('address', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Service Interested In</label>
                <select style={{ ...inputStyle, appearance: 'none' }} value={form.service} onChange={e => handle('service', e.target.value)}>
                  <option value="">Select a service…</option>
                  <option>Custom Garden Design</option>
                  <option>Hardscaping</option>
                  <option>Tree Care</option>
                  <option>Irrigation</option>
                  <option>Multiple / Not Sure</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Tell Us About Your Project</label>
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }} placeholder="Describe your space and what you're hoping to achieve…" value={form.message} onChange={e => handle('message', e.target.value)} />
              </div>
              <button type="submit" style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#2d5626', color: '#f4f1eb',
                border: '2px solid #2d5626', borderRadius: 4,
                padding: '14px', cursor: 'pointer', width: '100%',
              }}>Send My Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContactPage });
