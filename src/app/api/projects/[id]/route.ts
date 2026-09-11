import { NextRequest, NextResponse } from 'next/server';
import { Project } from '@/types';
import { nocomProject } from '@/lib/featured';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params?.id;
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    // Hardcoded projects list
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

    const project = projects.find(p => p.id === id);

    if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(project, {
      headers: { 'Cache-Control': 'no-store' }
    });
  } catch (err) {
    console.error('GET /api/projects/[id] failed', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
