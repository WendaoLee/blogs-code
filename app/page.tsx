import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const getReadableDate = (date: string) => {
    return new Date(date).getFullYear() + "-" + (new Date(date).getMonth() + 1) + "-" + new Date(date).getDate();
  }
  const processedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).map((post) => {
    return {
      ...post,
      date: getReadableDate(post.date)
    }
  }).slice(0, 4);
  return (
    <div className="prose dark:prose-invert">
      <div className="mt-[5%] text-base flex flex-col leading-normal">
        <section className="mb-[20px] w-full">
          李问道。随便写写东西的人：代码、杂文、小说等等。
          <br />
          在本站，技术与学术相关文档放在Blog中，杂文放在Essay中，小说放在Novel中。
        </section>
        <section
          className="mb-[20px]"
          style={{ width: "80%", display: "flex" }}
        >
          Wendao Lee, also known as Erika Lee, is a writer and a programmer.
          Most of the articles here are Chinese.
        </section>
        <section>
          <ul
          >
            <li>
              Github: <a href="https://github.com/WendaoLee">@Wendaolee</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:leewendao@outlook.com">leewendao@outlook.com</a>
            </li>
            <li>
              Douban:{" "}
              <a href="https://www.douban.com/people/leewendao">李问道</a>
            </li>
            <li>
              微信公众号: <a href="">水獭日知社</a>
            </li>
          </ul>
        </section>
        <div className=" border-black"></div>
      </div>

      <div className="recent">
        <div
          className="w-full"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ marginBottom: 0 }}>最近更新</h2>
          <h4 style={{ marginTop: 0 }}>Recently Updated</h4>
          <div>
            <ul>
              {processedPosts
                .map((post) => (
                  <li key={post._id}>
                    <Link href={post.slug}>
                      <span>{post.title}</span>
                    </Link>
                    <span>, {post.date}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
