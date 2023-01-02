import Article from "../../components/Article"
import { getHostAddress } from "../../utils/getHostAddress"

export default async function Articles() {

    const articles = await fetch(getHostAddress() + "/api/articles").then(res => res.json())

    return (
        <>
            <div className="w-screen flex flex-col gap-2 items-center mt-6">
                {articles.map((article: any) => (<Article key={article.articleID} name={article.name} price={article.price} />))}
            </div>
        </>
    )
}
