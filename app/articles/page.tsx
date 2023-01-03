import Article from "../../components/Article"
import { getHostAddress } from "../../utils/getHostAddress"

export default async function Articles() {

    const articles = await fetch(getHostAddress() + "/api/articles").then(res => res.json())

    return (
        <>
            <div className="w-screen flex justify-center">
                <div className="w-3/5 flex gap-2 mt-6 justify-center flex-wrap">
                    {articles.map((article: any) => (<Article key={article.articleID} name={article.name} price={article.price} />))}
                </div>
            </div>
        </>
    )
}
