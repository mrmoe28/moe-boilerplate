import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex max-w-md flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold">Moe Starter</h1>
        <p className="text-muted-foreground">
          Next.js + shadcn + super_design tokens.
        </p>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}