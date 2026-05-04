// Contact.jsx — Contact Page & CTA Section
const ContactPage = () => {
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
            { icon: '✉', label: 'Email', val: 'info@mosscreeklandscaping.com' },
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

        {/* Right — GHL embedded form */}
        <div id="estimate-form" style={{ scrollMarginTop: 100 }}>
          <p style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: 12.5, fontStyle: 'italic',
            color: '#6b4f35', lineHeight: 1.55, marginBottom: 14,
            padding: '12px 14px', background: '#ede8dc', border: '1px solid #c4b99a', borderRadius: 4,
          }}>
            By submitting this form you agree to receive SMS messages from Moss Creek Landscaping, LLC. Message and data rates may apply. Reply STOP to opt out.
          </p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/vjiK7W9QloqY9ug2d8qm"
            style={{ width: '100%', height: 933, border: 'none', borderRadius: 4 }}
            id="inline-vjiK7W9QloqY9ug2d8qm"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Lead Intake Form"
            data-height="933"
            data-layout-iframe-id="inline-vjiK7W9QloqY9ug2d8qm"
            data-form-id="vjiK7W9QloqY9ug2d8qm"
            title="Lead Intake Form"
          />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContactPage });
