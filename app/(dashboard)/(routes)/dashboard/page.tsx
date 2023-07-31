import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-indigo-400">Dashboard</h1>
      <Button>Click me </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
