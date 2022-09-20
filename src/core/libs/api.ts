import fs from "fs";
import { join, basename } from "path";
import matter from "gray-matter";

export const portfolioDirectory = join(process.cwd(), "_portfolio");
const staticPagesDirectory = join(process.cwd(), "_static_pages");

export function getSlugsFromDirectory(dir: fs.PathLike): string[] {
  return fs.readdirSync(dir);
}

export function getBySlug(dir: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      switch (field) {
        case "image":
          items[field] = basename(data[field]);
          break;
        default:
          items[field] = data[field];
          break;
      }
    }
  });

  return items;
}

export function getPortfolioBySlug(slug: string, fields: string[] = []) {
  return getBySlug(portfolioDirectory, slug, fields);
}

export function getCompletePortfolio(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(portfolioDirectory);
  const portfolio = slugs
    .map((slug) => getPortfolioBySlug(slug, fields))
    // sort portfolio by date in descending order
    .sort((article1: any, article2: any) =>
      article1.date > article2.date ? -1 : 1
    );
  return portfolio;
}

export function getHomePage() {
  return getBySlug(staticPagesDirectory, "home", [
    "title",
    "tagline",
    "aboutImageDesktop",
    "aboutImageMobile",
    "heroBackgroundImage",
    "content",
  ]);
}
