import { NextRequest, NextResponse } from 'next/server';
import { Project } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params?.id;
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    // Hardcoded projects list
    const projects: Project[] = [
      {
        id: 'goalzy-ai',
        title: 'Goalzy',
        description: 'An AI-powered habit tracking application designed to help users build consistency and self-discipline intelligently. Features include AI-based habit suggestions, smart progress analytics, streak tracking, and personalized productivity recommendations. The goal is to move beyond traditional habit trackers by using AI to analyze patterns and help users improve faster.',
        techStack: ['AI', 'Mobile App', 'Behavioral Tech'],
        images: ['/images/goalzy.png'],
        githubUrl: '',
        liveDemoUrl: '',
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        media: ''
      },
      {
        id: 'pocketgrocer-ai',
        title: 'PocketGrocer',
        description: 'An AI-powered grocery comparison platform that helps users find the best deals across multiple stores. Features include real-time price comparison, AI-based savings suggestions, smart shopping list optimization, and budget tracking. Aimed at helping users save money by making smart, data-driven grocery buying decisions.',
        techStack: ['AI', 'E-commerce', 'Price Comparison'],
        images: ['/images/pocketgrocer.png'],
        githubUrl: '',
        liveDemoUrl: '',
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        media: ''
      },
      {
        id: 'slipto-app',
        title: 'Slipto',
        description: 'A modern expense-sharing application designed for friends, roommates, and teams. Features include group expense management, real-time in-app chat, instant balance calculations, and simplified settlement tracking. Designed to make splitting expenses transparent, simple, and communication-friendly.',
        techStack: ['Fintech', 'Real-time', 'Social'],
        images: ['/images/splito.png'],
        githubUrl: '',
        liveDemoUrl: '',
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        media: ''
      },
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
