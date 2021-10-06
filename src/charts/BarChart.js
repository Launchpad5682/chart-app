import React from "react";
import * as d3 from "d3";
import useD3 from "../customHook/useD3";

const BarChart = ({ data }) => {
  const ref = useD3(
    (svg) => {
      const height = 200;
      const width = 200;
      const barPadding = 5;

      const barWidth = width / data.length;
      svg.attr("width", width).attr("height", height);

      const counts = data.map((d) => d.count);

      // creating xScale for ordinal data points
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.state))
        .rangeRound([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(counts)])
        .range([0, height]);

      console.log(counts);
      console.log(yScale);
      // barChart
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("fill", "steelblue")
        .attr("y", (d) => height - yScale(d.count))
        .attr("height", (d) => yScale(d.count))
        .attr("width", barWidth - barPadding)
        .attr("transform", (d, i) => {
          const translate = [barWidth * i, 0];
          return "translate(" + translate + ")";
        });

      const x_axis = d3.axisBottom().scale(xScale);
      const y_axis = d3.axisLeft().scale(yScale);

      svg.append("g").attr("transform", "translate(0,0)").call(y_axis);

      const xAxisTranslate = height;

      svg
        .append("g")
        .attr("transform", "translate(2," + xAxisTranslate + ")")
        .call(x_axis);

      //const margin = { top: 20, right: 30, headerbottom: 30, left: 40 };
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: 500,
        border: "2px black solid",
        paddingLeft: "40px",
        // paddingBottom: "20px",
      }}
    ></svg>
  );
};

export default BarChart;

/*
style={{
        height: 400,
        width: 400,
        marginRight: "0px",
        marginLeft: "0px",
      }}
const x = d3
        .scaleBand()
        //.domain(data.map((d) => d.year))
        // .domain(Object.keys(data).map((d) => d))
        .domain(data.map((d) => d.state))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        //.domain([0, d3.max(data, (d) => d.sales)])
        // .domain([0, d3.max(Object.values(data), (d) => d)])
        .domain([0, d3.max(data, (d) => d.count)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "red")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);
      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.state))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.count))
        .attr("height", (d) => y1(0) - y1(d)); 
        
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
      */
