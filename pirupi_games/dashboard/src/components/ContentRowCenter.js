import React from "react";
import ConsolesInDb from "./ConsolesInDb";
import LastProductInDb from "./LastProductInDb";
import { Route } from "react-router-dom";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Product in DB -->*/}
      <Route path={["/LastProductInDb", "/", "/ContentWrapper"]} exact={true} component={LastProductInDb} />
      {/*<!-- End content row last Product in Data Base -->*/}

      {/*<!-- Console in DB -->*/}
      <Route path={["/ConsolesInDb", "/", "/ContentWrapper"]} exact={true} component={ConsolesInDb} />
    </div>
  );
}

export default ContentRowCenter;
