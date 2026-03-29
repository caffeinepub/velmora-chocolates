import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LOGO_SRC =
  "/assets/uploads/screenshot_20260329-143037_instagram-019d3919-b9af-73fe-bc28-c2c9d1775282-1.jpg";

const FLAVOURS = [
  {
    id: 1,
    name: "Biscoff Bliss",
    description: "Smooth chocolate infused with rich biscoff flavor",
    image: "/assets/generated/choc-biscoff.dim_400x400.jpg",
  },
  {
    id: 2,
    name: "Midnight Oreo Truffle",
    description: "Chocolate truffle with crunchy Oreo inside",
    image: "/assets/generated/choc-oreo.dim_400x400.jpg",
  },
  {
    id: 3,
    name: "Nutty Royale Bites",
    description: "Loaded with premium nuts for a royal taste",
    image: "/assets/generated/choc-nutty.dim_400x400.jpg",
  },
  {
    id: 4,
    name: "Brownie Velvet Truffle",
    description: "Soft brownie texture coated in chocolate",
    image: "/assets/generated/choc-brownie.dim_400x400.jpg",
  },
  {
    id: 5,
    name: "Crunchy Chocolate Dreams",
    description: "Perfect mix of crunch and sweetness",
    image: "/assets/generated/choc-crunchy.dim_400x400.jpg",
  },
  {
    id: 6,
    name: "Exotic Fruit Fusion",
    description: "Unique blend of chocolate with fruity flavors",
    image: "/assets/generated/choc-fruit.dim_400x400.jpg",
  },
];

const BOXES = [
  {
    id: 1,
    name: "All Flavours Box",
    detail: "6 chocolates · 1 of each flavour",
    description:
      "A curated journey through every Velmora signature — the perfect introduction to our collection.",
    price: 120,
    image: "/assets/generated/hero-chocolates.dim_900x600.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Any 3 Flavours Box",
    detail: "6 chocolates · choose any 3 flavours",
    description:
      "Pick your three favourites and savour a generous duo of each hand-crafted flavour.",
    price: 120,
    image: "/assets/generated/choc-nutty.dim_400x400.jpg",
    badge: "Customise",
  },
  {
    id: 3,
    name: "Single Flavour Box",
    detail: "5 pieces · your chosen flavour",
    description:
      "Fallen in love with one? Indulge in a full box of your most-adored Velmora creation.",
    price: 100,
    image: "/assets/generated/choc-biscoff.dim_400x400.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Gift Hamper",
    detail: "12 assorted chocolates · perfect gifting",
    description:
      "Our grandest offering — twelve hand-selected pieces nestled in a luxury keepsake box.",
    price: 250,
    image: "/assets/generated/gift-hamper.dim_500x400.jpg",
    badge: "Premium",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Chocolates", href: "#flavours" },
  { label: "Boxes", href: "#boxes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <Star className="w-3 h-3 text-gold fill-[var(--gold)]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.35em] text-gold font-semibold mb-3">
      {children}
    </p>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-espresso text-foreground overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-espresso/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              className="flex items-center gap-3"
              data-ocid="nav.link"
            >
              <img
                src={LOGO_SRC}
                alt="Velmora logo"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--gold)]/40"
              />
              <span className="font-playfair text-lg font-semibold text-gold tracking-wide">
                Velmora
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden p-2 text-muted-foreground hover:text-gold transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.button"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-espresso-mid border-t border-border"
            >
              <nav className="flex flex-col px-6 py-4 gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 vignette pointer-events-none z-10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a35a' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Logo above hero title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6"
              >
                <img
                  src={LOGO_SRC}
                  alt="Velmora"
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-[var(--gold)]/50 shadow-gold"
                />
              </motion.div>
              <SectionLabel>Handcrafted in India</SectionLabel>
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-gold leading-none mb-4">
                Velmora 🍫
              </h1>
              <p className="text-lg sm:text-xl uppercase tracking-[0.18em] text-foreground font-light mb-3">
                Luxury Chocolates Crafted with Love
              </p>
              <p className="text-base text-muted-foreground italic mb-10">
                Indulge in Every Bite
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" data-ocid="hero.primary_button">
                  <Button className="gold-gradient text-[var(--espresso)] font-semibold uppercase tracking-widest text-xs px-8 py-6 rounded-full hover:opacity-90 transition-opacity">
                    Order Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
                <a href="#boxes" data-ocid="hero.secondary_button">
                  <Button
                    variant="outline"
                    className="border-[var(--gold)] text-gold uppercase tracking-widest text-xs px-8 py-6 rounded-full bg-transparent hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    View Our Boxes
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-gold">
                <img
                  src="/assets/generated/hero-chocolates.dim_900x600.jpg"
                  alt="Velmora luxury chocolates"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 bg-espresso-mid/90 backdrop-blur-sm border border-[var(--gold)]/40 rounded-xl px-4 py-3">
                  <p className="text-gold text-xs uppercase tracking-widest font-semibold">
                    Premium Artisan
                  </p>
                  <p className="text-foreground text-sm mt-0.5">
                    Handcrafted with Love
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[var(--gold)]/20 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border border-[var(--gold)]/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Chocolates */}
      <section id="flavours" className="bg-espresso py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Our Creations</SectionLabel>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gold mb-4">
              Our Signature Chocolates
            </h2>
            <GoldDivider />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six extraordinary flavours, each telling its own story. Crafted to
              perfection, designed to be remembered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLAVOURS.map((flavour, i) => (
              <motion.div
                key={flavour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`flavours.item.${i + 1}`}
                className="group bg-espresso-mid border border-border hover:border-[var(--gold)]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-gold"
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-semibold text-gold mb-2">
                    {flavour.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {flavour.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-espresso-mid py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gold leading-tight mb-6">
                About Velmora
              </h2>
              <GoldDivider />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Velmora is a premium chocolate brand born from a passion for
                quality, taste, and happiness. Every chocolate we create is
                handcrafted with care, using the finest ingredients to deliver a
                truly indulgent experience. From our signature Biscoff Bliss to
                the exotic Fruit Fusion, each flavour is thoughtfully designed
                to bring joy with every bite. We believe that great chocolate is
                more than a treat — it is a moment of luxury, a gesture of love,
                and a memory in the making.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { stat: "100%", label: "Handmade" },
                  { stat: "6", label: "Unique Flavours" },
                  { stat: "♥", label: "Crafted with Love" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-espresso border border-[var(--gold)]/20 rounded-xl p-4 text-center"
                  >
                    <p className="font-playfair text-2xl font-bold text-gold mb-1">
                      {item.stat}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-[var(--gold)]/20">
                <img
                  src="/assets/generated/craft-cacao.dim_600x450.jpg"
                  alt="Craft cacao — the heart of Velmora"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-espresso border border-[var(--gold)]/30 rounded-xl p-4 text-center shadow-gold">
                <p className="font-playfair text-3xl font-bold text-gold">
                  100%
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Handmade
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chocolate Boxes / Pricing */}
      <section id="boxes" className="bg-espresso py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Gift &amp; Order</SectionLabel>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gold mb-4">
              Our Chocolate Boxes
            </h2>
            <GoldDivider />
          </div>

          {/* Notice banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 border border-[var(--gold)]/50 bg-[var(--gold)]/5 rounded-xl px-6 py-4 text-center max-w-3xl mx-auto"
            data-ocid="boxes.panel"
          >
            <p className="text-gold text-sm sm:text-base font-medium leading-relaxed">
              🎁{" "}
              <span className="font-semibold">
                We do not sell individual pieces.
              </span>{" "}
              All chocolates are available only in curated boxes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BOXES.map((box, i) => (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`boxes.item.${i + 1}`}
                className="group bg-espresso-mid border border-border hover:border-[var(--gold)]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-gold"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  {box.badge && (
                    <span className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--espresso)] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {box.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                        {box.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-gold">
                        {box.detail}
                      </p>
                    </div>
                    <p className="font-playfair text-2xl font-bold text-gold">
                      ₹{box.price}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {box.description}
                  </p>
                  <a
                    href="#contact"
                    data-ocid={`boxes.primary_button.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[var(--gold)] text-gold uppercase tracking-widest text-xs py-5 rounded-full bg-transparent hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-all duration-200"
                    >
                      Order Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-espresso-mid py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 vignette pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <SectionLabel>Reach Out</SectionLabel>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gold mb-4">
                Get in Touch
              </h2>
              <GoldDivider />
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ready to indulge? Reach out to us — we'd love to craft your
                perfect chocolate experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              <a
                href="mailto:velmora@gmail.com"
                data-ocid="contact.link"
                className="group bg-espresso border border-border hover:border-[var(--gold)]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-[var(--espresso)]" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">
                  Email
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                  velmora@gmail.com
                </p>
              </a>

              <a
                href="tel:9876543210"
                data-ocid="contact.link"
                className="group bg-espresso border border-border hover:border-[var(--gold)]/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-[var(--espresso)]" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">
                  Phone
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  9876543210
                </p>
              </a>

              <div
                data-ocid="contact.card"
                className="bg-espresso border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-[var(--espresso)]" />
                </div>
                <p className="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">
                  Location
                </p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
              >
                <Button className="gold-gradient text-[var(--espresso)] font-semibold uppercase tracking-widest text-xs px-12 py-6 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={LOGO_SRC}
                  alt="Velmora logo"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--gold)]/40"
                />
                <span className="font-playfair text-xl font-semibold text-gold">
                  Velmora
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Handcrafted artisan chocolates made with love and the finest
                ingredients. Every piece, a masterpiece.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://instagram.com/"
                  className="p-2 border border-border rounded-full text-muted-foreground hover:text-gold hover:border-[var(--gold)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="p-2 border border-border rounded-full text-muted-foreground hover:text-gold hover:border-[var(--gold)] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold mb-5 font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-gold mb-5 font-semibold">
                Our Promise
              </h4>
              <p className="font-playfair text-lg text-foreground italic leading-relaxed mb-3">
                &ldquo;Handcrafted with love. Delivered with joy.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every box that leaves our atelier carries the Velmora promise —
                an experience of luxury that lingers long after the last bite.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Velmora. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
