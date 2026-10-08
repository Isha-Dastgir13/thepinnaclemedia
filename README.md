# The Pinnacle Media – Homepage Rebuild

A high-performance React homepage for **The Pinnacle Media**, combining the brand identity, exact color scheme, assets, and copy of the original site ([thepinnacle.media](https://www.thepinnacle.media/)) with the layout, spacing, typography feel, and section hierarchy inspired by the Vercel design ([pinnaclemedia-one.vercel.app](https://pinnaclemedia-one.vercel.app/)).

Built specifically with a **WordPress-convertible structure** (standard containers, grids, flexbox, CSS variables, pure CSS marquees, no WebGL/complex JS dependencies).

---

## 🚀 Quick Start & Run Instructions

Ensure you have Node.js (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (starts at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🎨 Color Palette & Source Elements (thepinnacle.media)

All colors are defined as CSS variables in `src/styles/variables.css`. Below is the exact origin of each hex value from `https://www.thepinnacle.media/`:

| Color Token | Hex / Value | Origin Element on thepinnacle.media |
| :--- | :--- | :--- |
| `--pm-brand-gradient` | `linear-gradient(90deg, #141389 0%, #03c1fc 100%)` | Main section headings: `$100M Ad spends`, `Growth Partners`, `When The Funnel...`, `We’ve served over 3000+ clients`, `Don't hesitate to reach out`. (`.bg-gradient-to-r.from-[#141389].to-[#03c1fc]`) |
| `--pm-hero-gradient` | `linear-gradient(180deg, #03118c 50%, #00a9e0 100%)` | Main Hero H1 accent words: **"don't settle"**. (`.bg-gradient-to-b.from-[#03118c].to-[#00a9e0]`) |
| `--pm-cta-gradient` | `linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)` | Primary CTA buttons: "Talk to Our Team", "Book Free Consultation". (`.bg-gradient-to-r.from-[#0072ff].to-[#00c6ff]`) |
| `--pm-cta-text-gradient` | `linear-gradient(90deg, #0C3BFB 0%, #61E5FF 100%)` | Secondary Hero CTA text: "See How we Work". (`.bg-gradient-to-r.from-[#0C3BFB].to-[#61E5FF]`) |
| `--pm-metric-gradient` | `linear-gradient(180deg, #45DDF1 0%, #4128FF 100%)` | Results Stats numbers: `24x7`, `37%`, `4.6s`, `68% revenue`. (`.bg-gradient-to-b.from-[#45DDF1].to-[#4128FF]`) |
| `--pm-nav-gradient` | `linear-gradient(45deg, rgba(18,140,126,0.7), rgba(52,94,235,0.75))` | Floating pill header container backdrop. (`.bg-[linear-gradient(45deg,rgba(18,140,126,0.5),rgba(52,94,235,0.5))]`) |
| `--pm-whatsapp-gradient` | `linear-gradient(to top, #0C3BFB 0%, #128C7E 100%)` | Header WhatsApp button. (`.bg-gradient-to-t.from-[#0C3BFB].to-[#128C7E]`) |
| `--pm-telegram-gradient` | `linear-gradient(90deg, #0088cc 0%, #005f99 100%)` | Header Telegram button. (`.bg-gradient-to-r.from-[#0088cc].to-[#005f99]`) |
| `--pm-blue` | `#0072ff` / `#155dfc` | Secondary button text, icons, service tags, active states. (`.text-[#0072ff]`, `.text-blue-600`) |
| `--pm-navy-dark` | `#0f1274` | Impact statement strip and footer background. (Tailwind `data-theme="night"` / `.bg-night`) |
| `--pm-bg-white` | `#ffffff` | Primary section backgrounds and cards. (`.bg-white`) |
| `--pm-bg-wash` | `#f4f7ff` | Subtle contrast section background for Stats and Testimonials. (`data-theme="wash"`) |
| `--pm-bg-gray` | `#f8f9fa` | Secondary CTA button background and office address cards. (`.bg-[#f8f9fa]`) |
| `--pm-bg-gray-alt` | `#f3f4f6` | Client spend marquee cards, partner cards, and service bullet containers. (Tailwind `.bg-gray-100`) |
| `--pm-text-ink` | `#0b0d1a` | Main high-contrast headings and subtitles. (`.text-ink`, `.text-gray-900`) |
| `--pm-text-muted` | `#4a5565` | Secondary body text and bullet points. (Tailwind `.text-gray-600`) |
| `--pm-border-light` | `#e5e7eb` | Standard card and container borders. (Tailwind `.border-gray-200`) |

---

## 🔤 Font Reference

- **Font Family**: `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Weights Loaded**: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
- **Source**: Google Fonts `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />`
- **Matching**: Identical to original Next.js font stack (`--font-inter`).

---

## 📦 Asset Inventory (All Stored Locally in `/public/assets`)

All 86 assets were directly downloaded and verified against the live servers:

1. **Brand & Logos**:
   - `/assets/footer-logo-v2.png` (Original Pinnacle mountain logo)
   - `/assets/wordmark-white.png`, `/assets/wordmark-ink.png`, `/assets/favicon.png`
2. **Client Spend Marquee Logos**:
   - `/assets/spends/bhs.png`, `cured.png`, `ES.png`, `ghar.png`, `histrips.png`, `HOA.png`, `natures-sunrise.png`, `obsessive.png`, `old-money.png`, `sana.png`
3. **Growth Partners**:
   - `/assets/logos/meta.png`, `google.png`, `tiktok.png`, `snapchat-v1.png`, `skala-media.png`, `suits-finnance.png`, `whop.png`, `ooptics.png`, `incogniton.png`, `growthmodo.png`, `slash.png`, `ecover-solutions.png`, `swaped.png`, `nexcale.png`
4. **Client Grid (3000+ Brands)**:
   - `/assets/home/logos/0001.png` through `00015.png` (15 real client logos)
5. **Feature Icons & Backgrounds**:
   - `/assets/home/trends.svg`, `user.svg`, `map.svg`, `reload.svg`, `compas.svg`, `check.svg`, `time.svg`, `coins.svg`, `headphone.svg`
   - `/assets/reach-out-bg.svg`, `/assets/footer-bg.svg`, `/assets/home/creative-bg.svg`
6. **UGC Ad Creatives (Ads, not content)**:
   - `/assets/ugc/image-1.jpeg`, `image-2.jpeg`, `image-03.jpeg`, `image-4.jpeg`, `image-5.png`, `image-6.png`, `image-7.png`, `image-8.jpeg`
   *(Note: Verified that the 3rd ad creative on the live server is named `image-03.jpeg`, and items 5, 6, 7 are `.png`)*.
7. **Testimonial Posters & Videos**:
   - Posters: `/assets/posters/testimonial-1.jpg` through `testimonial-6.jpg`
   - Videos: `/assets/videos/Testimonial-1.mp4` through `Testimonial-6.mp4`
   *(Set with `preload="none"`, inline play, no autoplay, no modal).*
8. **Founders & Team**:
   - `/assets/about/founders-v2.png` (Swarith & Ashish)
   - `/assets/about/hero.JPG` (Team photo)
9. **Hero Videos & Media**:
   - `/assets/home/home-hero-1280.webm` (Sky video)
   - `/assets/creative-720.mp4` & `/assets/posters/creative.jpg` (Creative reel video card)
10. **Social Media**:
    - `/assets/instagram.jpg`, `/assets/linkedin.png`, `/assets/facebook.png`, `/assets/x-v1.png`

---

## 🛠️ WordPress Conversion Guide & Tips

This site was engineered to map 1:1 into WordPress page builders (Elementor or Gutenberg Blocks):

### 1. Global CSS Variables
Copy the contents of `src/styles/variables.css` into **WordPress Customizer > Additional CSS** or configure them directly in **Elementor Site Settings > Global Colors & Fonts**.

### 2. Layout Structure
- Every section is wrapped in `.pm-section` with an inner `.pm-container` capped at `1200px` (`max-width: var(--pm-container-max)`).
- In Elementor: Use **Container (Flexbox/Grid)** with `Content Width: Boxed (1200px)`.

### 3. Pure CSS Marquees
The scrolling client spend and growth partner marquees use pure CSS (`@keyframes pm-marquee-scroll`).
- In WordPress: Add the `.pm-marquee-wrapper` and `.pm-marquee-track` CSS into your child theme or Customizer, then output the logos inside a standard HTML widget or Elementor Container with two duplicated loop sets.

### 4. Inline Testimonial Videos
- Each testimonial uses standard HTML5 `<video controls preload="none" poster="..." src="...">`.
- In WordPress: Use the standard Video block / Elementor Video Widget configured with **Self-hosted video**, **Custom Poster Image**, and **Autoplay: Off**.

### 5. Embedded Slots
Two clearly commented embed slots are provided in the code:
- **Slot 1 (Hero)**: `src/components/Hero.jsx` (for Elementor Video Lightbox or HTML embed)
- **Slot 2 (Contact)**: `src/components/ContactSection.jsx` (for Calendly iframe `https://calendly.com/thepinnaclemedia/book-a-call?hide_event_type_details=1&hide_gdpr_banner=1` or WordPress contact shortcode).

### 6. Tricky Things to Keep in Mind for WordPress
1. **Sticky Pill Header**:
   - The original floating pill header uses `backdrop-filter: blur(16px)` and `linear-gradient(...)`. In Elementor Pro, set Header sticky to `Top`, and apply the backdrop blur in the container's Custom CSS tab.
2. **Text Gradients**:
   - Elementor does not natively support text gradient clips in standard heading typography settings. Use the `.pm-gradient-text` utility class via Custom CSS (`background-clip: text; -webkit-background-clip: text; color: transparent;`).
3. **Horizontal Scroll Snap (Ads Gallery)**:
   - For Gutenberg or Elementor, keep `overflow-x: auto` and `scroll-snap-type: x mandatory` on the gallery row container so mobile users get the native app-like swipe feel without needing Swiper.js.
