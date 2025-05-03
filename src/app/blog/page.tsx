import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface BlogMeta {
  title: string
  slug: string
  date: string
  summary: string
}

export default function BlogListPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blogs')
  const files = fs.readdirSync(blogDir)

  const blogs: BlogMeta[] = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(blogDir, file), 'utf8')
    const { data } = matter(fileContent)
    return data as BlogMeta
  })

  return (
    <div className="h-screen relative bg-gray-900 py-12 lg:pt-40 pt-24 md:pt-44 sm:pt-42 overflow-hidden">
      <div className="lg:ml-8 md:ml-8 sm:ml-8 lg:p-8 p-6 space-y-2 max-w-xl">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-emerald-400 font-bold">My Blogs</h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-100">
          My learnings and Philosophy.
        </p>
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className="border mt-8 space-y-3 px-4 py-4 rounded">
              <h2 className="text-gray-100 text-2xl font-semibold">{blog.title}</h2>
              <span className="block text-base text-gray-100">{blog.date} . 5 min read</span>
              <p className="text-gray-300">{blog.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
