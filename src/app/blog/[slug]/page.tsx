import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import stringify from 'rehype-stringify'
import breaks from 'remark-breaks';
import rehypePrettyCode from 'rehype-pretty-code'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/content/blogs')
  const files = fs.readdirSync(blogDir)

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }))
}

export default async function BlogPage({ params }: Props) {
  const filePath = path.join(process.cwd(), 'src/content/blogs', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  const processedContent = await unified()
    .use(parse)
    .use(breaks)
    .use(remark2rehype, { allowDangerousHtml: true }) 
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: 'github-dark', 
    }) 
    .use(stringify)
    .process(content)

  const contentHtml = processedContent.toString()

  return (
    <article className="text-gray-100 relative bg-gray-900 py-12 lg:px-0 md:px-12 sm:px-10 px-7 pt-28 md:pt-56 sm:pt-48 lg:pt-56 overflow-auto">
      <div className="overflow-hidden mx-auto max-w-5xl prose prose-invert prose-lg">
        <h1 className="mb-8 text-3xl md:text-4xl lg:text-3xl text-emerald-400 font-bold">{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  )
}
