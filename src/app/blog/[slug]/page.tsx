import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/ui/PageBanner";
import { CTASection } from "@/components/ui/CTASection";
import { siteImages } from "@/lib/images";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { getBlogPost, getBlogSlugs } from "@/content/blog";
import { formatDate } from "@/lib/utils";

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
    "moisture-control-lithium-battery-production": [
      "Lithium battery manufacturing demands unprecedented precision in moisture control. Cathode active materials like NMC (LiNiMnCoO₂) and LFP (LiFePO₄) are highly hygroscopic — even trace moisture causes irreversible degradation of electrochemical performance.",
      "In GWh-scale production facilities, traditional offline Karl Fischer titration creates a critical gap: by the time lab results return, thousands of kilograms of material may have been processed out of specification.",
      "ALZRO NIR-5000 analyzers deployed at coating and drying stages provide continuous moisture feedback with ±0.1% accuracy. The AI-assisted calibration adapts to batch variations in raw material moisture, maintaining measurement stability across production shifts.",
      "Key integration points include: pre-mixing moisture verification, inline coating line measurement, post-dryer moisture confirmation, and automated quality release based on configurable moisture thresholds.",
      "Results from a recent deployment at a 20 GWh cathode facility showed 2.8% yield improvement, 70% reduction in offline testing, and coating defect rate reduction from 4.1% to 0.9% within six months of installation.",
    ],
    "real-time-moisture-monitoring-explained": [
      "Real-time moisture monitoring represents a fundamental shift from reactive quality control to proactive process optimization. Instead of discovering moisture problems after production, inline analyzers enable immediate correction.",
      "The measurement loop operates continuously: the sensor reads moisture content, transmits data to the control system via Modbus or OPC UA, the PLC compares against setpoints, and adjustment signals are sent to dryers, feeders, or diverters — all within seconds.",
      "ROI calculation for online moisture analyzers typically considers: reduced material waste (15-30%), decreased laboratory testing costs, improved energy efficiency in drying operations, and reduced downtime from out-of-spec production runs.",
      "Implementation best practices include selecting measurement points with representative material flow, ensuring proper sensor mounting for consistent material presentation, configuring alarm thresholds based on process capability studies, and establishing a verification protocol against laboratory reference methods.",
    ],
    "nir-vs-microwave-moisture-measurement": [
      "Near-Infrared (NIR) and microwave technologies represent the two dominant approaches for industrial online moisture measurement, each with distinct advantages depending on application requirements.",
      "NIR spectroscopy measures surface and near-surface moisture by analyzing water absorption at specific wavelengths (1450nm and 1940nm). It excels with homogeneous powders, granules, and coatings, offering non-contact measurement with sub-second response times and ±0.1% typical accuracy.",
      "Microwave transmission technology measures moisture throughout the material volume by analyzing the dielectric properties of water. With penetration depths up to 300mm, microwave sensors are ideal for dense bulk materials, conveyor belt applications, and high-moisture ranges (up to 80%).",
      "Selection criteria include: material homogeneity (NIR for uniform surfaces, microwave for heterogeneous bulk), moisture range (NIR: 0.01-99.9%, microwave: 0.1-80%), installation constraints (NIR: above material, microwave: through material), and environmental conditions (both offer IP65+ enclosures).",
      "Many advanced installations combine both technologies at different process stages — NIR for precision coating measurement and microwave for bulk material verification.",
    ],
    "common-industrial-moisture-measurement-mistakes": [
      "After deploying 500+ moisture analyzers globally, our engineering team has identified five critical mistakes that compromise measurement performance and ROI.",
      "Mistake 1: Incorrect sensor placement. Mounting too far from the material or at an angle causes inconsistent readings. Solution: Follow ALZRO mounting guidelines for your specific material and process configuration.",
      "Mistake 2: Skipping material-specific calibration. Generic factory calibrations may not account for your specific material matrix. Solution: Perform field calibration with representative production samples.",
      "Mistake 3: Ignoring environmental factors. Temperature, dust, and vibration affect measurement stability. Solution: Use appropriate enclosure ratings and implement environmental compensation.",
      "Mistake 4: No integration with process control. Measuring without acting on data wastes the investment. Solution: Connect to PLC/SCADA and configure closed-loop control or automated alarms.",
      "Mistake 5: Inadequate maintenance planning. Optical windows and sensor surfaces require periodic cleaning. Solution: Include sensor maintenance in your preventive maintenance schedule.",
    ],
    "ai-assisted-calibration-industrial-sensors": [
      "Traditional industrial sensors require periodic manual recalibration as materials, environments, and process conditions change over time. ALZRO's AI-assisted calibration system addresses this challenge through continuous adaptive learning.",
      "The system collects measurement data alongside process variables (temperature, material type, production rate) and builds predictive models that detect calibration drift before it affects measurement accuracy. When drift is detected, the system automatically adjusts calibration parameters within validated bounds.",
      "Machine learning models are trained on factory calibration data and refined with field data from each installation. This hybrid approach maintains traceability to reference methods while adapting to site-specific conditions.",
      "Field results show AI-assisted calibration reduces manual calibration frequency by 75% and maintains measurement accuracy within specification for 3x longer periods compared to fixed-calibration approaches.",
    ],
    "scada-integration-moisture-analyzers": [
      "Integrating moisture analyzers with SCADA systems enables centralized process monitoring, historical trending, and automated reporting across your entire facility.",
      "ALZRO analyzers support OPC UA (recommended for modern SCADA), Modbus TCP/RTU, and Profibus DP communication protocols. For legacy systems, 4-20mA analog outputs provide universal compatibility.",
      "Step 1: Configure the analyzer's communication settings (IP address, Modbus register map, or OPC UA server endpoint). Step 2: Create tags in your SCADA system mapping to moisture value, alarm status, and diagnostic data. Step 3: Build trend displays and configure alarm thresholds. Step 4: Set up automated reporting for shift summaries and quality records.",
      "Pre-configured integration packages are available for Siemens WinCC, Rockwell FactoryTalk, Inductive Automation Ignition, and Schneider Electric EcoStruxure platforms.",
    ],
  };

  return contentMap[slug] ?? [
    "Industrial moisture measurement is a critical process variable that directly impacts product quality, yield, and operational efficiency.",
    "ALZRO provides comprehensive solutions for continuous inline moisture monitoring across diverse industrial applications.",
    "Contact our engineering team for application-specific guidance and technical support.",
  ];
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
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="mb-6 text-base leading-relaxed text-primary/80">
              {paragraph}
            </p>
          ))}
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
        description="Our engineers are ready to discuss your specific moisture measurement requirements."
        primaryLabel="Talk to Engineer"
        primaryHref="/contact?type=engineer"
      />
    </>
  );
}
