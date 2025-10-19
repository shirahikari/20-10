import { personData, slugToName, nameToSlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PersonalCardClient from './PersonalCardClient'

interface PersonalPageProps {
  params: {
    slug: string
  }
}

export default function PersonalPage({ params }: PersonalPageProps) {
  const name = slugToName(params.slug)
  
  if (!name || !personData[name]) {
    notFound()
  }

  const personInfo = personData[name]

  return <PersonalCardClient name={name} personInfo={personInfo} />
}

// Pre-render all personal pages at build time
export function generateStaticParams() {
  const slugs = Object.keys(personData).map((n) => ({ slug: nameToSlug(n) }))
  return slugs
}

export function generateMetadata({ params }: PersonalPageProps): Metadata {
  const name = slugToName(params.slug)
  return {
    title: name ? `Thiệp 20/10 - ${name}` : 'Thiệp 20/10',
    description: 'Thiệp chúc mừng ngày 20/10 từ câu lạc bộ FIA',
  }
}
