import React, { useEffect, useState } from "react";
import axios from "axios";
import DesktopTable from "../table/index";
import MobileCards from "../MobileCards";
import { useSearch } from "../../SearchContext";

export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

const ResponsiveTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { searchTerm } = useSearch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredEmployees = employees.filter((emp) =>
    [emp.name, emp.job, emp.admission_date, emp.phone].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return windowWidth >= 768 ? (
    <DesktopTable employees={filteredEmployees} />
  ) : (
    <MobileCards employees={filteredEmployees} />
  );
};

export default ResponsiveTable;
