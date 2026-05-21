// Blog.jsx — Blog Page (index + detail view)
//
// Each post's `body` is an array of blocks. Strings are rendered as paragraphs
// (use "**text**" wrapping for an inline subheading). Objects use a typed format:
//   { type: 'h2' | 'h3' | 'h4' | 'p', text: '...' }
//   { type: 'ul', items: ['...', '...'] }   // supports "**Lead-in:** rest" markup
//   { type: 'img', src: '...', alt: '...' }

const BLOG_POSTS = [
  {
    slug: 'comprehensive-landscaping-services-richardson-tx',
    title:
      'Comprehensive Landscaping Services for Homeowners in Richardson TX: Lawn Care, Irrigation, and Outdoor Living Solutions',
    excerpt:
      'A homeowner’s guide to the core landscaping services that keep Richardson yards healthy year-round — lawn maintenance, irrigation, tree and shrub care, lighting, and outdoor living design.',
    image: '../../assets/blog-richardson-yard.jpg',
    date: 'May 2026',
    category: 'Homeowner Guides',
    readTime: '10 min read',
    body: [
      { type: 'p', text: 'Homeowners in Richardson, TX can access a range of landscaping services that enhance outdoor spaces and boost property value. This article outlines core services — lawn maintenance, irrigation installation, tree and shrub care, and landscape lighting — so you can make informed choices. Many residents find yard upkeep challenging given Texas’s climate; professional landscapers provide tailored solutions. This guide covers service types, benefits, and how they can improve your outdoor living areas.' },

      { type: 'h2', text: 'Key Takeaways' },
      { type: 'ul', items: [
        'Professional lawn maintenance in Richardson TX includes mowing, fertilization, weed control, and aeration for healthy grass.',
        'Irrigation system installation improves water efficiency by delivering precise moisture to plants, reducing waste and water bills.',
        'Tree and shrub care involves pruning, fertilization, and pest management to support landscape health and longevity.',
        'Landscape lighting enhances outdoor safety and aesthetics with pathway lights, spotlights, and string lights.',
        'Outdoor living designs incorporate native plants and sustainable elements to create low-maintenance, environmentally friendly spaces.',
        'Seasonal lawn care adjustments, such as watering and fertilizing, help maintain vibrant yards year-round in Richardson.',
        'Professional irrigation and lighting installations offer customized, energy-efficient solutions that increase property value.',
        'Adding patios, fire pits, and water features can significantly improve outdoor space functionality and enjoyment.',
      ]},

      { type: 'h2', text: 'What Lawn Maintenance Services Are Available in Richardson TX?' },
      { type: 'p', text: 'Lawn maintenance in Richardson covers tasks focused on keeping turf healthy and attractive. Typical services include mowing, fertilization, weed control, and aeration. Regular care improves appearance, supports grass growth, and maintains soil health. Professional lawn care helps ensure lawns stay lush and vibrant year-round.' },

      { type: 'h3', text: 'Which Lawn Care Tasks Are Included in Professional Maintenance?' },
      { type: 'p', text: 'Professional lawn maintenance covers key tasks that support healthy turf. These typically include:' },
      { type: 'ul', items: [
        '**Mowing:** Regular mowing helps maintain the desired height of grass, promoting healthy growth and preventing weeds.',
        '**Fertilization:** Applying the right fertilizers at appropriate times ensures that the lawn receives essential nutrients for optimal growth.',
        '**Weed Control:** Effective weed management prevents unwanted plants from competing with grass for resources.',
        '**Aeration:** Aerating the soil improves air circulation and nutrient absorption, leading to a healthier lawn.',
      ]},
      { type: 'p', text: 'These tasks keep lawns attractive and boost overall curb appeal.' },

      { type: 'h3', text: 'How Often Should Homeowners Schedule Lawn Maintenance?' },
      { type: 'p', text: 'The frequency of maintenance depends on grass type, seasonal growth patterns, and specific lawn conditions. Generally, homeowners should consider scheduling maintenance services:' },
      { type: 'ul', items: [
        'Weekly during the growing season (spring and summer) to keep grass at an optimal height.',
        'Bi-weekly in the fall when growth slows down.',
        'Monthly during winter months when grass is dormant.',
      ]},
      { type: 'p', text: 'Adjusting the schedule with the seasons helps keep lawns healthy and well-maintained all year.' },

      { type: 'img', src: '../../assets/blog-irrigation.jpg', alt: 'Sprinkler and drip irrigation systems delivering water to a Richardson, TX yard and flower bed' },

      { type: 'h3', text: 'How Does Irrigation System Installation Improve Water Efficiency in Richardson Homes?' },
      { type: 'p', text: 'Irrigation system installation helps homeowners improve water efficiency by delivering water directly to plants and reducing waste. Properly designed systems ensure gardens receive the right moisture levels, which can lower overall water use — important in drought-prone areas.' },
      { type: 'p', text: 'For homeowners seeking reliable and efficient landscape solutions, exploring services from top landscaping companies can provide significant benefits. These professionals offer expertise in system design and installation, ensuring optimal water usage and plant health.' },

      { type: 'h3', text: 'What Types of Irrigation Systems Are Best for Richardson TX Lawns?' },
      { type: 'p', text: 'Several irrigation systems work well in Richardson’s climate, including:' },
      { type: 'ul', items: [
        '**Drip Irrigation:** This system delivers water directly to the roots of plants, reducing evaporation and runoff.',
        '**Sprinkler Systems:** These systems can cover large areas and are ideal for lawns and flower beds.',
        '**Soaker Hoses:** These hoses allow water to seep out slowly, providing consistent moisture to garden beds.',
      ]},
      { type: 'p', text: 'Choose the system that matches your landscape layout and plant types.' },

      { type: 'h3', text: 'What Are the Benefits of Professional Irrigation Installation?' },
      { type: 'p', text: 'Hiring professionals for irrigation installation offers several advantages:' },
      { type: 'ul', items: [
        '**Expertise:** Professionals understand the best practices for efficient water delivery and can design systems tailored to specific landscapes.',
        '**Time Savings:** Professional installation saves homeowners time and effort, allowing them to focus on other aspects of their property.',
        '**Long-term Cost Savings:** Efficient irrigation systems can lead to lower water bills and healthier plants, ultimately saving money in the long run.',
      ]},

      { type: 'h2', text: 'What Tree and Shrub Care Services Support Healthy Landscapes in Richardson TX?' },
      { type: 'p', text: 'Tree and shrub care services help preserve the health and appearance of landscapes in Richardson. Common services include pruning, fertilization, and pest management, all aimed at extending the life and vitality of plantings.' },

      { type: 'h3', text: 'How Are Trees and Shrubs Pruned and Maintained for Optimal Growth?' },
      { type: 'p', text: 'Proper pruning techniques support healthy growth in trees and shrubs. Key practices include:' },
      { type: 'ul', items: [
        '**Thinning:** Removing excess branches to improve air circulation and light penetration.',
        '**Shaping:** Trimming to maintain a desired shape and size, enhancing the aesthetic appeal.',
        '**Deadheading:** Removing spent flowers to encourage new blooms and prevent disease.',
      ]},
      { type: 'p', text: 'These practices help trees and shrubs thrive and add value to the landscape.' },

      { type: 'h3', text: 'What Seasonal Care Is Recommended for Richardson TX Plantings?' },
      { type: 'p', text: 'Seasonal care is important for plant health. Recommended actions include:' },
      { type: 'ul', items: [
        '**Spring:** Fertilization and pruning to promote new growth.',
        '**Summer:** Regular watering and pest management to protect against heat stress.',
        '**Fall:** Preparing plants for winter by mulching and reducing watering as temperatures drop.',
      ]},
      { type: 'p', text: 'Following seasonal guidelines supports plant health through the year.' },

      { type: 'img', src: '../../assets/blog-landscape-lighting.jpg', alt: 'Landscape lighting and string lights illuminating a backyard patio and stone walkway in the evening' },

      { type: 'h2', text: 'How Can Landscape Lighting Installation Enhance Outdoor Living Spaces in Richardson?' },
      { type: 'p', text: 'Landscape lighting improves safety and highlights outdoor features. Proper lighting brightens pathways and entrances, and it adds atmosphere to gardens and patios — making backyards more inviting for evening use.' },

      { type: 'h3', text: 'What Types of Landscape Lighting Are Popular for Richardson Homes?' },
      { type: 'p', text: 'Popular landscape lighting types include:' },
      { type: 'ul', items: [
        '**Pathway Lights:** These lights guide visitors along walkways and driveways.',
        '**Spotlights:** Used to highlight specific features such as trees, sculptures, or architectural elements.',
        '**String Lights:** Ideal for creating a cozy atmosphere in outdoor seating areas.',
      ]},
      { type: 'p', text: 'Each lighting type serves a distinct purpose and can be placed to enhance your outdoor design.' },

      { type: 'h3', text: 'What Are the Benefits of Professional Landscape Lighting Design?' },
      { type: 'p', text: 'Professional landscape lighting design provides several benefits:' },
      { type: 'ul', items: [
        '**Customized Solutions:** Experts can create lighting plans that highlight the unique features of a property.',
        '**Energy Efficiency:** Professionals can recommend energy-efficient lighting options that reduce electricity costs.',
        '**Increased Property Value:** Well-designed lighting can enhance curb appeal and increase the overall value of a home.',
      ]},

      { type: 'h2', text: 'What Outdoor Living Design Services Are Offered to Transform Richardson Backyards?' },
      { type: 'p', text: 'Outdoor living design services create usable, attractive spaces that extend your home’s living area outdoors. Services often include patio design, outdoor kitchens, and garden installations.' },

      { type: 'h3', text: 'How Do Outdoor Living Designs Incorporate Native Plants and Sustainable Elements?' },
      { type: 'p', text: 'Using native plants in designs brings clear advantages:' },
      { type: 'ul', items: [
        '**Low Maintenance:** Native plants are adapted to the local climate and require less water and care.',
        '**Biodiversity:** They support local wildlife, including pollinators and beneficial insects.',
        '**Aesthetic Appeal:** Native plants can create beautiful, natural landscapes that reflect the local environment.',
      ]},
      { type: 'p', text: 'Sustainable elements like rain gardens and permeable paving can be added to support environmental health.' },

      { type: 'h3', text: 'What Features Can Homeowners Add to Enhance Their Outdoor Spaces?' },
      { type: 'p', text: 'Homeowners can add features such as:' },
      { type: 'ul', items: [
        '**Patios:** Creating a designated area for outdoor dining and relaxation.',
        '**Fire Pits:** Adding warmth and ambiance for evening gatherings.',
        '**Water Features:** Incorporating fountains or ponds for a tranquil atmosphere.',
      ]},
      { type: 'p', text: 'These additions can raise functionality and enjoyment of outdoor areas.' },

      { type: 'h2', text: 'What Seasonal Lawn Care Tips Help Richardson Homeowners Maintain Healthy Yards?' },
      { type: 'p', text: 'Seasonal lawn care keeps yards healthy year-round. Homeowners should tweak routines as the seasons change to maintain optimal lawn condition.' },

      { type: 'h3', text: 'How Should Lawn Care Adjust Across Spring, Summer, Fall, and Winter?' },
      { type: 'p', text: 'Lawn care adjustments include:' },
      { type: 'ul', items: [
        '**Spring:** Focus on fertilization and weed control as growth resumes.',
        '**Summer:** Increase watering frequency to combat heat stress.',
        '**Fall:** Prepare the lawn for winter by aerating and overseeding.',
        '**Winter:** Limit maintenance but monitor for snow and ice damage.',
      ]},
      { type: 'p', text: 'Adapting care to each season helps maintain a vibrant lawn year-round.' },

      { type: 'h3', text: 'What Are Best Practices for Watering and Fertilizing in Richardson TX?' },
      { type: 'p', text: 'Best practices include:' },
      { type: 'ul', items: [
        '**Watering Early:** Watering in the early morning reduces evaporation and promotes deep root growth.',
        '**Fertilizing Appropriately:** Using slow-release fertilizers ensures that nutrients are available over time.',
        '**Monitoring Rainfall:** Adjusting watering schedules based on rainfall helps conserve water and prevent overwatering.',
      ]},
      { type: 'p', text: 'Following these practices leads to a healthier, more resilient lawn.' },

      { type: 'h2', text: 'Frequently Asked Questions' },

      { type: 'h4', text: 'What are the costs associated with professional landscaping services in Richardson, TX?' },
      { type: 'p', text: 'Costs vary by project scope, property size, and required services. On average, expect to pay $50 to $150 per hour for labor, plus materials and equipment. Larger projects like irrigation installation or outdoor living designs can range from a few hundred to several thousand dollars. It’s wise to get multiple quotes from local companies to compare value.' },

      { type: 'h4', text: 'How can homeowners choose the right landscaping company in Richardson?' },
      { type: 'p', text: 'Start by researching local companies, reading online reviews, and asking for recommendations. Verify licenses and insurance to confirm professionalism. Request portfolios of past work and detailed estimates. A reputable company will offer consultations to discuss ideas and provide tailored solutions that fit your needs and budget.' },

      { type: 'h4', text: 'What maintenance is required for outdoor living features like patios and fire pits?' },
      { type: 'p', text: 'Regular cleaning removes debris, leaves, and dirt to keep features functional. Seal patios every few years to protect against stains and weather damage. Inspect fire pits for cracks or wear and clear ash after use. Maintain surrounding landscaping to prevent overgrowth that could encroach on these features.' },

      { type: 'h4', text: 'Are there eco-friendly landscaping options available in Richardson?' },
      { type: 'p', text: 'Yes. Options include using native plants that need less water, applying xeriscaping techniques to reduce irrigation, and installing rain gardens to manage runoff. Choose organic fertilizers and pest control to limit chemicals, and use permeable pavers for sustainable hardscaping.' },

      { type: 'h4', text: 'How can seasonal changes affect landscaping needs in Richardson?' },
      { type: 'p', text: 'Seasonal shifts change landscaping priorities. In spring, focus on fertilization and weed control. Summer needs more frequent watering to handle heat. Fall is ideal for aeration and overseeding to prepare for winter. Winter requires limited maintenance but monitoring for snow and ice damage is important. Adjusting practices by season keeps outdoor spaces healthy.' },

      { type: 'h4', text: 'What are the benefits of incorporating hardscaping into landscaping designs?' },
      { type: 'p', text: 'Hardscaping adds functionality and visual structure. Elements like patios, walkways, and retaining walls create usable outdoor areas and can help control erosion and improve drainage. Combined with softscaping, hardscaping creates a balanced, inviting landscape.' },

      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Investing in professional landscaping services in Richardson, TX can improve outdoor spaces, raise property value, and create a welcoming setting for family and friends. From tailored lawn care and efficient irrigation to thoughtful lighting and outdoor living designs, these services address practical needs and enhance enjoyment. Choosing the right landscaping company helps ensure your outdoor areas thrive year-round. Discover how our expert team can transform your yard into a stunning oasis today.' },
    ],
  },
  {
    slug: 'spring-planting-north-texas',
    title: 'A Spring Planting Guide for North Texas Yards',
    excerpt:
      'When to plant, what to plant, and how to set your beds up for a season of color — written for the unique soil and sun of the DFW area.',
    image: '../../assets/garden-beds.webp',
    date: 'March 2026',
    category: 'Seasonal Care',
    readTime: '6 min read',
    body: [
      "Spring in North Texas is short, generous, and unpredictable. One week you're pulling on a jacket; the next, you're squinting at a 90-degree sky. For homeowners in Richardson, Plano, Frisco, and the rest of the DFW area, that small window between the last freeze and the first true heat is where the year's garden is really made.",
      "Here's how we think about spring planting at Moss Creek — what we recommend to our clients, and what we plant in our own yards.",
      "**Start with the soil, not the plant.**",
      "DFW soils swing between heavy black clay and pockets of decomposed limestone. Before anything goes in the ground, we work the bed with compost and expanded shale to give roots a place to actually breathe. Skip this step and even the toughest natives will struggle.",
      "**Plant for the heat that's coming, not the weather that's here.**",
      "It's tempting to fill beds with tender annuals in March, but Texas summer arrives fast. We lean on heat-proven perennials — salvias, gaura, lantana, agastache, Mexican bush sage — that look gentle in April and hold their own through August. Mix in native grasses like little bluestem or muhly for movement.",
      "**Mulch deeply, water deeply.**",
      "Two to three inches of hardwood mulch insulates roots from the heat and keeps your water bill honest. When you water, water long and slow — short daily sprinkles train roots to stay shallow and thirsty.",
      "**Plan for shade now.**",
      "If your yard cooks in July, this is the year to plant the tree that will save it. Live oaks, cedar elms, and lacebark elms are slow but worth every season.",
      "If you want help mapping out a planting plan for your yard, we offer free walk-throughs across the DFW area. We'll tell you honestly what will thrive and what won't waste your money.",
    ],
  },
  {
    slug: 'choosing-stone-dfw-hardscape',
    title: 'Choosing the Right Stone for a DFW Hardscape',
    excerpt:
      'Patios, walls, and walkways live or die by the stone you choose. A field guide to what holds up in Texas heat — and what quietly falls apart.',
    image: '../../assets/pool-hardscape.webp',
    date: 'February 2026',
    category: 'Hardscaping',
    readTime: '5 min read',
    body: [
      "A patio is a long conversation between you, the weather, and the ground underneath. The wrong stone can crack within a season; the right one will still be there for your grandkids. After three generations of building in North Texas, here's what we've learned.",
      "**Flagstone: the workhorse.**",
      "Oklahoma flagstone is our most-used patio material for a reason. It's quarried close enough to keep costs reasonable, comes in warm browns and creams that play well with native plantings, and handles thermal expansion without cracking. Set it on a compacted base with proper joints and it will outlast the house.",
      "**Limestone: warm, but watch the polish.**",
      "Texas limestone is gorgeous around pools and retaining walls — soft tones, easy to work with, locally sourced. But polished or honed limestone can get slick when wet. For pool decks, we specify a chiseled or natural finish and seal it against pool chemicals.",
      "**Concrete pavers: budget-friendly, with caveats.**",
      "Modern pavers have come a long way. For driveways and large patios where budget matters, they're a smart choice. The key is base prep — pavers don't fail from above, they fail from below. We over-engineer the base every time.",
      "**What to avoid.**",
      "Soft sandstone in high-traffic areas. Anything described as 'pool coping' that isn't rated for chlorine. And mortared joints in a region where the clay moves an inch with the seasons — flexible polymeric sand is almost always the better answer.",
      "If you're weighing options for a patio, walkway, or wall, we walk you through samples in person. Stone looks different in a brochure than it does in your yard at 6pm in July.",
    ],
  },
  {
    slug: 'caring-for-mature-texas-oaks',
    title: 'Caring for Mature Texas Oaks: What Every Homeowner Should Know',
    excerpt:
      'Live oaks and red oaks are the quiet backbone of DFW neighborhoods. Here’s how to keep them healthy — and avoid the mistakes that quietly kill them.',
    image: '../../assets/tree-care.webp',
    date: 'January 2026',
    category: 'Tree Care',
    readTime: '7 min read',
    body: [
      "If you have a mature oak in your yard, you have something money can't easily replace. A 60-year-old live oak adds real value to a property — shade that cools the house, structure that grounds the landscape, and beauty that no nursery tree can mimic for another half-century.",
      "Most homeowners never think about their oaks until something is wrong. By then, it's often too late. Here's what we tell every client with mature trees.",
      "**Prune in the right window.**",
      "In North Texas, oak wilt is the threat that keeps arborists up at night. The pathogen spreads through fresh wounds, especially in spring. We prune oaks in mid-winter (December through February) or in the dead of summer (July through August), and we seal every cut on a red oak or live oak immediately.",
      "**Mulch like the forest does.**",
      "An oak's feeder roots are in the top 12 inches of soil, extending well past the drip line. Lawn and aggressive irrigation right up to the trunk is one of the slowest, surest ways to weaken a mature tree. A wide ring of natural mulch — three inches deep, kept off the trunk itself — mimics the forest floor and lets roots breathe.",
      "**Don't bury the root flare.**",
      "Look at the base of your oak. You should see the trunk widen out where it meets the soil. If the trunk goes straight into the ground like a telephone pole, the flare is buried — usually under turf or built-up soil — and the tree is slowly suffocating. Carefully excavating the flare can add decades of life.",
      "**Get a real arborist's eye every few years.**",
      "Storms, drought, construction nearby, root damage from a neighbor's project — mature trees take quiet hits all the time. A trained eye every two or three years catches problems while they're still fixable.",
      "If you have an oak you're worried about, or a tree you've been told 'just needs to come down,' we're happy to take a look. Sometimes removal is the right call. Often, it isn't.",
    ],
  },
];

const BlogListItem = ({ post, onClick, isLast }) => (
  <article style={{
    paddingBottom: isLast ? 0 : 96,
    marginBottom: isLast ? 0 : 96,
    borderBottom: isLast ? 'none' : '1px solid #e0d9c8',
  }}>
    <button
      onClick={onClick}
      style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, textAlign: 'left', display: 'block',
      }}
    >
      <div style={{
        width: '100%', aspectRatio: '3/2', overflow: 'hidden',
        background: '#ede8dc', marginBottom: 28, borderRadius: 4,
      }}>
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block', transition: 'transform 500ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        />
      </div>

      <div style={{
        display: 'flex', gap: 14, alignItems: 'center', marginBottom: 18,
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b8c5a',
        }}>{post.category}</span>
        <span style={{ color: '#c4b99a' }}>·</span>
        <span style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#6b4f35',
          letterSpacing: '0.04em',
        }}>{post.date}</span>
        <span style={{ color: '#c4b99a' }}>·</span>
        <span style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#6b4f35',
          letterSpacing: '0.04em',
        }}>By Moss Creek Team</span>
      </div>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(30px,3.8vw,46px)', fontWeight: 500, color: '#1e3b1e',
        lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 22,
      }}>{post.title}</h2>

      <p style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: 17,
        color: '#3d2b1f', lineHeight: 1.75, marginBottom: 26, maxWidth: 720,
      }}>{post.excerpt}</p>

      <span style={{
        display: 'inline-block',
        fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700,
        letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2d5626',
        borderBottom: '2px solid #2d5626', paddingBottom: 4,
      }}>Read More &rarr;</span>
    </button>
  </article>
);

const BlogIndex = ({ setPost }) => (
  <section style={{ background: '#f4f1eb', padding: '72px 40px 112px' }}>
    <div style={{ maxWidth: 840, margin: '0 auto' }}>
      {BLOG_POSTS.map((post, i) => (
        <BlogListItem
          key={post.slug}
          post={post}
          onClick={() => setPost(post.slug)}
          isLast={i === BLOG_POSTS.length - 1}
        />
      ))}
    </div>
  </section>
);

// Render inline "**lead-in:**" bold markup at the start of list items / paragraphs.
const renderInline = (text) => {
  const m = text.match(/^\*\*(.+?)\*\*(.*)$/);
  if (!m) return text;
  return (
    <>
      <strong style={{ color: '#1e3b1e', fontWeight: 700 }}>{m[1]}</strong>
      {m[2]}
    </>
  );
};

const headingStyles = {
  h2: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(26px,3vw,36px)', fontWeight: 500, color: '#1e3b1e',
    lineHeight: 1.2, marginTop: 56, marginBottom: 18, letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(22px,2.4vw,28px)', fontWeight: 500, color: '#1e3b1e',
    lineHeight: 1.3, marginTop: 40, marginBottom: 14, letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 'clamp(15px,1.5vw,17px)', fontWeight: 700, color: '#1e3b1e',
    lineHeight: 1.4, marginTop: 30, marginBottom: 10, letterSpacing: '0.01em',
  },
};

const paragraphStyle = {
  fontFamily: "'Lora', Georgia, serif", fontSize: 16,
  color: '#3d2b1f', lineHeight: 1.85, marginBottom: 18,
};

const renderBodyParagraph = (block, i) => {
  // Backward-compat: string entries are paragraphs (or H3 if wrapped in **...**)
  if (typeof block === 'string') {
    const isHeading = block.startsWith('**') && block.endsWith('**');
    if (isHeading) {
      return (
        <h3 key={i} style={headingStyles.h3}>{block.replace(/^\*\*|\*\*$/g, '')}</h3>
      );
    }
    return <p key={i} style={paragraphStyle}>{block}</p>;
  }

  switch (block.type) {
    case 'h2':
      return <h2 key={i} style={headingStyles.h2}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i} style={headingStyles.h3}>{block.text}</h3>;
    case 'h4':
      return <h4 key={i} style={headingStyles.h4}>{block.text}</h4>;
    case 'p':
      return <p key={i} style={paragraphStyle}>{renderInline(block.text)}</p>;
    case 'ul':
      return (
        <ul key={i} style={{
          margin: '0 0 22px 0', paddingLeft: 22,
          fontFamily: "'Lora', Georgia, serif", fontSize: 16,
          color: '#3d2b1f', lineHeight: 1.85,
        }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ marginBottom: 10, paddingLeft: 6 }}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case 'img':
      return (
        <figure key={i} style={{ margin: '36px 0 32px 0' }}>
          <img
            src={block.src}
            alt={block.alt || ''}
            style={{
              width: '100%', height: 'auto', display: 'block',
              borderRadius: 4, boxShadow: '0 2px 12px rgba(30,59,30,0.12)',
            }}
          />
          {block.caption && (
            <figcaption style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: 13, fontStyle: 'italic',
              color: '#6b4f35', textAlign: 'center', marginTop: 10,
            }}>{block.caption}</figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
};

const BlogPost = ({ post, setPost, setPage }) => (
  <section style={{ background: '#f4f1eb', padding: '64px 40px 100px' }}>
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <button onClick={() => setPost(null)} style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        background: 'none', border: 'none', color: '#2d5626',
        cursor: 'pointer', padding: 0, marginBottom: 32,
      }}>&larr; All Articles</button>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
        <span style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a',
        }}>{post.category}</span>
        <span style={{ color: '#c4b99a' }}>·</span>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#6b4f35' }}>{post.date}</span>
        <span style={{ color: '#c4b99a' }}>·</span>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#6b4f35' }}>{post.readTime}</span>
      </div>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(34px,4.5vw,52px)', fontWeight: 400, color: '#1e3b1e',
        lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28,
      }}>{post.title}</h1>

      <img
        src={post.image}
        alt={post.title}
        style={{
          width: '100%', height: 'clamp(260px,40vw,420px)', objectFit: 'cover',
          borderRadius: 4, display: 'block', marginBottom: 40,
          boxShadow: '0 2px 12px rgba(30,59,30,0.12)',
        }}
      />

      <div>
        {post.body.map(renderBodyParagraph)}
      </div>

      <div style={{
        marginTop: 56, padding: '32px 32px',
        background: '#ede8dc', border: '1px solid #c4b99a', borderRadius: 4,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 12,
        }}>Ready to talk about your yard?</div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 400, color: '#1e3b1e',
          lineHeight: 1.25, marginBottom: 20,
        }}>Free walk-throughs across the DFW area.</h3>
        <button onClick={() => { setPage('Contact'); setTimeout(() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120); }} style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          background: '#2d5626', color: '#f4f1eb',
          border: '2px solid #2d5626', borderRadius: 4,
          padding: '14px 32px', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(30,59,30,0.22)',
        }}>Get a Free Estimate</button>
      </div>
    </div>
  </section>
);

const BlogPage = ({ setPage, activeSlug = null, setActiveSlug }) => {
  // Controlled when caller provides activeSlug/setActiveSlug, uncontrolled otherwise.
  const [internalSlug, setInternalSlug] = React.useState(null);
  const slug = setActiveSlug ? activeSlug : internalSlug;
  const updateSlug = setActiveSlug || setInternalSlug;
  const activePost = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <div style={{ paddingTop: 72 }}>
      {activePost ? (
        <div style={{ background: '#1e3b1e', padding: '40px 40px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b8c5a' }}>
              The Moss Creek Journal
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: '#1e3b1e', padding: '88px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6b8c5a', marginBottom: 18 }}>
              The Moss Creek Journal
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(38px,5vw,62px)', fontWeight: 400,
              color: '#f4f1eb', lineHeight: 1.1, letterSpacing: '-0.02em',
              marginBottom: 22,
            }}>
              Expert Landscaping Tips from <em>Three Generations</em> in DFW
            </h1>
            <p style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: 17, fontStyle: 'italic',
              color: 'rgba(244,241,235,0.78)', lineHeight: 1.7, maxWidth: 680, margin: '0 auto',
            }}>
              Practical guidance from the field — seasonal planting advice for North Texas yards,
              hardscape know-how for the heat, and honest answers about caring for the trees, soil,
              and stone that make a home feel rooted.
            </p>
          </div>
        </div>
      )}

      {activePost
        ? <BlogPost post={activePost} setPost={updateSlug} setPage={setPage} />
        : <BlogIndex setPost={updateSlug} />}

      <Footer setPage={setPage} />
    </div>
  );
};

Object.assign(window, { BlogPage, BLOG_POSTS });
