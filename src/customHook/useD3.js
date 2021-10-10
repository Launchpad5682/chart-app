import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useApp } from "../Context/AppContext";

const useD3 = (renderChartFn) => {
  const ref = useRef();
  const dataCount = useApp();
  useEffect(() => {
    renderChartFn(d3.select(ref.current));
  }, [dataCount, renderChartFn]);

  return ref;
};

export default useD3;
