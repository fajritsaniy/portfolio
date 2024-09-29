import { PortfolioPosts } from "app/components/portfolio";

export const metadata = {
  title: "Portfolio",
  description: "Read my portfolios.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Portfolio
      </h1>
      <PortfolioPosts />
    </section>
  );
}
