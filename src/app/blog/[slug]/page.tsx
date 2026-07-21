import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { getBlogPost, getBlogSlugs } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

function getArticleContent(slug: string): string[] {
  const contentMap: Record<string, string[]> = {
    "corn-starch-drying-moisture-control": [
      "Corn starch is highly hygroscopic, so moisture control affects both drying efficiency and finished-product stability. If final moisture drifts too high, starch can cake, spoil, or lose storage stability. If it drifts too low, plants may waste energy and reduce process efficiency without gaining any quality benefit.",
      "In many starch plants, moisture is still judged by intermittent sampling or operator experience. The supplier material highlights that this creates a delay between what is happening in the dryer and what the team knows about it, especially when material moisture changes quickly.",
      "An online NIR moisture analyzer installed at the dryer outlet or screw conveyor gives continuous feedback during production. Instead of waiting for periodic checks, operators can see moisture trends and adjust feed rate, air volume, or drying intensity much earlier.",
      "This type of setup is especially useful where one operator needs to support both drying and packaging, or where production wants a more consistent final-moisture window without adding more manual checks.",
      "The biggest value is usually practical rather than theoretical: more stable finished moisture, less operator guesswork, lower labor intensity, and better support for day-to-day process control.",
    ],
    "baking-soda-moisture-measurement-guide": [
      "In sodium bicarbonate production, moisture can vary significantly, while traditional testing often takes too long to help production in real time. The supplier presentation specifically notes that offline measurement may require many hours, which is too slow for active process correction.",
      "That time gap matters because drying conditions can shift long before lab data comes back. By the time operators confirm the actual moisture result, a large amount of product may already have moved further down the line.",
      "An online near-infrared moisture analyzer reduces that delay by measuring during production instead of after the fact. The value is not only faster data, but faster decisions: production can adjust drying conditions while material is still in process.",
      "For baking soda lines, this usually supports three goals at once: improve detection efficiency, reduce reliance on delayed manual testing, and hold final moisture in a narrower control band.",
      "When discussing a project, it helps to define the measurement point clearly, such as after primary drying, at the transfer section, or before final packaging. That makes it easier to match the instrument response time and output method to the process.",
    ],
    "nano-calcium-carbonate-drying-quality": [
      "Moisture control in nano calcium carbonate is tied directly to appearance, flowability, and drying cost. According to the supplier material, poor control can create two opposite problems: too much moisture leads to agglomeration and weaker flow, while too little moisture can contribute to overheating and additive scorching.",
      "That balance matters because over-drying can reduce whiteness or cause yellowing, while high final moisture can make the powder less stable in storage and more difficult in downstream use.",
      "An online moisture analyzer helps by giving a continuous view of the drying endpoint instead of forcing the plant to rely only on periodic samples. This is especially helpful when the process is sensitive to small shifts in drying temperature or residence time.",
      "In practice, plants often use online moisture data to protect quality and control cost at the same time. The goal is not just to dry harder, but to dry to the right point consistently.",
      "For calcium carbonate projects, a good discussion usually includes the drying section, expected moisture window, product whiteness requirements, and whether the plant wants only indication or a signal that can be shared with the control system.",
    ],
    "ceramic-spray-drying-moisture-stability": [
      "In ceramic raw-material preparation, moisture affects granule shape, pore structure, surface hardness, and the stability of later forming steps. The supplier reference material points out that spray-drying moisture conditions directly influence powder quality and eventually brick-body quality.",
      "When evaporation is unstable, plants may see more hollow particles, uneven granules, or wider variation in powder behavior. Periodic manual checks are often too slow to catch those swings before quality moves.",
      "Online moisture measurement gives a more continuous picture of the drying process. That makes it easier to stabilize the moisture profile through the spray-drying section and keep powder entering the next stage in a more consistent condition.",
      "This does not remove the need for process know-how, but it gives the operating team a much more useful signal than occasional manual testing. In many projects, the improvement is as much about process visibility as it is about final accuracy.",
      "For ceramic lines, it is usually worth discussing whether the target is tighter granule consistency, lower energy loss, fewer manual checks, or better forming stability, because that helps define the most useful installation point.",
    ],
    "washed-sand-moisture-for-concrete-batching": [
      "Washed sand moisture has a direct influence on actual water addition in concrete batching. Because mix ratios are commonly based on dry aggregate assumptions, changing sand moisture means the plant must also change added water if it wants stable concrete performance.",
      "This becomes harder during seasonal shifts, rain, or changing storage conditions. If moisture moves and batching water does not, the result can be unstable workability, strength variation, and more operator correction.",
      "Online moisture measurement helps by showing moisture changes continuously instead of relying only on occasional tests. That gives batching operators a faster basis for correcting water addition and keeping the process closer to target.",
      "The supplier material also highlights the labor benefit: when moisture information is easier to access, one operator can manage production with less routine manual checking and less dependence on repeated laboratory measurements.",
      "For sand and aggregate projects, the most useful planning details are usually conveyor location, material presentation, expected moisture range, and whether the plant wants real-time display only or integration into a batching workflow.",
    ],
    "how-to-choose-nir-vs-microwave-moisture-measurement": [
      "NIR and microwave methods solve different measurement problems, so the right choice usually depends more on installation conditions than on marketing language. A practical way to start is to ask what part of the material you need to measure and how the material is presented.",
      "NIR is often a good fit when you want non-contact measurement from above the product, especially on powders, granules, or exposed material surfaces. It works well when the goal is fast inline feedback without touching the product and where a sight-glass or clear measuring path is available.",
      "Microwave measurement becomes attractive when penetration depth matters more, such as on thicker bulk layers, denser material beds, or conveyor applications where surface-only information is not enough.",
      "You should also compare the moisture range, available installation space, environmental conditions, and how the signal will be used. Some projects only need a local display, while others need RS232, 4-20mA, Ethernet, or plant-level integration.",
      "In many real projects, the best next step is not choosing from a brochure alone, but reviewing the exact material, moisture target, installation distance, and control objective together before final selection.",
    ],
  };

  return contentMap[slug] ?? [
    "Industrial moisture measurement affects product quality, drying efficiency, and process stability in a wide range of bulk-solid and powder applications.",
    "Online measurement is most valuable when the process changes faster than manual sampling can keep up with.",
    "Contact us with your material, line layout, and target moisture range if you want help evaluating a suitable setup.",
  ];
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

function WoodFiberboardArticle() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-primary">Why wood-fiber moisture deserves a control point</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        In MDF and particleboard production, moisture is not only a finished-board test. It is a process variable that changes how fibers or particles move through storage, resin blending, mat forming, and the hot press. Wood is hygroscopic: its moisture condition changes with surrounding temperature and relative humidity, and that exchange affects its physical behavior. The <SourceLink href="https://research.fs.usda.gov/download/treesearch/37428.pdf">USDA Forest Products Laboratory Wood Handbook</SourceLink> notes that freshly sawn wood can range from about 30% to more than 200% moisture content, depending on species and wood section. That is why incoming furnish should never be treated as a fixed condition.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The operating target is product- and recipe-specific, not a universal percentage. For conventional particleboard, the same USDA reference reports mat moisture of 8% to 12% at hot pressing, falling to roughly 5% to 9% during pressing. Those figures are useful commissioning context, not a substitute for a plant&apos;s board specification, resin system, density profile, or press recipe.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">The measurement challenge: average moisture can hide a moving process</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Grab samples can verify a laboratory value, but they can miss short-term variation caused by wet chip deliveries, uneven dryer loading, changes in storage residence time, or shifts in ambient humidity. A single average also cannot show whether wet and dry pockets are reaching the blender. For a fiberboard line, that distinction matters because resin addition, furnish flow, and press response are all sensitive to the condition of the material actually entering the next step.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Moisture also changes heat and mass transfer during pressing. The USDA Forest Service review of hot-pressing research explains that initial mat moisture influences internal temperature rise and that heat and mass transfer are interdependent. Excess vapor pressure must be managed; simply increasing moisture or press temperature is not a reliable correction. <SourceLink href="https://research.fs.usda.gov/treesearch/24924">The Forest Service&apos;s hot-pressing review</SourceLink> further identifies vapor release as a practical limit on higher-moisture pressing approaches.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">A recommended online measurement approach</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Start with the control decision, then choose the sensing location. For exposed, relatively even layers of wood fiber on a conveyor, a non-contact <Link href="/products/online-nir-moisture-analyzer" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">online NIR moisture analyzer</Link> can provide rapid trend data without contacting the material. Position it after drying or conditioning and before the blender when the goal is to stabilize furnish entering resin application.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        If the question is moisture through a deeper, denser bed rather than at the exposed surface, assess a <Link href="/products/microwave-moisture-system" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">microwave moisture measurement system</Link> instead. It is designed for a through-belt or chute installation and can be a better fit where bed depth varies or bulk moisture is the control variable. The measurement method should follow material presentation; no single instrument setup is appropriate for every wood-fiber line.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Where to install the sensor</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-primary/80 marker:text-accent">
        <li><strong>After fiber drying or conditioning:</strong> use the signal to identify feed and dryer changes before they reach resin blending.</li>
        <li><strong>Before the blender:</strong> relate moisture trend to resin-addition strategy and furnish flow, while retaining the plant&apos;s established formulation limits.</li>
        <li><strong>After blending or mat formation:</strong> use a second, application-reviewed point when the process needs confirmation of the material presented to the press.</li>
        <li><strong>At finished-board conditioning:</strong> use quality trending and moisture-release checks; this point is not a replacement for control upstream of the press.</li>
      </ul>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The <Link href="/industries/wood-fiber-board-materials" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">wood fiber and board materials application page</Link> summarizes common conveyor and conditioned-fiber installation points. A site survey should verify belt coverage, stand-off distance, vibration, dust accumulation, material depth, and access for cleaning before any final placement is approved.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Calibration and commissioning: make the online value useful</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Build the calibration against representative samples taken from the same material stream and analyzed with the plant&apos;s approved reference method. Include the normal operating range as well as expected species, particle-size, resin, and temperature changes. Keep time-stamped samples so the laboratory result is paired with the correct online reading rather than with a later material batch.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        During commissioning, define the required response time and averaging window, then compare trend direction before closing a control loop. Check for signal shifts caused by belt exposure, layer thickness, dust on an optical window, or changes in the material background. Use routine reference checks to verify model health; recalibrate when the furnish or process formulation changes materially.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Quality and energy benefits to evaluate</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The practical benefit is earlier visibility, not a claim that moisture measurement alone fixes board quality. When a reliable online signal is connected to a disciplined operating response, a plant can investigate dryer drift sooner, avoid operating with an unnecessarily conservative drying margin, and make sampling more targeted. This supports steadier furnish preparation and gives the press team better context when density, bonding, thickness, or surface defects begin to move.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        For an application review, document the wood species mix, moisture range, conveyor geometry, material depth, dryer location, and the decision the signal must support. That information is more valuable than selecting a sensor solely from a nominal accuracy figure.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Sources</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6 text-sm leading-relaxed text-primary/80 marker:text-accent">
        <li><SourceLink href="https://research.fs.usda.gov/download/treesearch/37428.pdf">USDA Forest Products Laboratory, Wood Handbook: Moisture Relations and Physical Properties of Wood, Chapter 4</SourceLink>. Definitions, hygroscopic behavior, and green-wood moisture context.</li>
        <li><SourceLink href="https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr113/ch10.pdf">USDA Forest Products Laboratory, Wood-Based Composites and Panel Products, Chapter 10</SourceLink>. Conventional particleboard mat and post-press moisture ranges.</li>
        <li><SourceLink href="https://research.fs.usda.gov/treesearch/24924">USDA Forest Service, Dynamic Control of Moisture During Hot Pressing of Wood Composites</SourceLink>. Pressing, vapor release, and manufacturing context.</li>
      </ul>
    </>
  );
}

function CarbonBlackPelletDryingArticle() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-primary">Why residual moisture is a real carbon-black process variable</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Carbon black is commonly converted into pellets to improve handling after production. In the wet-pelletizing route, water and a binding agent are added in a pin mixer, then the pellets are dried in a rotary dryer. <SourceLink href="https://orioncarbons.com/wp-content/uploads/2025/03/What-is-carbon-black-brochure.pdf">Orion&apos;s 2025 carbon-black technical brochure</SourceLink> describes this sequence and notes that the binding agent helps the pellets resist attrition during processing and transport. The dryer therefore has two connected jobs: remove water reliably and preserve a pellet that can still be handled and dispersed as intended.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The relevant laboratory value is not always a pure water value. <SourceLink href="https://store.astm.org/d1509-24.html">ASTM D1509-24</SourceLink> defines heating loss for carbon black at 125°C and states that the loss is primarily moisture, while other volatile materials may also be lost. It also identifies carbon black as hygroscopic: uptake depends on surface area, relative humidity, ambient temperature, and exposure time. For process control, that means the online result, the laboratory reference method, the sampling time, and the product grade must be defined together rather than treated as interchangeable numbers.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">The measurement challenge: black pellets, changing bed depth, and a delayed reference</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A grab sample from dryer discharge can confirm a batch result, but it cannot show the trend while material is still moving through the dryer. Feed-water changes, pellet-size distribution, burner response, recycle, and residence-time shifts can all change residual moisture before the next laboratory result is available. Sampling also needs careful timing: a sample collected after cooling, screening, or storage may not represent the material that was at the sensor when the control decision was made.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Carbon black adds a second challenge. Its dark surface and the possibility of a thick or uneven moving bed make it important to distinguish surface moisture indication from a bulk measurement. Optical instruments should not be assumed to perform identically across all black grades and pellet presentations; a representative feasibility test is essential. Where the control question is the moisture through the material layer, a through-belt measurement with load compensation is often the more direct engineering choice.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Recommended instrumentation approach</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        For a continuous belt or chute carrying a variable-depth bed of carbon black pellets, evaluate a <Link href="/products/microwave-moisture-system" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">microwave moisture measurement system</Link>. A microwave installation places the transmitter and receiver on opposite sides of the moving material so the signal passes through the full layer; its load-compensation option is intended for changing material thickness. That makes it a strong candidate where the control action is a dryer-energy, feed-water, or residence-time adjustment based on bulk residual moisture.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A non-contact <Link href="/products/online-nir-moisture-analyzer" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">online NIR moisture analyzer</Link> may still be worth evaluating for a thin, consistently presented surface layer when rapid surface-trend information is the goal. However, the material&apos;s low reflectance, dust, and product-to-product optical differences must be proven during a site trial. Do not select the method from a nominal accuracy figure alone; select it from the material presentation and the control decision.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Installation points that produce useful data</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-primary/80 marker:text-accent">
        <li><strong>Dryer discharge conveyor:</strong> the preferred control point when the signal needs to reflect the final drying result before storage or screening.</li>
        <li><strong>After cooling, before storage:</strong> useful for product-release trending and for identifying moisture pickup or process drift between hot discharge and the silo.</li>
        <li><strong>Before bulk loading or bagging:</strong> a verification point when shipment condition is critical; it should complement, not replace, control at dryer discharge.</li>
      </ul>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        At every location, inspect belt coverage, bed-depth range, vibration, metalwork clearance, dust deposition, access for maintenance, and the safe routing of cables or process connections. Carbon-black transfers also deserve special care for pellet breakage. Orion notes that conveying choice should account for pellet hardness, while Cabot&apos;s <SourceLink href="https://www.cabotcorp.com/solutions/applications/industrial-rubber-products/dispersion">dispersion guidance</SourceLink> describes the same tradeoff: pellets must be soft enough to break down in compounding, but hard enough to convey. The sensor should monitor the line without becoming a mechanical source of attrition.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Calibration and commissioning: align online and laboratory data</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Use the plant&apos;s approved reference method and record whether it reports moisture or heating loss. For an ASTM D1509 comparison, remember that the method&apos;s heating loss can include volatile material other than water; treated grades with added volatiles require separate consideration. Collect time-stamped samples from the exact stream seen by the sensor, allow for transport delay to the sample point, and cover the normal operating moisture range rather than calibrating only around one convenient value.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Commission in stages. First verify repeatable trend direction against laboratory results. Then set filtering and response time so the value is stable enough to use but not so slow that it hides a dryer upset. Only after repeatable operation should the signal be connected to an advisory or closed-loop control strategy. Recheck the model when the plant changes grade, pelletizer binder, bed depth, furnace feedstock, or laboratory method.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">What better moisture visibility can support</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Online moisture data does not replace pellet-strength, sieve, density, dispersion, or safety testing. It gives operators earlier visibility into a drying variable that affects the decisions around energy and product release. Used with a disciplined operating response, it can reduce reliance on delayed samples, help avoid an unnecessarily conservative drying margin, and make laboratory checks more targeted. This is relevant to both producer operations and downstream <Link href="/industries/rubber-additives" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">rubber-additive handling</Link>, where predictable pellet condition supports stable conveying and compounding.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A sound application review starts with the pellet grade, expected residual-moisture range, dryer and conveyor layout, bed-depth variation, dust conditions, reference-test procedure, and the decision the signal must support. Those details will determine whether an online measurement point can deliver an actionable process value.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Sources</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6 text-sm leading-relaxed text-primary/80 marker:text-accent">
        <li><SourceLink href="https://store.astm.org/d1509-24.html">ASTM D1509-24, Standard Test Methods for Carbon Black—Heating Loss</SourceLink>. Scope, 125°C conditioning, hygroscopicity, and the distinction between heating loss and moisture.</li>
        <li><SourceLink href="https://orioncarbons.com/wp-content/uploads/2025/03/What-is-carbon-black-brochure.pdf">Orion, What Is Carbon Black? (2025)</SourceLink>. Wet pelletizing, rotary drying, pellet handling, and carbon-black application context.</li>
        <li><SourceLink href="https://www.cabotcorp.com/solutions/applications/industrial-rubber-products/dispersion">Cabot, Dispersion in Industrial Rubber Products</SourceLink>. The tradeoff between pellet breakdown for dispersion and sufficient hardness for conveying.</li>
      </ul>
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = getArticleContent(slug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.alzro.com" },
          { name: "Blog", url: "https://www.alzro.com/blog" },
          {
            name: post.title,
            url: `https://www.alzro.com/blog/${slug}`,
          },
        ])}
      />

      <PageBanner
        image={siteImages.blogBanner}
        label={post.category}
        title={post.title}
        className="pb-16"
        headerSlot={
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        }
      >
        <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </PageBanner>

      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted font-medium mb-8">
            {post.excerpt}
          </p>
          {slug === "wood-fiberboard-hot-press-moisture-control" ? (
            <WoodFiberboardArticle />
          ) : slug === "carbon-black-pellet-drying-moisture-control" ? (
            <CarbonBlackPelletDryingArticle />
          ) : (
            paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-6 text-base leading-relaxed text-primary/80">
                {paragraph}
              </p>
            ))
          )}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Section>

      <CTASection
        headline="Need Help with Your Application?"
        description="Share your material, measurement point, and moisture target, and we can help you judge whether online measurement is a good fit."
        primaryLabel="Talk to Engineer"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
