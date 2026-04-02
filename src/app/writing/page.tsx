import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import Link from "next/link";

export const metadata = {
  title: "Writings",
  description: "My thoughts and ideas",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
          <section>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="font-medium text-2xl mb-8 tracking-tighter">Writings</h1>
            </BlurFade>
            <div className="space-y-2">
              {posts
                .sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((post, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                    <Link
                      className="block"
                      href={`/writing/${post.slug}`}
                    >
                      <div className="border-b border-gray-200 dark:border-gray-800 py-3 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors px-2">
                        <p className="font-semibold tracking-tight text-base sm:text-lg">{post.metadata.title}</p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted-foreground">
                          <span>{DATA.name}</span>
                          <span aria-hidden>•</span>
                          <span>
                            {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                          <span aria-hidden>•</span>
                          <span>5 min read</span>
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
