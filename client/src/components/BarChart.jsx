import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous chart

    // Sorting data
    const sortedData = [...data].sort(
      (a, b) => Math.abs(b.percentChange) - Math.abs(a.percentChange)
    );

    const height = 500;
    const width = 500;
    const margin = { top: 20, right: 30, bottom: 30, left: 120 };

    // Define the gradient colors
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#818cf8");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#f472b6");

    const x = d3
      .scaleLinear()
      .domain([
        d3.min(sortedData, (d) => d.percentChange),
        d3.max(sortedData, (d) => d.percentChange),
      ])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleBand()
      .domain(sortedData.map((d) => d.industryName))
      .range([margin.top, height - margin.bottom])
      .padding(0.8);

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0, ${height / 2})`)
        .call(d3.axisBottom(x).ticks(width / 80))
        .call((g) => g.select(".domain").remove());

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0));

    svg.attr("viewBox", [0, 0, width, height]);

    // Draw Bars
    svg
      .append("g")
      .selectAll("rect")
      .data(sortedData)
      .join("rect")
      .attr("x", (d) => x(Math.min(0, d.percentChange)))
      .attr("y", (d) => y(d.industryName))
      .attr("width", (d) => Math.abs(x(d.percentChange) - x(0)))
      .attr("height", y.bandwidth())
      .attr("rx", 15) // Rounded corners
      .attr("ry", 15) // Rounded corners
      .attr("fill", "url(#gradient)"); // Apply the gradient color here

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default BarChart;
