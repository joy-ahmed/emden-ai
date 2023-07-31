"use client";

import {
  ArrowRight,
  FileCode2,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Image Generator",
    icon: Image,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image",
  },
  {
    label: "Video Generator",
    icon: Video,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/video",
  },
  {
    label: "Music Generator",
    icon: Music,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/music",
  },
  {
    label: "Code Generator",
    icon: FileCode2,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/code",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          A Generative AI tools for the next.
        </h2>
        <p className="text-center text-muted-foreground font-light text-sm md:text-lg">
          Interect with the clever AI and get job done!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
