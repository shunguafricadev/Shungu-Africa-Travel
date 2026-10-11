type SkeletonBlockProps = {
  className: string;
};

function SkeletonBlock({ className }: SkeletonBlockProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse motion-reduce:animate-none rounded-xs bg-neutral-200 ${className}`}
    />
  );
}

function LoadingRegion({ children }: { children: React.ReactNode }) {
  return (
    <div role="status" aria-label="Loading page" aria-busy="true">
      <span className="sr-only">Loading page</span>
      {children}
    </div>
  );
}

type CatalogPageSkeletonProps = {
  variant?: "cards" | "destinations" | "articles";
};

export function CatalogPageSkeleton({
  variant = "cards",
}: CatalogPageSkeletonProps) {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-2xl space-y-4">
            <SkeletonBlock className="h-3 w-32" />
            <SkeletonBlock className="h-10 w-3/4 max-w-lg" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <article key={index} className="overflow-hidden rounded-xs">
                {variant === "destinations" ? (
                  <div className="relative h-80 bg-neutral-200 animate-pulse motion-reduce:animate-none">
                    <div className="absolute inset-x-0 bottom-3 space-y-2 p-6">
                      <SkeletonBlock className="h-7 w-2/3 bg-neutral-300" />
                      <SkeletonBlock className="h-4 w-1/3 bg-neutral-300" />
                    </div>
                  </div>
                ) : (
                  <div className="bg-white shadow-lg">
                    {variant === "articles" ? (
                      <SkeletonBlock className="aspect-[3/2] w-full rounded-none" />
                    ) : (
                      <SkeletonBlock className="h-72 w-full rounded-none" />
                    )}
                    <div className="space-y-4 p-6">
                      <SkeletonBlock className="h-3 w-24" />
                      <SkeletonBlock className="h-7 w-4/5" />
                      <SkeletonBlock className="h-4 w-full" />
                      <SkeletonBlock className="h-4 w-5/6" />
                      {variant === "articles" ? (
                        <>
                          <SkeletonBlock className="h-4 w-full" />
                          <SkeletonBlock className="h-4 w-2/3" />
                          <SkeletonBlock className="h-7 w-full border-t border-neutral-200 pt-4" />
                        </>
                      ) : (
                        <>
                          <SkeletonBlock className="h-4 w-2/5" />
                          <div className="flex flex-wrap gap-2 pt-2">
                            <SkeletonBlock className="h-6 w-20" />
                            <SkeletonBlock className="h-6 w-24" />
                            <SkeletonBlock className="h-6 w-16" />
                          </div>
                          <div className="space-y-3 border-t border-neutral-200 pt-4">
                            <SkeletonBlock className="h-3 w-28" />
                            <SkeletonBlock className="h-7 w-24" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </LoadingRegion>
  );
}

export function DetailPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="h-[60vh] min-h-[500px] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <SkeletonBlock className="h-3 w-28" />
              <SkeletonBlock className="h-10 w-3/4 max-w-xl" />
              <SkeletonBlock className="h-4 w-40" />
            </div>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="space-y-4">
                <SkeletonBlock className="h-7 w-48" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>
            ))}
          </div>
          <SkeletonBlock className="h-[520px] w-full" />
        </div>
      </section>
    </LoadingRegion>
  );
}

export function DestinationPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="h-[60vh] min-h-[500px] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="space-y-4">
              <SkeletonBlock className="h-8 w-2/3 max-w-md" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
              {index === 4 && <SkeletonBlock className="h-72 w-full" />}
            </div>
          ))}
        </div>
      </section>
    </LoadingRegion>
  );
}

export function PackagePageSkeleton() {
  return (
    <LoadingRegion>
      <div className="h-[55vh] min-h-[420px] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="space-y-2 p-2">
                  <SkeletonBlock className="h-4 w-20" />
                  <SkeletonBlock className="h-4 w-28" />
                </div>
              ))}
            </div>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="space-y-4">
                <SkeletonBlock className="h-7 w-48" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>
            ))}
          </div>
          <SkeletonBlock className="h-[520px] w-full" />
        </div>
      </section>
    </LoadingRegion>
  );
}

export function ArticlePageSkeleton() {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4">
          <SkeletonBlock className="h-6 w-full" />
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="space-y-4">
              <SkeletonBlock className="h-8 w-2/3" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>
    </LoadingRegion>
  );
}

export function HomePageSkeleton() {
  return (
    <LoadingRegion>
      <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-neutral-200 px-6 animate-pulse motion-reduce:animate-none">
        <SkeletonBlock className="h-12 w-4/5 max-w-3xl bg-neutral-300 sm:h-16" />
        <SkeletonBlock className="h-12 w-36 bg-neutral-300" />
      </div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4">
          <SkeletonBlock className="h-9 w-2/3 max-w-xl" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonBlock key={index} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    </LoadingRegion>
  );
}

export function TransferPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="space-y-2 p-2">
                  <SkeletonBlock className="h-4 w-20" />
                  <SkeletonBlock className="h-4 w-28" />
                </div>
              ))}
            </div>
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="space-y-4">
                <SkeletonBlock className="h-7 w-48" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>
            ))}
          </div>
          <SkeletonBlock className="h-[420px] w-full" />
        </div>
      </section>
    </LoadingRegion>
  );
}

export function ContactPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <SkeletonBlock className="mx-auto h-4 w-32" />
            <SkeletonBlock className="mx-auto h-10 w-4/5" />
            <SkeletonBlock className="mx-auto h-4 w-full max-w-xl" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="space-y-2">
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="h-12 w-full" />
              </div>
            ))}
            <SkeletonBlock className="h-28 w-full" />
            <SkeletonBlock className="h-12 w-44" />
          </div>
        </div>
      </section>
    </LoadingRegion>
  );
}

export function FormPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[380px_1fr]">
          <div className="space-y-4 border border-neutral-200 bg-neutral-50 p-6">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-8 w-3/4" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
          </div>
          <div className="space-y-6 border border-neutral-200 bg-white p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {Array.from({ length: 5 }, (_, index) => (
                <div key={index} className="space-y-2">
                  <SkeletonBlock className="h-4 w-24" />
                  <SkeletonBlock className="h-12 w-full" />
                </div>
              ))}
            </div>
            <SkeletonBlock className="h-28 w-full" />
            <SkeletonBlock className="h-12 w-44" />
          </div>
        </div>
      </section>
    </LoadingRegion>
  );
}

export function ContentPageSkeleton() {
  return (
    <LoadingRegion>
      <div className="min-h-[75svh] bg-neutral-200 animate-pulse motion-reduce:animate-none" />
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4">
          <SkeletonBlock className="h-9 w-2/3 max-w-xl" />
          <SkeletonBlock className="h-4 w-full max-w-3xl" />
          <SkeletonBlock className="h-4 w-5/6 max-w-2xl" />
          <SkeletonBlock className="h-64 w-full" />
        </div>
      </section>
    </LoadingRegion>
  );
}
