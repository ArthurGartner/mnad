import React, { useState, useEffect } from "react";
import "./BarChart.css";
import { IndustryBar, DiffPercentBar } from "../components";

const BarChart = (props) => {
  const [maxDiff, setMaxDiff] = useState(0);
  const [dayData, setDayData] = useState(null);
  const [yesterdayData, setYesterdayData] = useState(null);
  const [industryDiff, setIndustryDiff] = useState(null);

  useEffect(() => {
    if (props?.dayData) setDayData(props.dayData);
    if (props?.yesterdayData) setYesterdayData(props.yesterdayData);
  }, [props]);

  useEffect(() => {
    // Calculate average sentiment for each array
    if (!dayData || !yesterdayData) return;
    const averages1 = calculateAverageSentiment(dayData.articles);
    const averages2 = calculateAverageSentiment(yesterdayData.articles);

    // Calculate the differences
    const differences = [];
    for (const [category, avg1] of Object.entries(averages1)) {
      const avg2 = averages2[category] || 0; // Assume 0 if category is not present in the second array
      const diff = avg1 - avg2;
      differences.push({
        name: category,
        diff: parseFloat(diff.toFixed(2)),
      });

      if (Math.abs(diff) > maxDiff) setMaxDiff(Math.abs(diff));
    }

    // Sort the differences
    differences.sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
    setIndustryDiff(differences);
  }, [dayData, yesterdayData]);

  // Function to calculate average sentiment for each category
  function calculateAverageSentiment(array) {
    const categorySums = {};
    const categoryCounts = {};
    for (const article of array) {
      const { category, sentiment_score } = article;
      if (!categorySums[category]) {
        categorySums[category] = 0;
        categoryCounts[category] = 0;
      }
      categorySums[category] += sentiment_score;
      categoryCounts[category]++;
    }
    const categoryAverages = {};
    for (const [category, sum] of Object.entries(categorySums)) {
      categoryAverages[category] = sum / categoryCounts[category];
    }
    return categoryAverages;
  }

  if (!industryDiff) return <></>;

  return (
    <>
      <div className="h-full w-full">
        <div className="flex">
          <div className="industry-labels text-left text-lg">
            {industryDiff.map((industryObject, index) => (
              <div className="h-[50px] flex justify-center items-center">
                <div className="text-sm md:text-xl font-semibold text-black dark:text-white">
                  {industryObject.name}
                </div>
              </div>
            ))}
          </div>
          <div className="percent-diff-bar grow">
            <div className="relative">
              {industryDiff.map((industryObject, index) => (
                <IndustryBar
                  value={Math.round((industryObject.diff / maxDiff) * 100)}
                  name={industryObject.name}
                />
              ))}
              <div className="vertical-line text-neutral-500 bg-neutral-500"></div>
            </div>
            <hr className="h-[3px] bg-neutral-500 text-neutral-500"></hr>
            <div className="w-full flex justify-between font-semibold text-2xl text-black dark:text-white">
              <div className="text-red-500 dark:text-red-400">-{maxDiff}</div>
              <div className="text-green-500 dark:text-green-400">
                +{maxDiff}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
