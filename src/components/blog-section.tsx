"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
  };
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <h2 className="text-xl font-bold mb-4">Writings</h2>
      </BlurFade>
      <div className="space-y-2">
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 21 + id * 0.05}>
              <Link href={`/writing/${post.slug}`} className="block">
                <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-900/30 rounded-lg transition-colors group">
                  <p className="font-semibold tracking-tight">{post.metadata.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground text-sm">No writings yet. Stay tuned!</p>
        )}
      </div>
    </>
  );
}
