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
      "In many starch plants, moisture is still judged by intermittent sampling or operator experience. This creates a delay between what is happening in the dryer and what the team knows about it, especially when material moisture changes quickly.",
      "An online NIR moisture analyzer installed at the dryer outlet or screw conveyor gives continuous feedback during production. Instead of waiting for periodic checks, operators can see moisture trends and adjust feed rate, air volume, or drying intensity much earlier.",
      "This type of setup is especially useful where one operator needs to support both drying and packaging, or where production wants a more consistent final-moisture window without adding more manual checks.",
      "The biggest value is usually practical rather than theoretical: more stable finished moisture, less operator guesswork, lower labor intensity, and better support for day-to-day process control.",
    ],
    "baking-soda-moisture-measurement-guide": [
      "In sodium bicarbonate production, moisture can vary significantly, while traditional testing often takes too long to help production in real time. Offline measurement may require many hours, which is too slow for active process correction.",
      "That time gap matters because drying conditions can shift long before lab data comes back. By the time operators confirm the actual moisture result, a large amount of product may already have moved further down the line.",
      "An online near-infrared moisture analyzer reduces that delay by measuring during production instead of after the fact. The value is not only faster data, but faster decisions: production can adjust drying conditions while material is still in process.",
      "For baking soda lines, this usually supports three goals at once: improve detection efficiency, reduce reliance on delayed manual testing, and hold final moisture in a narrower control band.",
      "When discussing a project, it helps to define the measurement point clearly, such as after primary drying, at the transfer section, or before final packaging. That makes it easier to match the instrument response time and output method to the process.",
    ],
    "nano-calcium-carbonate-drying-quality": [
      "Moisture control in nano calcium carbonate is tied directly to appearance, flowability, and drying cost. Poor control can create two opposite problems: too much moisture leads to agglomeration and weaker flow, while too little moisture can contribute to overheating and additive scorching.",
      "That balance matters because over-drying can reduce whiteness or cause yellowing, while high final moisture can make the powder less stable in storage and more difficult in downstream use.",
      "An online moisture analyzer helps by giving a continuous view of the drying endpoint instead of forcing the plant to rely only on periodic samples. This is especially helpful when the process is sensitive to small shifts in drying temperature or residence time.",
      "In practice, plants often use online moisture data to protect quality and control cost at the same time. The goal is not just to dry harder, but to dry to the right point consistently.",
      "For calcium carbonate projects, a good discussion usually includes the drying section, expected moisture window, product whiteness requirements, and whether the plant wants only indication or a signal that can be shared with the control system.",
    ],
    "ceramic-spray-drying-moisture-stability": [
      "In ceramic raw-material preparation, moisture affects granule shape, pore structure, surface hardness, and the stability of later forming steps. Spray-drying moisture conditions directly influence powder quality and eventually brick-body quality.",
      "When evaporation is unstable, plants may see more hollow particles, uneven granules, or wider variation in powder behavior. Periodic manual checks are often too slow to catch those swings before quality moves.",
      "Online moisture measurement gives a more continuous picture of the drying process. That makes it easier to stabilize the moisture profile through the spray-drying section and keep powder entering the next stage in a more consistent condition.",
      "This does not remove the need for process know-how, but it gives the operating team a much more useful signal than occasional manual testing. In many projects, the improvement is as much about process visibility as it is about final accuracy.",
      "For ceramic lines, it is usually worth discussing whether the target is tighter granule consistency, lower energy loss, fewer manual checks, or better forming stability, because that helps define the most useful installation point.",
    ],
    "washed-sand-moisture-for-concrete-batching": [
      "Washed sand moisture has a direct influence on actual water addition in concrete batching. Because mix ratios are commonly based on dry aggregate assumptions, changing sand moisture means the plant must also change added water if it wants stable concrete performance.",
      "This becomes harder during seasonal shifts, rain, or changing storage conditions. If moisture moves and batching water does not, the result can be unstable workability, strength variation, and more operator correction.",
      "Online moisture measurement helps by showing moisture changes continuously instead of relying only on occasional tests. That gives batching operators a faster basis for correcting water addition and keeping the process closer to target.",
      "There is also a clear labor benefit: when moisture information is easier to access, one operator can manage production with less routine manual checking and less dependence on repeated laboratory measurements.",
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

function SinterMixMoistureControlArticle() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-primary">Why sinter-mix water is a process variable, not a fixed recipe number</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Before iron ore fines are charged to a sinter strand, they are blended with fluxes, fuel, and return fines, then granulated with water to form quasi-particles. The point of water addition is not simply to reach one percentage on a display. It is to create enough capillary binding for fine particles to adhere to coarser nuclei while preserving the voidage needed for gas to pass through the green bed.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The target must follow the actual blend. In a Kobe Steel study published in <SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/49/5/49_5_618/_article">ISIJ International</SourceLink>, the added moisture that maximized packed-bed permeability was below the saturation moisture for every ore tested when size distribution was held constant; adding more coarse particles also shifted the optimum toward lower moisture. That is a practical warning against copying a target from a different ore blend, season, or fines ratio.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">The measurement challenge: total water is not always water available for granulation</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Moisture that is absorbed into porous ore is not necessarily available at particle contacts to build stable granules. A 2018 <SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/58/8/58_ISIJINT-2018-141/_html/-char/en">ISIJ International granulation study</SourceLink> defines available granulation water as total water added minus water absorbed by the feed materials, and reports that a higher fraction near 0.1 mm tends to reduce permeability and increase the moisture needed for granulation. Incoming moisture, particle-size distribution, porosity, and blend composition therefore all belong in the control context.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Water distribution also has a time component. A review of iron-ore granulation research reports that the ores it cites reached 68% to 78% of final water saturation after 60 seconds of immersion, while complete saturation typically took 10<sup>5</sup> seconds. <SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/63/4/63_ISIJINT-2022-460/_html/-char/en">The review</SourceLink> uses this behavior to explain why ore texture and water migration matter during granulation. In plant terms, a sample or instrument reading taken immediately after spraying may not represent the same state as the material arriving at the strand.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">What the process impact looks like</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Too little available moisture can leave fines poorly attached and reduce bed permeability. Too much can over-wet the mix, deform granules, reduce voidage, and add water that must later be evaporated. The permeability response is usually a curve rather than a straight line: the 2018 study found permeability initially rose with added moisture, reached a maximum, then fell at higher moisture for the tested mixes.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The operating window can move when mixing changes. In a 2020 study of a 100% fine-grained iron-ore material, intensive mixing reduced the reported proper moisture consumption from 9.25% to 8.75% while improving granulation and sinter quality. <SourceLink href="https://www.sciencedirect.com/science/article/pii/S2238785420319037">That result</SourceLink> is not a recommended plant target; it is evidence that mixer action and water distribution can change the amount of water a specific blend needs.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Recommended instrumentation approach</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        For a mixed, variable-depth sinter stream on a conveyor, start by evaluating a <Link href="/products/microwave-moisture-system" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">microwave moisture measurement system</Link>. A through-belt measurement is a logical fit when the control question is the average moisture through the moving layer rather than only the exposed surface. Load compensation should be included in the application review where bed depth varies, because a moisture signal that does not account for changing mass can confuse a thickness change with a water change.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A non-contact <Link href="/products/online-nir-moisture-analyzer" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">online NIR moisture analyzer</Link> can be evaluated for a thin, even, exposed material layer where fast surface-trend information is the objective. It should not be assumed to represent the bulk of a deep or uneven sinter bed. Method selection should be based on the material presentation, dust and steam conditions, depth range, and the specific control decision—not a nominal accuracy figure alone.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Installation points that support a useful control loop</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-primary/80 marker:text-accent">
        <li><strong>After water addition and primary mixing:</strong> use the trend to confirm whether the initial addition is moving with incoming-material changes.</li>
        <li><strong>At granulator or mixer discharge:</strong> use a representative, settled material stream to judge the condition entering the sinter feed conveyor.</li>
        <li><strong>Before strand feed:</strong> use as a verification point when transport, return-fines changes, or water migration could make the final feed differ from the earlier reading.</li>
      </ul>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The <Link href="/industries/sinter-mix" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">ALZRO sinter-mix application page</Link> outlines these preparation, granulation, and bed-feed locations. At each candidate point, confirm belt coverage, material depth and segregation, chute geometry, vibration, metalwork clearance, dust buildup, and access for cleaning and reference sampling. A sensor must see a representative cross-section of the stream before its value can be used for water control.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Calibration and commissioning: connect the number to plant performance</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Calibrate against time-stamped, representative samples collected from the same stream and analyzed by the plant&apos;s approved moisture method. Document the wet-basis or dry-basis convention, transport delay between sensor and sample point, averaging window, and bed-depth range. Collect samples across normal operating conditions instead of fitting the model only around one convenient value.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        During commissioning, compare online moisture trends with permeability, mixer torque or power, suction conditions, granule-size observations, and sinter performance according to the plant&apos;s existing practice. Begin with operator guidance or a bounded advisory signal. Only consider automatic water trimming after the signal has remained stable through normal changes in ore source, return-fines rate, and weather. Revalidate the calibration when those material conditions change materially.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Quality and energy benefits to evaluate</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Continuous moisture visibility does not replace granule-size checks, permeability testing, fuel control, or final sinter-quality testing. It provides an earlier input for keeping granulation near the plant&apos;s validated operating window. Used with disciplined operating rules, it can help teams identify moisture drift sooner, reduce trial-and-error adjustment after a blend change, and avoid carrying unnecessary water into the thermal process.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A sound project definition starts with the ore and return-fines recipe, incoming moisture variation, fines distribution, water-addition method, mixer residence time, belt depth, site conditions, reference method, and intended control action. Those facts determine whether an online moisture value will be a useful process variable rather than simply another number on the control screen.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Sources</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6 text-sm leading-relaxed text-primary/80 marker:text-accent">
        <li><SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/49/5/49_5_618/_article">Matsumura et al., ISIJ International 49 (2009), 618–624</SourceLink>. Ore-specific optimum moisture, saturation behavior, and particle-size effects.</li>
        <li><SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/58/8/58_ISIJINT-2018-141/_html/-char/en">Zhou et al., ISIJ International 58 (2018)</SourceLink>. Available granulation water, particle-size distribution, and packed-bed permeability.</li>
        <li><SourceLink href="https://www.jstage.jst.go.jp/article/isijinternational/63/4/63_ISIJINT-2022-460/_html/-char/en">Zhou et al., ISIJ International 63 (2023)</SourceLink>. Review of water migration, moisture capacity, and iron-ore granulation technology.</li>
        <li><SourceLink href="https://www.sciencedirect.com/science/article/pii/S2238785420319037">Gan et al., Journal of Materials Research and Technology 9 (2020), 14443–14453</SourceLink>. Intensive mixing, water distribution, and fine-grained sinter-feed results.</li>
      </ul>
    </>
  );
}

function DriedNoodleMoistureControlArticle() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-primary">Why the drying curve matters as much as the final number</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Dried-noodle manufacture is a controlled water-removal process, not simply a final inspection step. As a noodle strand moves through a drying tunnel, moisture leaves the surface first and then migrates outward from the interior. Temperature, relative humidity, airflow, strand geometry, flour composition, and line loading all affect that balance. A study in <SourceLink href="https://www.mdpi.com/2304-8158/13/2/268">Foods</SourceLink> describes moisture content and water activity as strongly linked to texture transformation during Chinese dried-noodle drying, and notes that faster internal moisture diffusion at elevated temperature can create an overly hardened surface layer. The practical consequence is that a passing final average does not, by itself, prove that the drying process was uniform.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The product target must be tied to the relevant specification and market. For example, <SourceLink href="https://www.fao.org/input/download/standards/10658/CXS_249e.pdf">Codex CXS 249-2006</SourceLink> sets a maximum moisture content of 10% for fried instant noodles and 14% for non-fried instant noodles; it does not apply to pasta. For a separate U.S. procurement specification, <SourceLink href="https://www.ams.usda.gov/sites/default/files/media/CID%20Noodles%2C%20Egg%2C%20Enriched.pdf">USDA AMS enriched shelf-stable egg noodles</SourceLink> have a 13.00% maximum moisture requirement. These are examples, not universal production setpoints: each plant should use the legal, customer, formulation, and shelf-life requirements that govern its own product.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">The measurement challenge: a laboratory result arrives after the process has moved on</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A grab sample can establish the release value, but it is an intermittent result. It can miss short periods of under-drying after a humidity change, uneven airflow across a wide belt, a dryer-zone upset, or moisture pickup during cooling. It also provides limited warning when the outer surface dries faster than the strand interior. Research on dried spaghetti confirms that cracks formed during drying reduce commercial value and quality, which makes prevention and early process visibility more useful than finding defects only at final inspection.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Moisture content and water activity answer different questions. Moisture content is the mass of water in the product, while water activity describes the availability of that water. The <SourceLink href="https://www.mdpi.com/2304-8158/13/2/268">Foods study</SourceLink> reports that water activity can be a better predictor of texture change in practical testing. An online moisture instrument should therefore complement—not replace—the plant&apos;s validated water-activity, microbiological, sensory, and packaging verification program where those controls apply.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Recommended instrumentation approach</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        For exposed noodle strands or dough sheets travelling on a stable conveyor, a non-contact <Link href="/products/online-nir-moisture-analyzer" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">online NIR moisture analyzer</Link> can be evaluated as a fast trend measurement. The most useful application is normally at the end of the main drying section, or after equilibration and cooling, where the signal represents the product sent to packaging. It should view a consistently covered, representative section of the belt rather than gaps, overlaps, or a single edge of the product flow.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        When the line uses a deep, dense bulk transfer rather than an exposed sheet or strand layer, assess a <Link href="/products/microwave-moisture-system" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">microwave moisture measurement system</Link> for a through-belt or chute installation. Microwave measurement can be a better fit when the control question is bulk moisture through a changing material layer. The right method depends on how the product is presented at the measurement point, not on a generic accuracy comparison.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Installation points that make the signal actionable</h2>
      <ul className="mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-primary/80 marker:text-accent">
        <li><strong>After the main drying zone:</strong> trend water removal before the product enters final conditioning, where operators can check the response to dryer temperature, humidity, airflow, or belt-speed changes.</li>
        <li><strong>After equilibration or cooling:</strong> verify the moisture condition of material approaching packaging; this point can reveal whether the finished product differs from the earlier dryer-outlet trend.</li>
        <li><strong>Before packaging:</strong> use a representative, stable product presentation for final online trending and targeted release sampling.</li>
      </ul>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The <Link href="/industries/grain-noodle-processing" className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary">ALZRO dough sheet and dried noodle application page</Link> shows common locations from forming through final drying and packing. During the site survey, check optical stand-off distance, belt vibration, lane coverage, strand overlap, ambient light, dust or flour accumulation, cleaning access, and the transport time between the sensor and any reference-sample point.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Calibration and commissioning: keep the online value traceable to the approved method</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Define the reference method before fitting the online model. Codex CXS 249-2006 specifies an oven method at 105°C and reports moisture as loss in mass; it specifies two hours for fried instant noodles and four hours for non-fried noodles. A plant may be governed by another validated method, but it should document that method, its sample preparation, and whether results are reported on a wet basis or dry basis. Compare the online reading only with samples that come from the same material stream and are time-aligned for transport delay.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        Build the calibration with representative samples across the normal product range: recipes, noodle thicknesses, flour changes, line speeds, drying conditions, and final moisture values. Keep routine checks after commissioning, especially after recipe or packaging changes. Begin with a displayed trend and operator response rules; introduce any automatic dryer adjustment only after the signal has proved stable through normal production variation and has been reviewed within the plant&apos;s food-safety and quality system.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Quality and energy benefits to evaluate</h2>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        The immediate benefit of continuous measurement is earlier detection of drift, not a promise that a sensor alone will prevent every defect. Used with defined operating actions, an online trend can help a team investigate dryer-zone changes sooner, focus laboratory sampling where the trend moves, and avoid holding every product at an unnecessarily conservative drying margin. That supports more consistent texture, breakage control, and packaging readiness while protecting the plant&apos;s validated final-moisture target.
      </p>
      <p className="mb-6 text-base leading-relaxed text-primary/80">
        A useful project definition includes the noodle type, applicable product specification, normal moisture range, belt layout and coverage, strand or sheet geometry, dryer-zone configuration, cooling and packaging sequence, reference method, and intended operator or control-system response. Those facts determine whether a measurement point will provide a representative and actionable process signal.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-primary">Sources</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6 text-sm leading-relaxed text-primary/80 marker:text-accent">
        <li><SourceLink href="https://www.fao.org/input/download/standards/10658/CXS_249e.pdf">Codex CXS 249-2006, Standard for Instant Noodles</SourceLink>. Instant-noodle moisture limits and the specified oven determination method.</li>
        <li><SourceLink href="https://www.ams.usda.gov/sites/default/files/media/CID%20Noodles%2C%20Egg%2C%20Enriched.pdf">USDA AMS, Noodles, Egg, Enriched, Shelf Stable</SourceLink>. U.S. procurement specification for 13.00% maximum moisture, analytical verification, and cracked-product limits.</li>
        <li><SourceLink href="https://www.mdpi.com/2304-8158/13/2/268">Zhang et al., Foods 13 (2024), 268</SourceLink>. Moisture migration, water activity, drying conditions, and texture transformation in Chinese dried noodles.</li>
        <li><SourceLink href="https://pubmed.ncbi.nlm.nih.gov/28067599/">Ogawa and Adachi, Journal of Food Engineering 207 (2017), 12–19</SourceLink>. Evidence that drying cracks in spaghetti reduce commercial value and quality.</li>
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
          ) : slug === "sinter-mix-moisture-control-granulation-permeability" ? (
            <SinterMixMoistureControlArticle />
          ) : slug === "dried-noodle-moisture-control-drying-curve" ? (
            <DriedNoodleMoistureControlArticle />
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
