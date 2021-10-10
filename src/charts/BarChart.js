import React from "react";
import * as d3 from "d3";
import useD3 from "../customHook/useD3";
import { useApp } from "../Context/AppContext";

const BarChart = () => {
  const { dataCount } = useApp();

  const ref = useD3((svg) => {
    const height = 200;
    const width = 200;
    const barPadding = 5;

    const barWidth = width / dataCount.length;
    svg.attr("width", width).attr("height", height);

    const counts = dataCount.map((d) => d.count);

    const xScale = d3
      .scaleBand()
      .domain(dataCount.map((d) => d.state))
      .rangeRound([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(counts)])
      .range([0, height]);

    svg
      .selectAll("rect")
      .data(dataCount)
      .enter()
      .append("rect")
      .attr("fill", "steelblue")
      .attr("y", (d) => height - yScale(d.count))
      .attr("height", (d) => yScale(d.count))
      .attr("width", barWidth - barPadding)
      .attr("transform", (d, i) => {
        const translate = [barWidth * (i + 1), 0];
        return "translate(" + translate + ")";
      });

    const x_axis = d3.axisBottom().scale(xScale);
    const y_axis = d3.axisLeft().scale(yScale);

    svg.append("g").attr("transform", "translate(22,0)").call(y_axis);

    const xAxisTranslate = height;

    svg
      .append("g")
      .attr("transform", "translate(20," + xAxisTranslate + ")")
      .call(x_axis);
  });

  return (
    <svg
      ref={ref}
      style={{
        paddingTop: "20px",
        height: 250,
        minWidth: 250,
        border: "2px black solid",
        paddingLeft: "20px",
      }}
    ></svg>
  );
};

export default BarChart;
