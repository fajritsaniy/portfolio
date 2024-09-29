import Link from "next/link";
import { formatDate, getPortfolioPosts } from "app/portfolio/utils";

export function PortfolioPosts() {
  let allPortfolio = getPortfolioPosts();

  return (
    <div>
      {allPortfolio
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((portfolio, index) => (
          <Link
            key={portfolio.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/portfolio/${portfolio.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                Project {index + 1} :{/* Counter starts from 1 */}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {portfolio.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
