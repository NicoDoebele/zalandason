import Article from "../../components/Article"

export default async function Articles() {

    const articles = await fetch("http://localhost:3000/api/articles").then(res => res.json())

    return (
        <>
            <div className="w-screen flex flex-col gap-2 items-center mt-6">
                {articles.map((article: any) => (<Article key={article.articleID} name={article.name} price={article.price} />))}
            </div>
        </>
    )
}
