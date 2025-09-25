// Clerk App Router catch-all route.
// This generates GET/POST handlers for sign-in, sign-out, and other Clerk endpoints.

export async function GET() {
  return Response.json({ message: 'Clerk authentication endpoint' })
}

export async function POST() {
  return Response.json({ message: 'Clerk authentication endpoint' })
}
