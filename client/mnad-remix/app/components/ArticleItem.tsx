import { formatDate } from "~/util/helperfunctions";
import ArticleRating from "./ArticleRating";
import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import DynamicCoconut from "./DynamicCoconut";

const ArticleItem: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const newsSource: string = "Bing News";

  const sampleLorm: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Tortor at risus viverra adipiscing. Aliquam faucibus purus in massa tempor nec feugiat nisl. Odio tempor orci dapibus ultrices in iaculis nunc. Ullamcorper velit sed ullamcorper morbi. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nulla facilisi etiam dignissim diam quis enim lobortis. Est placerat in egestas erat imperdiet sed euismod. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Et odio pellentesque diam volutpat. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Senectus et netus et malesuada fames. Amet aliquam id diam maecenas. Consectetur adipiscing elit pellentesque habitant. At tempor commodo ullamcorper a lacus. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Lacus sed viverra tellus in.";

  return (
    <>
      <div className="h-[130px] md:h-[200px] w-full rounded-xl">
        <div className="h-full py-[15px] flex">
          <div className="h-full">
            <div className="h-[100px] w-[100px] md:h-[170px] md:w-[170px] mr-[5px] md:mr-[25px] rounded-md md:rounded-3xl">
              <DynamicCoconut sentimentValue={5} />
            </div>
          </div>
          <div className="h-full w-full">
            <div className="flex flex-col justify-between h-full w-full overflow-hidden">
              <div>
                <div className="font-semibold">
                  <div className="text-[1.2rem] h-[1.6rem] md:text-[2.1rem] md:h-[2.8rem] my-auto">
                    Test
                  </div>
                  <div className="text-label text-[.9rem] h-[.8rem] flex items-center text-center">
                    {newsSource} • {formatDate(date)}
                  </div>
                </div>
                <div className="grow hidden md:block">
                  <LinesEllipsis
                    text={sampleLorm}
                    maxLine="2" // Adjust the number of lines as needed
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </div>
                <div className="grow md:hidden">
                  <LinesEllipsis
                    text={sampleLorm}
                    maxLine="1" // Adjust the number of lines as needed
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </div>
              </div>
              <div className="w-full md:text-end">
                <ArticleRating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
