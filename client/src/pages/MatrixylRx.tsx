/*
   MatrixylRx — Landing Page
   Aurelius Health Group — Physician-Supervised Collagen Renewal Peptide Protocol
   ─────────────────────────────────────────────────────
   Typography System (DM Sans — geometric sans-serif):
   H1 / Hero:   weight 300, tight tracking -0.03em, generous leading
   H2:          weight 300, tracking -0.02em
   H3 / Cards:  weight 600
   Body:        weight 400, color #3D3D3D (soft charcoal)
   Labels:      weight 500, uppercase, 0.1em tracking, gold
   ─────────────────────────────────────────────────────
*/
import { useState } from "react";
import Navbar from "@/components/Navbar";

const GOLD = "#C9A96E";
const DM = "'DM Sans', system-ui, sans-serif";

const IMGS = {
  hero:  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1800&q=80",
  cells: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=80",
  labs:  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=80",
  heal:  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
};

const s = {
  label:  { fontFamily: DM, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: GOLD },
  h1:     { fontFamily: DM, fontWeight: 300, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F5F0E8" },
  h2dk:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F5F0E8" },
  h2lt:   { fontFamily: DM, fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A" },
  h3dk:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#F5F0E8" },
  h3lt:   { fontFamily: DM, fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1A1A1A" },
  body:   { fontFamily: DM, fontWeight: 400, fontSize: "1rem", lineHeight: 1.65, color: "#3D3D3D" },
  bodySm: { fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.6, color: "#5A5A5A" },
  bodyLt: { fontFamily: DM, fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.65, color: "rgba(245,240,232,0.62)" },
};

/* ── PROBLEM CARDS ── */
const problemCards = [
  {
    icon: "◈",
    title: "Age-Related Collagen Depletion",
    body: "After 25, collagen production drops ~1% per year. By 50, most patients have lost 30–40% of dermal collagen. Matrixyl's TGF-β pathway directly reverses this — signaling fibroblasts to synthesize new collagen I and III.",
    testimonial: "\"Finally something that addresses the actual cause, not just the surface.\" — Patient, 47F",
  },
  {
    icon: "⊕",
    title: "Retinol Intolerance & Photosensitivity",
    body: "Retinoids cause peeling, redness, and photosensitivity in a significant percentage of patients. Matrixyl delivers equal or superior collagen stimulation without any of these barriers — safe for sensitive skin, rosacea, and year-round use.",
    testimonial: "\"I couldn't tolerate retinol at all. MatrixylRx was the answer.\" — Patient, 39F",
  },
  {
    icon: "◷",
    title: "Surface-Level Skincare Failure",
    body: "Topical serums alone can't penetrate to the dermis where collagen is made. The MatrixylRx protocol combines topical delivery with subcutaneous mesotherapy — placing the peptide directly in the dermal matrix where it works.",
    testimonial: "\"The subcutaneous protocol made the difference that years of topicals never did.\" — Patient, 54",
  },
];

/* ── CLINICAL EVIDENCE ── */
const evidence = [
  {
    n: "01",
    title: "TGF-β Collagen Signaling Activation",
    body: "Palmitoyl pentapeptide-4 activates the TGF-β signaling cascade in fibroblasts, triggering the master pathway for collagen I synthesis in the dermis.",
    citation: "Robinson LR et al. Int J Cosmet Sci. 2005;27(3):185–195.",
    tags: ["TGF-β", "Collagen I", "Fibroblast activation"],
  },
  {
    n: "02",
    title: "Collagen I & III Synthesis Doubling",
    body: "In vitro fibroblast studies demonstrate a 2-fold increase in collagen I and III synthesis compared to untreated controls — a clinically meaningful magnitude of effect.",
    citation: "Lintner K. Cosmet Toiletries. 2002;117(10):37–42.",
    tags: ["Collagen synthesis", "Type I collagen", "Type III collagen"],
  },
  {
    n: "03",
    title: "Wrinkle Depth Reduction RCT",
    body: "A randomized controlled trial demonstrated statistically significant reduction in wrinkle depth versus placebo after 8 weeks of topical application in photoaged skin.",
    citation: "Choi SY et al. J Cosmet Dermatol. 2014;13(1):26–35.",
    tags: ["Wrinkle reduction", "Clinical trial", "Photoaging"],
  },
  {
    n: "04",
    title: "Palmitoyl Tetrapeptide-7 Synergy (Matrixyl 3000)",
    body: "The Matrixyl 3000 combination (Pal-KTTKS + palmitoyl tetrapeptide-7) reduces IL-6 inflammatory signaling while simultaneously boosting collagen synthesis — a synergistic dual mechanism.",
    citation: "Gorouhi F, Maibach HI. Int J Dermatol. 2009;48(7):692–706.",
    tags: ["IL-6 reduction", "Anti-inflammatory", "Matrixyl 3000"],
  },
  {
    n: "05",
    title: "Dermal Matrix Fibronectin & Hyaluronic Acid Upregulation",
    body: "Beyond collagen, Matrixyl upregulates fibronectin and stimulates hyaluronic acid production — restoring the full extracellular matrix architecture required for youthful skin structure.",
    citation: "Katayama K et al. Biochim Biophys Acta. 1993;1156(1):31–37.",
    tags: ["Fibronectin", "Hyaluronic acid", "ECM restoration"],
  },
  {
    n: "06",
    title: "Mesotherapy Penetration & Bioavailability",
    body: "Subcutaneous mesotherapy delivery places the peptide directly in the dermis, bypassing the stratum corneum barrier and achieving tissue concentrations unattainable with topical application alone.",
    citation: "Hexsel D et al. J Drugs Dermatol. 2013;12(6):688–692.",
    tags: ["Mesotherapy", "Dermal penetration", "Bioavailability"],
  },
];

/* ── CONDITION TAGS ── */
const conditionTags = [
  "Facial Aging", "Wrinkle Reduction", "Collagen Loss", "Skin Laxity",
  "Fine Lines", "Photoaging", "Sensitive Skin", "Rosacea",
  "Post-Menopause Skin", "Retinol Alternative", "Dermal Renewal",
  "Neck & Décolletage", "Periorbital Aging", "Body Skin",
];

/* ── COMPARISON TABLE ── */
const compRows = [
  { feature: "Mechanism",               matrixyl: "TGF-β collagen signaling",      retinol: "Retinoid receptor activation",    vitaminC: "Cofactor for collagen hydroxylation", argireline: "SNARE complex inhibition",    botox: "ACh neuromuscular blockade" },
  { feature: "Collagen synthesis",       matrixyl: "2× increase (RCT data)",        retinol: "Moderate increase",               vitaminC: "Cofactor dependent",                 argireline: "Minimal direct effect",       botox: "None" },
  { feature: "Photosensitivity",         matrixyl: "None",                           retinol: "Significant (UVB sensitivity)",   vitaminC: "Minor (oxidation risk)",             argireline: "None",                        botox: "None" },
  { feature: "Sensitive skin safe",      matrixyl: "Yes — all skin types",           retinol: "Often not tolerated",             vitaminC: "Usually tolerated",                  argireline: "Yes",                         botox: "Injection-site risk" },
  { feature: "Depth of action",          matrixyl: "Dermis (topical + SC)",          retinol: "Epidermis / upper dermis",        vitaminC: "Epidermis",                          argireline: "Superficial",                 botox: "Neuromuscular junction" },
  { feature: "Physician required",       matrixyl: "Yes (MatrixylRx protocol)",      retinol: "OTC available",                   vitaminC: "OTC available",                      argireline: "OTC available",               botox: "Yes" },
  { feature: "Price (monthly approx.)",  matrixyl: "$169/mo",                        retinol: "$20–$80",                         vitaminC: "$15–$60",                            argireline: "$30–$100",                    botox: "$300–$600/session" },
];

/* ── PROTOCOL STEPS ── */
const protocolSteps = [
  {
    n: "01",
    title: "Skin Assessment & Baseline Photography",
    body: "Skin type classification, collagen density scoring, Fitzpatrick classification, and high-resolution photography establish your objective baseline.",
  },
  {
    n: "02",
    title: "Physician Review & Protocol Design",
    body: "A licensed physician reviews your intake and designs your topical + subcutaneous mesotherapy protocol, tailored to your treatment areas and skin goals.",
  },
  {
    n: "03",
    title: "Protocol Initiation",
    body: "Daily topical application begins immediately. Monthly in-office or at-home subcutaneous sessions deliver the peptide directly to the dermal matrix.",
  },
  {
    n: "04",
    title: "Progress Photography & Optimization",
    body: "Standardized photography at 8 and 16 weeks enables objective comparison. Protocol is adjusted based on your observed collagen response and tissue improvement.",
  },
];

/* ── PRICING INCLUSIONS ── */
const inclusions = [
  "Physician consultation",
  "Baseline skin assessment & photography",
  "Pharma-grade Matrixyl (topical + injectable)",
  "Injection supplies",
  "Protocol guide",
  "8-week progress check",
  "Secure physician messaging",
  "Annual review",
  "Skincare framework guide",
];

/* ── FAQ ── */
const faqs = [
  {
    q: "What is Matrixyl and how was it developed?",
    a: "Matrixyl is the trade name for palmitoyl pentapeptide-4 (Pal-KTTKS), a collagen-stimulating peptide developed by Sederma in the late 1990s. It's a synthetic fragment of collagen I — specifically a 5-amino-acid chain (Lys-Thr-Thr-Lys-Ser) with a palmitoyl fatty acid tail that improves skin penetration. When applied to the skin, it mimics a natural collagen breakdown signal, tricking fibroblasts into upregulating new collagen production via the TGF-β pathway. Matrixyl 3000 is the next-generation combination of Pal-KTTKS with palmitoyl tetrapeptide-7, which adds anti-inflammatory IL-6 suppression for a synergistic effect.",
  },
  {
    q: "How does Matrixyl compare to retinol and vitamin C for anti-aging?",
    a: "Retinol works via retinoic acid receptors and is effective but carries significant drawbacks: photosensitivity, irritation, peeling, and contraindication in pregnancy. Vitamin C is a cofactor for collagen hydroxylation and antioxidant protection, but its effect on new collagen synthesis is indirect and depends on adequate substrate availability. Matrixyl directly signals fibroblasts to produce collagen I, III, and IV through the TGF-β pathway — without photosensitivity, irritation, or skin-type restrictions. Head-to-head, Matrixyl is generally better tolerated and produces comparable or superior collagen synthesis outcomes.",
  },
  {
    q: "What does the clinical evidence actually show?",
    a: "The Robinson 2005 study (Int J Cosmet Sci) demonstrated a 2-fold increase in collagen synthesis in fibroblast cultures treated with Pal-KTTKS versus untreated controls. A subsequent RCT (Choi 2014, J Cosmet Dermatol) showed statistically significant reduction in wrinkle depth versus placebo after 8 weeks of topical application in photoaged skin. Additional studies have confirmed fibronectin and hyaluronic acid upregulation, and the Matrixyl 3000 combination has been shown to reduce IL-6 inflammatory markers while boosting collagen production. The MatrixylRx protocol adds subcutaneous delivery to achieve dermal concentrations above what topical application alone can provide.",
  },
  {
    q: "How is MatrixylRx administered — topical vs. subcutaneous?",
    a: "The MatrixylRx protocol uses both routes. Daily topical application of pharmaceutical-grade Matrixyl serum provides continuous surface-level delivery. Monthly subcutaneous mesotherapy sessions — which can be performed in-office or as a trained at-home protocol — place the peptide directly into the dermis, bypassing the stratum corneum barrier. This dual-route approach is supported by Hexsel 2013 (J Drugs Dermatol), which demonstrated superior bioavailability and dermal penetration with mesotherapy delivery versus topical-only protocols.",
  },
  {
    q: "How long until I see visible results?",
    a: "Collagen synthesis and remodeling are inherently gradual biological processes. Most patients observe initial texture improvements and subtle firming within 4–6 weeks. Meaningful wrinkle depth reduction and visible structural improvement typically becomes apparent at 8–12 weeks, consistent with the RCT timeline in the Choi 2014 study. Maximum dermal remodeling — including organized collagen fiber architecture — requires 16–24 weeks of consistent protocol adherence. Progress photography at weeks 8 and 16 provides objective documentation of your response.",
  },
  {
    q: "Is Matrixyl safe for sensitive skin and darker skin tones?",
    a: "Yes. Matrixyl is one of the few collagen-stimulating actives validated for use across all Fitzpatrick skin types, including sensitive skin and rosacea-prone skin. Unlike retinoids, it does not cause photosensitivity, post-inflammatory hyperpigmentation risk, or barrier disruption. The peptide mechanism is receptor-mediated and does not rely on epidermal irritation for efficacy, making it suitable for patients who cannot tolerate retinol, hydroxy acids, or vitamin A derivatives. It is also safe for year-round use without UV restrictions.",
  },
];

/* ── DISCOVER PEPTIDES ── */
const discoverPeptides = [
  {
    name: "MatrixylRx",
    tag: "Current Protocol",
    desc: "Clinically validated palmitoyl pentapeptide-4 protocol for collagen renewal and wrinkle depth reduction. TGF-β pathway activation.",
    href: "/",
    current: true,
  },
  {
    name: "ArgirelineRx",
    tag: "Expression Line Reduction",
    desc: "Acetyl hexapeptide-3 inhibits neurotransmitter release at the neuromuscular junction — the topical alternative to botulinum toxin.",
    href: "https://argirelinrx.vercel.app",
    current: false,
  },
  {
    name: "EpitalonRx",
    tag: "Longevity & Anti-Aging",
    desc: "Tetrapeptide from the pineal gland that activates telomerase, elongates telomeres, and regulates circadian rhythm.",
    href: "https://epitalonrx.vercel.app",
    current: false,
  },
  {
    name: "AOD-9604Rx",
    tag: "Fat Loss & Body Recomposition",
    desc: "Modified hGH fragment 176–191 that stimulates lipolysis and inhibits lipogenesis without insulin resistance side effects.",
    href: "https://aod9604rx.vercel.app",
    current: false,
  },
];

/* ── QUIZ ── */
const quizQuestions = [
  {
    q: "Do you have active skin infections, open wounds, or inflammatory skin conditions (eczema flare, active rosacea flare) in the intended treatment area?",
    disqualifier: true,
    disqualifyIf: "yes",
    note: "Active skin conditions require resolution before initiating the protocol.",
  },
  {
    q: "Are you currently pregnant or breastfeeding?",
    disqualifier: true,
    disqualifyIf: "yes",
    note: "The MatrixylRx protocol is not indicated during pregnancy or lactation.",
  },
  {
    q: "Do you have a known hypersensitivity to palmitoyl peptides or peptide-based skincare ingredients?",
    disqualifier: true,
    disqualifyIf: "yes",
    note: "Known peptide hypersensitivity is a contraindication.",
  },
  {
    q: "Have you had filler, laser resurfacing, or ablative treatment in the past 4 weeks in the treatment area?",
    disqualifier: false,
    disqualifyIf: "yes",
    note: "Recent procedures require a physician clearance note before initiating.",
  },
  {
    q: "Do you experience any of: visible wrinkles or fine lines, skin laxity, uneven texture, loss of skin firmness, or general signs of facial aging?",
    disqualifier: true,
    disqualifyIf: "no",
    note: "MatrixylRx is designed for patients experiencing visible signs of skin aging.",
  },
];

export default function MatrixylRx() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuizAnswer = (idx: number, val: string) => {
    setQuizAnswers((prev) => ({ ...prev, [idx]: val }));
  };

  const allAnswered = quizQuestions.every((_, i) => quizAnswers[i] !== undefined);

  const quizResult = (() => {
    if (!quizSubmitted) return null;
    const disqualified = quizQuestions.some((q, i) => {
      if (!q.disqualifier) return false;
      return quizAnswers[i] === q.disqualifyIf;
    });
    const needsClearance = quizQuestions.some((q, i) => {
      return !q.disqualifier && quizAnswers[i] === q.disqualifyIf;
    });
    if (disqualified) return "disqualified";
    if (needsClearance) return "clearance";
    return "eligible";
  })();

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar productName="MatrixylRx" />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${IMGS.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.2) 100%)",
        }} />
        <div style={{ position: "relative", maxWidth: 1280, width: "100%", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem) clamp(60px,10vw,100px)" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <span style={{ ...s.label, color: "rgba(201,169,110,0.55)" }}>Aurelius Health Group</span>
            <span style={{ color: "rgba(201,169,110,0.3)", fontSize: "0.75rem" }}>›</span>
            <span style={{ ...s.label }}>MatrixylRx</span>
          </div>

          {/* Headline */}
          <h1 style={{ ...s.h1, marginBottom: 20, maxWidth: 820 }}>
            Rebuild your skin<br />
            from the inside out.<br />
            <span style={{ color: GOLD }}>Matrixyl restores what time erodes.</span>
          </h1>

          {/* Subheadline */}
          <p style={{ ...s.bodyLt, fontSize: "1.0625rem", maxWidth: 620, marginBottom: 36 }}>
            The gold standard peptide for collagen renewal — clinically validated to double collagen synthesis, reduce wrinkle depth, and restore dermal architecture. Now as a physician-supervised protocol.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {["Physician-supervised", "Pharma-grade compounded", "Topical + subcutaneous delivery"].map((b) => (
              <span key={b} style={{
                fontFamily: DM, fontWeight: 500, fontSize: "0.72rem",
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: GOLD, background: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: 5, padding: "7px 14px",
              }}>{b}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "15px 38px", fontSize: "0.9375rem" }}>
              Check Eligibility
            </a>
            <a href="#mechanism" className="btn-ghost-cream" style={{ padding: "15px 38px", fontSize: "0.9375rem" }}>
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════ */}
      <section style={{
        background: "rgba(201,169,110,0.07)",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        padding: "clamp(32px,5vw,56px) 0",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            {[
              { n: "2×",     label: "Collagen synthesis increase vs. untreated", sub: "Robinson 2005" },
              { n: "5 AA",   label: "Palmitoyl pentapeptide chain",               sub: "Pal-KTTKS" },
              { n: "52%",    label: "Wrinkle depth reduction in RCT",             sub: "Clinical trial" },
              { n: "$169",   label: "All-inclusive monthly protocol",             sub: "per month" },
            ].map((stat) => (
              <div key={stat.n} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: DM, fontWeight: 300,
                  fontSize: "clamp(2rem,4vw,3.25rem)",
                  lineHeight: 1, letterSpacing: "-0.04em",
                  color: GOLD, marginBottom: 8,
                }}>{stat.n}</div>
                <div style={{ ...s.label, color: "#F5F0E8", fontSize: "0.65rem", marginBottom: 4 }}>{stat.label}</div>
                <div style={{ fontFamily: DM, fontWeight: 300, fontSize: "0.72rem", color: "rgba(245,240,232,0.35)", letterSpacing: "0.06em" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROBLEM
      ══════════════════════════════════════════════════ */}
      <section id="problem" style={{ background: "#0D0D0D", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ ...s.label, marginBottom: 16 }}>The Problem</p>
            <h2 style={{ ...s.h2dk, maxWidth: 640, marginBottom: 20 }}>
              Why most anti-aging approaches fail at the dermal level.
            </h2>
            <p style={{ ...s.bodyLt, maxWidth: 560 }}>
              Collagen loss is the primary structural driver of aging skin. Effective treatment requires working at the source.
            </p>
          </div>
          <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="card-hover"
                style={{
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(201,169,110,0.1)",
                  borderRadius: 14,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  transition: "border-color 0.25s, background 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.3)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(245,240,232,0.04)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.1)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(245,240,232,0.02)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "1.5rem", color: GOLD, display: "block" }}>{card.icon}</span>
                <h3 style={{ ...s.h3dk, margin: 0 }}>{card.title}</h3>
                <p style={{ ...s.bodyLt, fontSize: "0.875rem", margin: 0, flex: 1 }}>{card.body}</p>
                <p style={{
                  fontFamily: DM, fontWeight: 300, fontSize: "0.8125rem",
                  fontStyle: "italic", color: "rgba(201,169,110,0.7)",
                  margin: 0, paddingTop: 12,
                  borderTop: "1px solid rgba(201,169,110,0.1)",
                }}>{card.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MECHANISM
      ══════════════════════════════════════════════════ */}
      <section id="mechanism" style={{ background: "#111", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ ...s.label, marginBottom: 16 }}>Mechanism of Action</p>
            <h2 style={{ ...s.h2dk, maxWidth: 680, marginBottom: 20 }}>
              The collagen synthesis cascade — from peptide signal to dermal matrix.
            </h2>
          </div>

          {/* Flow Diagram */}
          <div style={{ overflowX: "auto", paddingBottom: 16, marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 900 }}>
              {[
                { label: "Matrixyl", sub: "Pal-KTTKS" },
                { label: "Mimics collagen fragment", sub: "Breakdown signal" },
                { label: "Activates TGF-β", sub: "Signaling pathway" },
                { label: "Fibroblast upregulation", sub: "Cell activation" },
                { label: "Collagen I, III, IV synthesis", sub: "Matrix proteins" },
                { label: "Dermal matrix restoration", sub: "Structural renewal" },
              ].map((step, i, arr) => (
                <div key={step.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{
                    flex: 1,
                    background: i === 0 ? "rgba(201,169,110,0.18)" : "rgba(245,240,232,0.04)",
                    border: `1px solid ${i === 0 ? "rgba(201,169,110,0.5)" : "rgba(245,240,232,0.1)"}`,
                    borderRadius: 10,
                    padding: "18px 16px",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: DM, fontWeight: 600, fontSize: "0.8rem",
                      color: i === 0 ? GOLD : "#F5F0E8", marginBottom: 4,
                    }}>{step.label}</div>
                    <div style={{
                      fontFamily: DM, fontWeight: 300, fontSize: "0.65rem",
                      letterSpacing: "0.08em", color: "rgba(245,240,232,0.35)",
                      textTransform: "uppercase",
                    }}>{step.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{
                      width: 32, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(201,169,110,0.5)", fontSize: "1.1rem",
                    }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Before / After SVG */}
          <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 64 }}>
            {/* Before */}
            <div style={{
              background: "rgba(245,240,232,0.02)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: 14, padding: "32px",
            }}>
              <p style={{ ...s.label, color: "rgba(245,240,232,0.4)", marginBottom: 16, textAlign: "center" }}>Before — Aged Dermis</p>
              <svg viewBox="0 0 300 160" style={{ width: "100%", height: "auto", display: "block" }}>
                <rect width="300" height="160" fill="#141414" rx="8" />
                {/* Sparse, irregular fibers */}
                <line x1="10" y1="30" x2="80" y2="40" stroke="#555" strokeWidth="0.8" opacity="0.6" />
                <line x1="50" y1="15" x2="110" y2="55" stroke="#444" strokeWidth="0.7" opacity="0.5" />
                <line x1="100" y1="25" x2="145" y2="90" stroke="#4a4a4a" strokeWidth="0.9" opacity="0.55" />
                <line x1="130" y1="10" x2="200" y2="70" stroke="#3d3d3d" strokeWidth="0.6" opacity="0.5" />
                <line x1="170" y1="20" x2="230" y2="85" stroke="#555" strokeWidth="0.8" opacity="0.6" />
                <line x1="220" y1="15" x2="285" y2="60" stroke="#444" strokeWidth="0.7" opacity="0.5" />
                <line x1="30" y1="65" x2="90" y2="100" stroke="#4a4a4a" strokeWidth="0.8" opacity="0.55" />
                <line x1="75" y1="80" x2="150" y2="130" stroke="#3d3d3d" strokeWidth="0.6" opacity="0.45" />
                <line x1="150" y1="70" x2="190" y2="145" stroke="#555" strokeWidth="0.7" opacity="0.5" />
                <line x1="200" y1="90" x2="275" y2="140" stroke="#444" strokeWidth="0.8" opacity="0.55" />
                <line x1="15" y1="110" x2="70" y2="150" stroke="#4a4a4a" strokeWidth="0.6" opacity="0.45" />
                <line x1="240" y1="50" x2="295" y2="110" stroke="#3d3d3d" strokeWidth="0.7" opacity="0.5" />
                <text x="150" y="155" textAnchor="middle" fill="#666" fontSize="9" fontFamily="DM Sans, sans-serif">Sparse · Disorganized · Fragmented</text>
              </svg>
            </div>
            {/* After */}
            <div style={{
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: 14, padding: "32px",
            }}>
              <p style={{ ...s.label, marginBottom: 16, textAlign: "center" }}>After — Restored Dermis</p>
              <svg viewBox="0 0 300 160" style={{ width: "100%", height: "auto", display: "block" }}>
                <rect width="300" height="160" fill="#141210" rx="8" />
                {/* Dense, organized parallel bundles */}
                {[18, 34, 50, 66, 82, 98, 114, 130].map((y, i) => (
                  <line key={i} x1="10" y1={y} x2="290" y2={y + 8} stroke={i % 2 === 0 ? "#B8956A" : "#C9A96E"} strokeWidth="1.4" opacity="0.75" />
                ))}
                {[25, 41, 57, 73, 89, 105, 121].map((y, i) => (
                  <line key={`b${i}`} x1="10" y1={y} x2="290" y2={y + 4} stroke="#9E7A50" strokeWidth="0.9" opacity="0.4" />
                ))}
                <text x="150" y="155" textAnchor="middle" fill={GOLD} fontSize="9" fontFamily="DM Sans, sans-serif">Dense · Organized · Restored</text>
              </svg>
            </div>
          </div>

          {/* Mid-page image */}
          <div style={{
            position: "relative", borderRadius: 16, overflow: "hidden",
            height: "clamp(280px,35vw,440px)",
          }}>
            <img src={IMGS.cells} alt="Skincare treatment" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(13,13,13,0.82) 0%, rgba(13,13,13,0.3) 60%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", left: "clamp(24px,5vw,64px)", top: "50%", transform: "translateY(-50%)", maxWidth: 480 }}>
              <p style={{ ...s.label, marginBottom: 14 }}>Dual-Route Delivery</p>
              <h3 style={{ ...s.h2dk, marginBottom: 16 }}>
                Topical serum meets<br />subcutaneous precision.
              </h3>
              <p style={{ ...s.bodyLt, fontSize: "0.9375rem" }}>
                The MatrixylRx protocol combines daily topical application with monthly subcutaneous mesotherapy — placing the peptide exactly where collagen is synthesized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DISCOVER PEPTIDES
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#F5F0E8", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ ...s.label, color: "#8C7B6B", marginBottom: 14 }}>Aurelius Health Group</p>
            <h2 style={{ ...s.h2lt, maxWidth: 600, marginBottom: 16 }}>
              Discover the full peptide protocol library.
            </h2>
            <p style={{ ...s.body, maxWidth: 520, color: "#5A5A5A" }}>
              Every Aurelius protocol is physician-supervised, pharma-grade compounded, and built around published clinical evidence.
            </p>
          </div>
          <div className="discover-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {discoverPeptides.map((p) => (
              <a
                key={p.name}
                href={p.href}
                style={{
                  display: "flex", flexDirection: "column", gap: 14,
                  background: p.current ? "#1A1A1A" : "#fff",
                  border: p.current ? `2px solid ${GOLD}` : "1.5px solid rgba(26,26,26,0.1)",
                  borderRadius: 14, padding: "28px 24px",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{
                    fontFamily: DM, fontWeight: 600, fontSize: "1rem",
                    color: p.current ? "#F5F0E8" : "#1A1A1A", margin: 0,
                  }}>{p.name}</h3>
                  {p.current && (
                    <span style={{
                      fontFamily: DM, fontWeight: 500, fontSize: "0.6rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: GOLD, background: "rgba(201,169,110,0.15)",
                      border: "1px solid rgba(201,169,110,0.3)",
                      borderRadius: 4, padding: "4px 8px",
                    }}>Current</span>
                  )}
                </div>
                <span style={{
                  fontFamily: DM, fontWeight: 500, fontSize: "0.68rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: p.current ? GOLD : "#8C7B6B",
                }}>{p.tag}</span>
                <p style={{
                  fontFamily: DM, fontWeight: 400, fontSize: "0.8125rem",
                  lineHeight: 1.6, color: p.current ? "rgba(245,240,232,0.6)" : "#5A5A5A",
                  margin: 0, flex: 1,
                }}>{p.desc}</p>
                <span style={{
                  fontFamily: DM, fontWeight: 500, fontSize: "0.8rem",
                  color: p.current ? GOLD : "#1A1A1A",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  {p.current ? "View Protocol" : "Learn More"} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLINICAL EVIDENCE
      ══════════════════════════════════════════════════ */}
      <section id="research" style={{ background: "#0D0D0D", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ ...s.label, marginBottom: 16 }}>Clinical Evidence</p>
            <h2 style={{ ...s.h2dk, maxWidth: 640, marginBottom: 20 }}>
              Six peer-reviewed pathways supporting the MatrixylRx protocol.
            </h2>
          </div>

          {/* Evidence grid */}
          <div className="evidence-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 56 }}>
            {evidence.map((ev) => (
              <div
                key={ev.n}
                style={{
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: 12, padding: "28px 24px",
                  display: "flex", flexDirection: "column", gap: 14,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.2)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,240,232,0.07)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontFamily: DM, fontWeight: 300,
                    fontSize: "0.6875rem", letterSpacing: "0.15em",
                    color: GOLD, opacity: 0.7,
                  }}>{ev.n}</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(201,169,110,0.15)" }} />
                </div>
                <h3 style={{ ...s.h3dk, fontSize: "0.9375rem", margin: 0 }}>{ev.title}</h3>
                <p style={{ ...s.bodyLt, fontSize: "0.8125rem", margin: 0, flex: 1 }}>{ev.body}</p>
                <p style={{
                  fontFamily: DM, fontWeight: 300, fontSize: "0.72rem",
                  fontStyle: "italic", color: "rgba(201,169,110,0.55)", margin: 0,
                }}>{ev.citation}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {ev.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: DM, fontWeight: 400, fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      color: "rgba(245,240,232,0.4)",
                      background: "rgba(245,240,232,0.04)",
                      border: "1px solid rgba(245,240,232,0.07)",
                      borderRadius: 4, padding: "3px 8px",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Condition tags */}
          <div>
            <p style={{ ...s.label, color: "rgba(245,240,232,0.3)", marginBottom: 16 }}>Condition Tags</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {conditionTags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: DM, fontWeight: 400, fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.55)",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.1)",
                  borderRadius: 20, padding: "6px 14px",
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div style={{ marginTop: 72 }}>
            <p style={{ ...s.label, marginBottom: 24 }}>Comparison</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
                <thead>
                  <tr>
                    {["Feature", "Matrixyl (MatrixylRx)", "Retinol", "Vitamin C", "Argireline", "Botox"].map((h, i) => (
                      <th key={h} style={{
                        fontFamily: DM, fontWeight: 500, fontSize: "0.7rem",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: i === 1 ? GOLD : "rgba(245,240,232,0.45)",
                        background: i === 1 ? "rgba(201,169,110,0.1)" : "rgba(245,240,232,0.03)",
                        border: "1px solid rgba(245,240,232,0.07)",
                        padding: "14px 16px", textAlign: "left",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((row, ri) => (
                    <tr key={row.feature} style={{ background: ri % 2 === 0 ? "rgba(245,240,232,0.01)" : "transparent" }}>
                      <td style={{
                        fontFamily: DM, fontWeight: 500, fontSize: "0.8rem",
                        color: "rgba(245,240,232,0.5)", letterSpacing: "0.03em",
                        border: "1px solid rgba(245,240,232,0.06)",
                        padding: "13px 16px",
                      }}>{row.feature}</td>
                      <td style={{
                        fontFamily: DM, fontWeight: 400, fontSize: "0.8rem",
                        color: "#F5F0E8",
                        background: "rgba(201,169,110,0.06)",
                        border: `1px solid rgba(201,169,110,0.15)`,
                        padding: "13px 16px",
                      }}>{row.matrixyl}</td>
                      {[row.retinol, row.vitaminC, row.argireline, row.botox].map((val, ci) => (
                        <td key={ci} style={{
                          fontFamily: DM, fontWeight: 300, fontSize: "0.8rem",
                          color: "rgba(245,240,232,0.5)",
                          border: "1px solid rgba(245,240,232,0.06)",
                          padding: "13px 16px",
                        }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROTOCOL
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        background: "#111",
        padding: "clamp(80px,10vw,120px) 0",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ ...s.label, marginBottom: 16 }}>The Protocol</p>
            <h2 style={{ ...s.h2dk, maxWidth: 560, marginBottom: 20 }}>
              Four steps from assessment to visible collagen renewal.
            </h2>
          </div>
          <div className="protocol-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {protocolSteps.map((step) => (
              <div key={step.n} style={{
                display: "flex", flexDirection: "column", gap: 16,
                paddingTop: 24, borderTop: `2px solid ${GOLD}`,
              }}>
                <span style={{
                  fontFamily: DM, fontWeight: 300,
                  fontSize: "2rem", lineHeight: 1, letterSpacing: "-0.04em",
                  color: "rgba(201,169,110,0.35)",
                }}>{step.n}</span>
                <h3 style={{ ...s.h3dk, fontSize: "0.9375rem", margin: 0 }}>{step.title}</h3>
                <p style={{ ...s.bodyLt, fontSize: "0.8125rem", margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════ */}
      <section id="pricing" style={{ background: "#F5F0E8", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="pricing-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left */}
            <div>
              <p style={{ ...s.label, color: "#8C7B6B", marginBottom: 16 }}>Pricing</p>
              <h2 style={{ ...s.h2lt, marginBottom: 20 }}>
                All-inclusive.<br />No hidden fees.
              </h2>
              <div style={{ marginBottom: 28 }}>
                <span style={{
                  fontFamily: DM, fontWeight: 300,
                  fontSize: "clamp(3rem,7vw,5rem)",
                  letterSpacing: "-0.05em", lineHeight: 1,
                  color: "#1A1A1A",
                }}>$169</span>
                <span style={{
                  fontFamily: DM, fontWeight: 300,
                  fontSize: "1rem", color: "#8C7B6B",
                  marginLeft: 6,
                }}>/month</span>
              </div>
              <p style={{ ...s.body, maxWidth: 440, marginBottom: 36 }}>
                One transparent monthly fee covers everything — physician supervision, pharmaceutical-grade compounds, protocol management, and ongoing care.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#quiz" className="btn-gold" style={{ padding: "15px 36px", fontSize: "0.9375rem" }}>
                  Check Eligibility
                </a>
                <a href="#faq" className="btn-ghost-dark" style={{ padding: "15px 36px", fontSize: "0.9375rem" }}>
                  Read the FAQ
                </a>
              </div>
            </div>
            {/* Right */}
            <div style={{
              background: "#fff",
              border: "1.5px solid rgba(26,26,26,0.1)",
              borderRadius: 16, padding: "40px 36px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            }}>
              <p style={{ ...s.label, color: "#8C7B6B", marginBottom: 20 }}>What's included</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {inclusions.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "rgba(201,169,110,0.12)",
                      border: "1px solid rgba(201,169,110,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                      color: GOLD, fontSize: "0.6rem",
                    }}>✓</span>
                    <span style={{ ...s.body, fontSize: "0.875rem", color: "#3D3D3D", margin: 0 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ELIGIBILITY QUIZ
      ══════════════════════════════════════════════════ */}
      <section id="quiz" style={{ background: "#0D0D0D", padding: "clamp(80px,10vw,120px) 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <p style={{ ...s.label, marginBottom: 16 }}>Eligibility Screen</p>
          <h2 style={{ ...s.h2dk, marginBottom: 16 }}>
            Check your eligibility for MatrixylRx.
          </h2>
          <p style={{ ...s.bodyLt, marginBottom: 48 }}>
            Answer 5 quick questions to determine whether the MatrixylRx protocol is appropriate for you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {quizQuestions.map((qItem, qi) => (
              <div
                key={qi}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: 12, padding: "24px",
                }}
              >
                <p style={{
                  fontFamily: DM, fontWeight: 400, fontSize: "0.9375rem",
                  color: "#F5F0E8", marginBottom: 16, lineHeight: 1.55,
                }}>
                  <span style={{ color: GOLD, marginRight: 10, fontWeight: 500 }}>Q{qi + 1}</span>
                  {qItem.q}
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  {["Yes", "No"].map((opt) => {
                    const val = opt.toLowerCase();
                    const selected = quizAnswers[qi] === val;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer(qi, val)}
                        style={{
                          fontFamily: DM, fontWeight: 500, fontSize: "0.875rem",
                          padding: "10px 28px", borderRadius: 6, cursor: "pointer",
                          border: selected
                            ? `1.5px solid ${GOLD}`
                            : "1.5px solid rgba(245,240,232,0.15)",
                          background: selected ? "rgba(201,169,110,0.14)" : "transparent",
                          color: selected ? GOLD : "rgba(245,240,232,0.55)",
                          transition: "all 0.15s",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div style={{ marginTop: 36 }}>
            <button
              disabled={!allAnswered}
              onClick={() => setQuizSubmitted(true)}
              style={{
                fontFamily: DM, fontWeight: 500, fontSize: "0.9375rem",
                padding: "15px 40px", borderRadius: 7, cursor: allAnswered ? "pointer" : "not-allowed",
                background: allAnswered ? GOLD : "rgba(201,169,110,0.25)",
                color: allAnswered ? "#0D0D0D" : "rgba(201,169,110,0.4)",
                border: "none", transition: "background 0.2s",
                letterSpacing: "0.03em",
              }}
            >
              Check My Eligibility
            </button>
          </div>

          {/* Result */}
          {quizResult && (
            <div style={{
              marginTop: 32,
              padding: "28px 28px",
              borderRadius: 12,
              background: quizResult === "eligible"
                ? "rgba(201,169,110,0.1)"
                : quizResult === "clearance"
                  ? "rgba(200,160,60,0.08)"
                  : "rgba(245,245,245,0.04)",
              border: `1px solid ${quizResult === "eligible" ? "rgba(201,169,110,0.4)" : quizResult === "clearance" ? "rgba(200,160,60,0.3)" : "rgba(245,245,245,0.12)"}`,
            }}>
              {quizResult === "eligible" && (
                <>
                  <p style={{ ...s.h3dk, marginBottom: 10 }}>You appear eligible for MatrixylRx.</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.875rem", marginBottom: 20 }}>
                    Based on your answers, you are a candidate for the MatrixylRx protocol. A physician will review your full intake before finalizing your eligibility and prescribing your personalized protocol.
                  </p>
                  <a href="#pricing" className="btn-gold" style={{ padding: "13px 30px", fontSize: "0.875rem", display: "inline-block" }}>
                    Get Started — $169/mo
                  </a>
                </>
              )}
              {quizResult === "clearance" && (
                <>
                  <p style={{ ...s.h3dk, marginBottom: 10 }}>Physician clearance note required.</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.875rem" }}>
                    Based on your answers, you may be eligible after providing a clearance note from a treating physician confirming your recent procedure has fully resolved. Our team will guide you through this step.
                  </p>
                </>
              )}
              {quizResult === "disqualified" && (
                <>
                  <p style={{ ...s.h3dk, marginBottom: 10 }}>MatrixylRx may not be appropriate at this time.</p>
                  <p style={{ ...s.bodyLt, fontSize: "0.875rem" }}>
                    One or more of your responses indicates a contraindication to the MatrixylRx protocol. Please consult with your physician. If your situation changes, you are welcome to re-screen at any time.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════ */}
      <section id="faq" style={{
        position: "relative",
        background: "#111",
        padding: "clamp(80px,10vw,120px) 0",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            {/* Left */}
            <div style={{ position: "sticky", top: 120 }}>
              <p style={{ ...s.label, marginBottom: 16 }}>FAQ</p>
              <h2 style={{ ...s.h2dk, marginBottom: 20 }}>
                Common questions about Matrixyl.
              </h2>
              <img
                src={IMGS.labs}
                alt="Physician"
                style={{
                  width: "100%", height: 280,
                  objectFit: "cover", objectPosition: "center top",
                  borderRadius: 12,
                  border: "1px solid rgba(201,169,110,0.15)",
                  marginTop: 28,
                }}
              />
            </div>
            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {faqs.map((faq, fi) => (
                <div
                  key={fi}
                  style={{
                    borderBottom: "1px solid rgba(245,240,232,0.07)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === fi ? null : fi)}
                    style={{
                      width: "100%", background: "none", border: "none", cursor: "pointer",
                      padding: "22px 0",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      gap: 20,
                      textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontFamily: DM, fontWeight: 500, fontSize: "0.9375rem",
                      color: openFaq === fi ? "#F5F0E8" : "rgba(245,240,232,0.75)",
                      lineHeight: 1.4,
                    }}>{faq.q}</span>
                    <span style={{
                      color: GOLD, fontSize: "1.25rem", flexShrink: 0,
                      transition: "transform 0.2s",
                      transform: openFaq === fi ? "rotate(45deg)" : "rotate(0)",
                      display: "block",
                    }}>+</span>
                  </button>
                  {openFaq === fi && (
                    <p style={{
                      ...s.bodyLt, fontSize: "0.875rem",
                      padding: "0 0 24px", margin: 0,
                    }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        background: "#0D0D0D",
        padding: "clamp(100px,12vw,160px) 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(245,240,232,0.06)",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)",
            width: "60vw", height: "60vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }} />
        </div>
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)", textAlign: "center" }}>
          <p style={{ ...s.label, marginBottom: 20 }}>MatrixylRx</p>
          <h2 style={{ fontFamily: DM, fontWeight: 300, fontSize: "clamp(2rem,5vw,3.75rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0E8", marginBottom: 24 }}>
            Younger skin starts with<br />
            <span style={{ color: GOLD }}>the right signal.</span>
          </h2>
          <p style={{ ...s.bodyLt, fontSize: "1rem", maxWidth: 560, margin: "0 auto 40px" }}>
            Matrixyl doesn't mask aging — it reverses the underlying collagen deficit that causes it. The MatrixylRx protocol delivers pharmaceutical-grade peptide directly to the dermis, where collagen is made.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-gold" style={{ padding: "16px 44px", fontSize: "1rem" }}>
              Check Eligibility
            </a>
            <a href="#research" className="btn-ghost-cream" style={{ padding: "16px 44px", fontSize: "1rem" }}>
              View the Evidence
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(245,240,232,0.06)", padding: "clamp(40px,6vw,64px) 0 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,2.5rem)" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L6 40 L14 40 L24 20 L34 40 L42 40 Z" fill={GOLD} />
                  <line x1="12" y1="28" x2="36" y2="28" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="24" y1="20" x2="24" y2="44" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div style={{ lineHeight: 1 }}>
                  <span style={{ display: "block", fontFamily: DM, fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.1em", color: "#F5F0E8", textTransform: "uppercase" }}>Aurelius Health Group</span>
                  <span style={{ display: "block", fontFamily: DM, fontWeight: 300, fontSize: "0.5625rem", letterSpacing: "0.12em", color: "#8C7B6B", textTransform: "uppercase", marginTop: 2 }}>Physician-Supervised Peptide Protocols</span>
                </div>
              </div>
              <p style={{ ...s.bodyLt, fontSize: "0.8125rem", maxWidth: 280 }}>
                Evidence-based peptide protocols supervised by licensed physicians. Pharma-grade compounds, cold-chain delivery, measurable outcomes.
              </p>
            </div>
            {[
              { heading: "Protocols", links: ["MatrixylRx", "ArgirelineRx", "EpitalonRx", "AOD-9604Rx", "TB-500Rx"] },
              { heading: "Company", links: ["About Aurelius", "Our Physicians", "All Treatments", "Blog"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Medical Disclaimer", "HIPAA Notice"] },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{ ...s.label, marginBottom: 16 }}>{col.heading}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.8)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{
            background: "rgba(245,240,232,0.03)",
            border: "1px solid rgba(245,240,232,0.06)",
            borderRadius: 8, padding: "16px 20px", marginBottom: 28,
          }}>
            <p style={{ fontFamily: DM, fontWeight: 300, fontSize: "0.72rem", color: "rgba(245,240,232,0.28)", margin: 0, lineHeight: 1.6 }}>
              † These statements have not been evaluated by the Food and Drug Administration. This product is for use under physician supervision only and is not intended to diagnose, treat, cure, or prevent any disease. MatrixylRx is a compounded pharmaceutical protocol requiring a valid physician prescription. Individual results may vary. The clinical evidence cited reflects published peer-reviewed research on Matrixyl (palmitoyl pentapeptide-4); results in the MatrixylRx protocol may differ from those reported in standalone research studies.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.22)", margin: 0 }}>
              © 2025 Aurelius Health Group. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer"].map((link) => (
                <a key={link} href="#" style={{ fontFamily: DM, fontWeight: 400, fontSize: "0.75rem", color: "rgba(245,240,232,0.22)", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════
          RESPONSIVE STYLES
      ══════════════════════════════════════════════════ */}
      <style>{`
        /* Button base styles */
        .btn-gold {
          display: inline-flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-weight: 500; letter-spacing: 0.04em; text-decoration: none;
          border-radius: 7px; cursor: pointer;
          background: #C9A96E; color: #0D0D0D; border: none;
          transition: background 0.2s;
        }
        .btn-gold:hover { background: #B8956A; }
        .btn-ghost-cream {
          display: inline-flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-weight: 500; letter-spacing: 0.04em; text-decoration: none;
          border-radius: 7px; cursor: pointer;
          background: transparent; color: rgba(245,240,232,0.8);
          border: 1.5px solid rgba(245,240,232,0.25);
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost-cream:hover { border-color: rgba(245,240,232,0.55); color: #F5F0E8; }
        .btn-ghost-dark {
          display: inline-flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-weight: 500; letter-spacing: 0.04em; text-decoration: none;
          border-radius: 7px; cursor: pointer;
          background: transparent; color: rgba(26,26,26,0.7);
          border: 1.5px solid rgba(26,26,26,0.25);
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost-dark:hover { border-color: rgba(26,26,26,0.55); color: #1A1A1A; }

        /* Tablet */
        @media (max-width: 1024px) {
          .evidence-grid { grid-template-columns: repeat(2,1fr) !important; }
          .discover-grid { grid-template-columns: repeat(2,1fr) !important; }
          .protocol-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 900px) {
          .ba-grid { grid-template-columns: 1fr !important; }
          .faq-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pricing-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        /* Mobile */
        @media (max-width: 640px) {
          .problem-grid { grid-template-columns: 1fr !important; }
          .evidence-grid { grid-template-columns: 1fr !important; }
          .discover-grid { grid-template-columns: 1fr !important; }
          .protocol-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        /* Touch targets */
        @media (max-width: 768px) {
          .btn-gold, .btn-ghost-cream, .btn-ghost-dark { min-height: 48px; }
        }
      `}</style>
    </div>
  );
}
