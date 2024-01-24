import BarDayAnalyticsCategory from "./BarDayAnalyticsCategory";

const BarDayAnalyticsList: React.FC = () => {
  const categories = [
    { name: "Entertainment", percent: 100 },
    { name: "Politics", percent: -1 },
    { name: "Technology", percent: -1 },
    { name: "Business", percent: -1 },
    { name: "Science", percent: -1 },
  ];

  return (
    <>
      <div>
        {categories.map((cat) => (
          <div>
            <BarDayAnalyticsCategory
              category={cat.name}
              percent={cat.percent}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BarDayAnalyticsList;
