import React, { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const sample = {
      _type: "News",
      webSearchUrl:
        "https://www.bing.com/news/search?q=top+stories&form=TNSA02",
      value: [
        {
          _type: "NewsArticle",
          name: "Georgia election case updates: Black Voices for Trump member held without bond",
          url: "https://www.msn.com/en-us/news/politics/georgia-election-case-updates-black-voices-for-trump-member-held-without-bond/ar-AA1fFhbg",
          image: {
            _type: "ImageObject",
            thumbnail: {
              _type: "ImageObject",
              contentUrl:
                "https://www.bing.com/th?id=ORMS.57bc84734ec6204de3f1b560513b332b&pid=Wdp",
              width: 1600,
              height: 900,
            },
            isLicensed: true,
          },
          description:
            "Former President Donald Trump and the 18 other defendants charged by Fulton County District Attorney Fani Willis for their alleged efforts to overturn the results of the 2020 presidential election in",
          provider: [
            {
              _type: "Organization",
              name: "ABC News",
              image: {
                _type: "ImageObject",
                thumbnail: {
                  _type: "ImageObject",
                  contentUrl:
                    "https://www.bing.com/th?id=ODF.-LMnifaGw_NvPvJr_0E9tA&pid=news",
                },
              },
            },
          ],
          datePublished: "2023-08-25T21:44:44.0000000Z",
        },
      ],
    };
    setArticles(sample.value);
    console.log(articles);
  }, []);

  if (!articles) {
    return <></>;
  }

  return (
    <>
      <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-700 shadow-xl p-4">
        <div className="flex">
          <div className="h-[25px] w-[25px] md:h-[40px] md:w-[40px] flex justify-center align-middle">
            <img
              src="https://cdn.worldvectorlogo.com/logos/bing-2.svg"
              className="h-[20px] md:h-[30px] m-auto"
            />
          </div>
          <div className="text-lg md:text-3xl font-semibold text-black dark:text-white">
            Bing News
          </div>
        </div>
        <div>
          {articles.map((article) => (
            <a href={article.url} target="_blank">
              <div className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-3xl hover:cursor-pointer">
                <div className="flex my-3">
                  <img
                    src={article?.image?.thumbnail?.contentUrl}
                    className="h-[100px] w-[100px] rounded-2xl m-auto mr-[10px]"
                  />
                  <div>
                    <div className="font-semibold text-sm md:text-xl text-black dark:text-white">
                      {article.name}
                    </div>
                    <div className="font-semibold text-xs md:text-sm text-black dark:text-white">
                      {article.description}...
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
