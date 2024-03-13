// type Props = {};

import { useState } from "react";
// import { https } from "../services/config";
import { NavLink } from "react-router-dom";
import { Category } from "../types/category";

const Menu = () => {
  const [categoriesList] = useState<Category[]>([
    {
      _id: "string",
      categoryName: "string",
      categorySlug: "string",
      createAt: "string",
      updateAt: "string",
    },
  ]);
  //   const fetchData = async () => {
  //     const { data } = await https.get("/categories");
  //     setCategoriesList(data.data);
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <ul className="flex items-center lg:justify-start justify-center lg:flex-nowrap flex-wrap">
      <li>
        <NavLink
          className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100"
          to="/"
        >
          Trang chủ
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/"
          className="flex items-center py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100"
        >
          Danh mục
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="ml-1 mt-1 h-4 w-4 text-slate-400"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
        <div className="group-hover:visible group-hover:opacity-100 invisible duration-300 absolute transform z-10 w-56 top-full left-0 opacity-0 translate-y-0">
          <ul className="rounded-lg shadow-lg border border-neutral-100 text-sm relative bg-white py-4 grid gap-1">
            {categoriesList.map((category, index) => {
              return (
                <li key={index} className="px-2">
                  <NavLink
                    className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100"
                    to={`/products?category=${category.categorySlug}`}
                  >
                    {category.categoryName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
      <li>
        <NavLink
          className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100"
          to="/products"
        >
          Sản phẩm
        </NavLink>
      </li>
      <li>
        <NavLink
          className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100"
          to="/"
        >
          Khuyến mại
        </NavLink>
      </li>
      <li>
        <NavLink
          className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100"
          to="/"
        >
          Giới thiệu
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
