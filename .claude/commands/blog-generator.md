# Generate Blog Posts

Generate SEO-optimized, bilingual blog posts for Immigration Solution Services.

## Arguments
- `count` (optional): Number of posts to generate (default: 5)
- `category` (optional): Topic category (family, marriage, citizenship, asylum, work, status, travel, documents, community, news, or "all")

## Examples
- `/blog-generator` - Generate 5 blog posts across various topics
- `/blog-generator 10` - Generate 10 blog posts
- `/blog-generator 3 family` - Generate 3 family immigration posts

## Instructions

Read the full skill documentation at `.claude/skills/blog-generator.md` for:
- Technical requirements (React components, bilingual support)
- Target demographics (El Cajon, Anaheim, Inland Empire, Irvine)
- Topic categories and SEO requirements
- Component patterns and styling

When executing:
1. Create blog infrastructure if not exists (BlogPage.jsx, blogPosts.js)
2. Generate requested number of blog post components
3. Update App.jsx with routes
4. Add Blog link to Navbar

Use the market research context: Arab-American communities in Southern California, focusing on refugee populations (El Cajon), commercial hubs (Little Arabia Anaheim), growth corridors (Inland Empire), and professional enclaves (Irvine).
