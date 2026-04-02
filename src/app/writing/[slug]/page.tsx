"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface BlogPost {
  slug: string;
  source: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
}

export default function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`/api/blog`)
      .then((res) => res.json())
      .then((posts) => {
        const found = posts.find((p: BlogPost) => p.slug === params.slug);
        if (found) {
          setPost(found);
        } else {
          notFound();
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        notFound();
      });
  }, [params.slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="relative min-h-[100dvh]">
      {/* Vertical Layout Guides */}
      <div
        className="fixed inset-y-0 pointer-events-none z-0"
        style={{
          left: 'max(1rem, calc((100% - 48rem) / 2))',
          width: 'min(calc(100% - 2rem), 48rem)',
        }}
      >
        <div className="h-full w-full relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-px dark:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-px hidden dark:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='12' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
            }}
          />
        </div>
      </div>

      <main className="relative flex flex-col min-h-[100dvh] max-w-3xl mx-auto py-12 sm:py-20 z-10">
        <div className="px-6">
          {/* Header with back button and current time - ABOVE the dashed line */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
            <div className="text-sm text-muted-foreground">
              {currentTime}
            </div>
          </div>
        </div>

        <div
          className="mb-8 h-px w-screen dark:hidden"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />
        <div
          className="mb-8 h-px w-screen hidden dark:block"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
          }}
        />

        <div className="px-6">
          <section id="blog">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="title font-medium text-2xl tracking-tighter mb-2">
                {post.metadata.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                <span>{DATA.name}</span>
                <span>•</span>
                <span>
                  {post.metadata.publishedAt ? new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : ''}
                </span>
              </div>
            </BlurFade>

            {/* Dashed separator line after title/author/date */}
            <div
              className="mb-8 h-px w-screen dark:hidden"
              style={{
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23e5e7eb' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
              }}
            />
            <div
              className="mb-8 h-px w-screen hidden dark:block"
              style={{
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='12' y2='0' stroke='%23374151' stroke-width='2' stroke-dasharray='6,4'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
              }}
            />

            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <article
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.source }}
              ></article>
            </BlurFade>
          </section>
        </div>
      </main>
    </div>
  );
}
