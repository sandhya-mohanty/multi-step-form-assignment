import React from "react";

const ProgrssBar = ({ page, setPage }) => {
  let percentage = (page / 5) * 100;

  const previousIcon = page > 1 && (
    <i onClick={() => setPage(page - 1)} class="fa fa-chevron-left"></i>
  );

  return (
    <section className="flex justify-center flex-start">
      <div className="mt-8">{previousIcon}</div>
      <div class="w-1/2  max-w-90 bg-gray-200 rounded-full h-1  mt-10 ml-2 ">
        <div
          class="bg-teal-600 h-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
};
export default ProgrssBar;
