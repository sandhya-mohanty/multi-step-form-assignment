import React, { useState } from "react";

import ProgrssBar from "./components/ProgrssBar";
import Step1 from "./modules/Step1";
import Step2 from "./modules/Step2";
import Step3 from "./modules/Step3";
import Step4 from "./modules/Step4";
import Step5 from "./modules/Step5";
import Step6 from "./modules/Step6";
import Step7 from "./modules/Step7";

const App = () => {
  let [page, setPage] = useState(1);
  return (
    <div>
      {page >= 1 && page <= 5 && <ProgrssBar page={page} setPage={setPage} />}
      {page === 1 && <Step1 setPage={setPage} />}
      {page === 2 && <Step2 setPage={setPage} />}
      {page === 3 && <Step3 setPage={setPage} />}
      {page === 4 && <Step4 setPage={setPage} />}
      {page === 5 && <Step5 setPage={setPage} />}
      {page === 6 && <Step6 />}
    </div>
  );
};

export default App;
