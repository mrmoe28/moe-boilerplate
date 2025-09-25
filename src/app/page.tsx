import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex max-w-md flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">Moe Starter</h1>
        <p className="text-muted-foreground">
          Next.js + shadcn + Clerk Auth + super_design tokens.
        </p>
        <div className="flex gap-2">
          {userId ? (
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}