import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./blog.module.css";
import Link from "next/link";

const posts = [
  {
    slug: "introducing-unsandbox",
    title: "Introducing unsandbox: Remote Code Execution Made Simple",
    excerpt: "Today we're launching unsandbox, a new API for running untrusted code in isolated containers. Build AI coding assistants, code playgrounds, and remote dev environments without managing infrastructure.",
    date: "January 10, 2026",
    author: "The unsandbox Team",
    category: "Announcement",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "zero-trust-networking",
    title: "Why Zero-Trust Networking is the Default",
    excerpt: "Network isolation isn't optional when running untrusted code. Learn how our zero-trust approach keeps your infrastructure safe while still enabling powerful use cases.",
    date: "January 8, 2026",
    author: "Security Team",
    category: "Security",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "building-ai-coding-assistant",
    title: "Building an AI Coding Assistant with unsandbox",
    excerpt: "A step-by-step guide to safely executing LLM-generated code in your AI assistant. Includes examples for Python, JavaScript, and more.",
    date: "January 5, 2026",
    author: "Developer Relations",
    category: "Tutorial",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "container-snapshots-explained",
    title: "Container Snapshots: Save, Clone, and Restore State",
    excerpt: "Snapshots let you freeze a container's complete state and restore it later. Here's how they work and when to use them.",
    date: "January 3, 2026",
    author: "Engineering",
    category: "Deep Dive",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "42-languages-supported",
    title: "All 42 Supported Languages: What's Available and How to Use Them",
    excerpt: "From Python to Rust, JavaScript to Go—here's the complete list of languages you can run on unsandbox, with version details and examples.",
    date: "December 28, 2025",
    author: "Developer Relations",
    category: "Reference",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "services-mode-launch",
    title: "Launching Services Mode: Deploy Long-Running Applications",
    excerpt: "Deploy web apps and APIs with custom domains. Services mode is now available for Team and Enterprise customers.",
    date: "December 20, 2025",
    author: "Product Team",
    category: "Announcement",
    readTime: "4 min read",
    featured: false,
  },
];

const categories = ["All", "Announcement", "Tutorial", "Security", "Deep Dive", "Reference"];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Updates, tutorials, and deep dives from the unsandbox team.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.categories}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${cat === "All" ? styles.active : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {featuredPost && (
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredPost}>
                <div className={styles.featuredBadge}>Featured</div>
                <div className={styles.featuredContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{featuredPost.category}</span>
                    <span className={styles.dot}>·</span>
                    <span>{featuredPost.date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                  <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <div className={styles.author}>
                    <div className={styles.authorAvatar}>▸</div>
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
              </Link>
            )}

            <div className={styles.postGrid}>
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                  <div className={styles.postMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <span className={styles.postDate}>{post.date}</span>
                    <span className={styles.readMore}>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.newsletter}>
          <div className={styles.container}>
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterContent}>
                <h2>Stay updated</h2>
                <p>Get the latest posts delivered to your inbox. No spam, unsubscribe anytime.</p>
              </div>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
