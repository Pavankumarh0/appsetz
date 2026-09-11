export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server';
import { Project } from '@/types';
import { nocomProject } from '@/lib/featured';

export async function GET(request: NextRequest) {
  try {
    // Add requested projects manually
    const projects: Project[] = [
      nocomProject,
      {
        id: 'sunwin-solar',
        title: 'Sunwin Solar Power Solutions',
        description: 'A professional corporate landing website designed for a solar energy solutions company. Features include a clean corporate layout, service showcase sections, lead generation forms, trust-building testimonials, and SEO-optimized structure. Built to establish credibility and generate qualified leads for solar installation services.',
        techStack: ['Web Design', 'Corporate', 'SEO'],
        images: ['/images/sunwin.png'],
        githubUrl: '',
        liveDemoUrl: '',
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        media: ''
      },
      {
        id: 'vriddhi-psych',
        title: 'Vriddhi Psychological Services',
        description: 'A calming and professional landing page built for a psychological counseling service. Features include emotion-focused design, service explanation sections, appointment booking integration, trust-focused content layout, and soft, welcoming UI elements. Creates a safe, approachable, and professional online presence for mental health services.',
        techStack: ['Web Design', 'Healthcare', 'UI/UX'],
        images: ['/images/vriddhi.png'],
        githubUrl: '',
        liveDemoUrl: '',
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        media: ''
      }
    ];

    // Featured (live) products first, then by createdAt desc
    projects.sort((a, b) =>
      Number(!!b.featured) - Number(!!a.featured) ||
      (new Date(b.createdAt).getTime() || 0) - (new Date(a.createdAt).getTime() || 0)
    );

    return new NextResponse(JSON.stringify(projects), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
