import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

const rsvpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  attending: z.enum(['yes', 'no']),
  guestCount: z.number().min(1).max(10).optional(),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'rsvp-submissions.json');

function getSubmissions(): unknown[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch {
    /* ignore parse errors, return empty array */
  }
  return [];
}

function saveSubmissions(submissions: unknown[]): void {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = rsvpSchema.parse(body);

    const submission = {
      ...validated,
      submittedAt: new Date().toISOString(),
    };

    const submissions = getSubmissions();
    submissions.push(submission);
    saveSubmissions(submissions);

    return NextResponse.json(
      { success: true, message: 'RSVP submitted successfully!' },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error('RSVP submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = getSubmissions();
    return NextResponse.json({
      success: true,
      data: submissions,
      total: submissions.length,
    });
  } catch (error) {
    console.error('RSVP fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
