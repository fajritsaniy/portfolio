import { BlogPosts } from "app/components/posts";
import { PortfolioPosts } from "app/components/portfolio";
import ProfilePicture from "app/components/profile-pic";

export default function Page() {
  return (
    <section>
      <ProfilePicture src="/profilePic.png" alt="Profile Picture" size={150} />
      <h1 className="mb-8 text-2xl tracking-tighter">
        <span className="font-normal">Fajri Tsani's</span>{" "}
        <span className="font-semibold">Portfolio</span>
      </h1>

      <p className="mb-4">
        {`I am a QA Engineer with `}
        <strong>3+ years of experience in manual and automation testing</strong>
        {`, holding a Master's degree in `}
        <strong>Information Technology</strong>
        {`. Passionate about `}
        <strong>coding, data, and AI</strong>
        {`. I specialize in delivering high-quality software solutions through effective test strategies that identify and mitigate risks early in the development process. I thrive in collaborative environments, fostering strong relationships with cross-functional teams, and am committed to continuous learning and innovation in quality assurance.`}
      </p>

      <h1 className="mb-1 text-xl font-semibold tracking-tighter">Portfolio</h1>
      <div className="my-3">
        <PortfolioPosts />
      </div>
      <h1 className="mb-1 text-xl font-semibold tracking-tighter">Blog</h1>
      <div className="my-3">
        <BlogPosts />
      </div>
    </section>
  );
}
