import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const AppProvider = (props) => {
  const states = [
    { code: "AP", state: "Andhra Pradesh" },
    { code: "AR", state: "Arunāchal Pradesh" },
    { code: "AS", state: "Assam" },
    { code: "BR", state: "Bihār" },
    { code: "CT", state: "Chhattīsgarh" },
    { code: "GA", state: "Goa" },
    { code: "GJ", state: "Gujarāt" },
    { code: "HR", state: "Haryāna" },
    { code: "HP", state: "Himāchal Pradesh" },
    { code: "JH", state: "Jhārkhand" },
    { code: "KA", state: "Karnātaka" },
    { code: "KL", state: "Kerala" },
    { code: "MP", state: "Madhya Pradesh" },
    { code: "MH", state: "Mahārāshtra" },
    { code: "MN", state: "Manipur" },
    { code: "ML", state: "Meghālaya" },
    { code: "MZ", state: "Mizoram" },
    { code: "NL", state: "Nāgāland" },
    { code: "OR", state: "Odisha" },
    { code: "PB", state: "Punjab" },
    { code: "RJ", state: "Rājasthān" },
    { code: "SK", state: "Sikkim" },
    { code: "TN", state: "Tamil Nādu" },
    { code: "TG", state: "Telangāna" },
    { code: "TR", state: "Tripura" },
    { code: "UT", state: "Uttarākhand" },
    { code: "UP", state: "Uttar Pradesh" },
    { code: "WB", state: "West Bengal" },
    { code: "AN", state: "Andaman and Nicobar Islands" },
    { code: "CH", state: "Chandigarh" },
    { code: "DH", state: "Dādra and Nagar Haveli and Damān and Diu" },
    { code: "DL", state: "Delhi" },
    { code: "JK", state: "Jammu and Kashmīr" },
    { code: "LA", state: "Ladākh" },
    { code: "LD", state: "Lakshadweep" },
    { code: "PY", state: "Puducherry" },
  ];
  const initailData = [
    { regNo: 100, name: "Inderjit Subhash", state: "Delhi", code: "DL" },
    { regNo: 101, name: "Hardeep Samir", state: "Punjab", code: "PB" },
    { regNo: 102, name: "Niketa Kalyan", state: "Tamil Nādu", code: "TN" },
    { regNo: 103, name: "Gauri Kamala", state: "Gujarāt", code: "GJ" },
    { regNo: 104, name: "Sushila Sulabha", state: "Delhi", code: "DL" },
    { regNo: 105, name: "Tamanna Srinivas ", state: "Tamil Nādu", code: "TN" },
    { regNo: 106, name: "Shiva Narendra", state: "Delhi", code: "DL" },
    { regNo: 107, name: "Aswathi Radhika", state: "Tamil Nādu", code: "TN" },
    { regNo: 108, name: "Darshan Basant", state: "Punjab", code: "PB" },
    { regNo: 109, name: "Amar Arti", state: "Rājasthān", code: "RJ" },
    { regNo: 110, name: "Manpreet Lakshman", state: "Haryāna", code: "HR" },
  ];

  const [data, setData] = useState(initailData);

  const [dataCount, setDataCount] = useState([]);

  useEffect(() => {
    const dataCountTemp = new Map();
    const len = data.length;
    for (let i = 0; i < len; i++) {
      let code = data[i].code;
      if (dataCountTemp.get(code) === undefined) {
        dataCountTemp.set(code, 1);
      } else {
        dataCountTemp.set(code, dataCountTemp.get(code) + 1 );
      }
    }

    let array = Array.from(dataCountTemp, ([state, count]) => ({
      state,
      count,
    }));
    setDataCount(array);
  }, [data]);

  const value = {
    data,
    setData,
    states,
    dataCount,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
