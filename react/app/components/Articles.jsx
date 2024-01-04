import Link from "next/link";

async function getArticles() {
  const res = await fetch("http://127.0.0.1:1337/api/articles?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}

function ArticleCard({ imageUrl, title, subtitle, url }) {
  return (
    <div className="rounded-lg bg-stone-900 p-6 shadow-md">
      <img
        src={`http://127.0.0.1:1337${imageUrl}`}
        alt={title}
        width={600}
        height={500}
        className="mb-4 rounded-lg"
      />
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-gray-200">{subtitle}</p>
      <Link
        href={url}
        className="mt-4 inline-flex items-center text-violet-600 hover:underline"
      >
        Learn More
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </Link>
    </div>
  );
}

export default async function Articles() {
  const articles = await getArticles();
  return (
    <div
      className="container mx-auto mt-8 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2"
      id="news"
    >
      {articles.map((article) => (
        <ArticleCard
          key={crypto.randomUUID()}
          imageUrl={article.attributes.image.data.attributes.url}
          title={article.attributes.title}
          subtitle={article.attributes.subtitle}
          url={article.attributes.url}
        />
      ))}
    </div>
  );
}
