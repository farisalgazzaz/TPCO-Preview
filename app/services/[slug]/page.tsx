import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '../content';
import ServicePage from './service-page';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.ar} | ${service.en} | TPCO`,
    description: service.descAr,
    alternates: { canonical: `https://tpco-preview.vercel.app/services/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!services.some(item => item.slug === slug)) notFound();
  return <ServicePage slug={slug} />;
}
