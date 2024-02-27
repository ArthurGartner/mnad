import BarDayAnalyticsCategory from "./BarDayAnalyticsCategory";

const BarDayAnalyticsList: React.FC = () => {
  const categories = [
    { name: "Entertainment", percent: 6 },
    { name: "Politics", percent: 5 },
    { name: "Technology", percent: 3 },
    { name: "Business", percent: -2 },
    { name: "Science", percent: -4 },
  ];

  return (
    <>
      <div>
        {categories.map((cat, index) => (
          <BarDayAnalyticsCategory
            key={index}
            category={cat.name}
            percent={cat.percent}
          />
        ))}
      </div>
    </>
  );
};

export default BarDayAnalyticsList;
