import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ProductsInDb from "./ProductsInDb";
import DataInDb from "./DataInDb";
import Chart from "./Chart";
import { Route } from "react-router-dom";

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Pirupi Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <DataInDb />
        <ContentRowCenter />
        <Route path={["/ProductsInDb", "/ContentWrapper"]} exact={true} component={ProductsInDb} />
        <Route path={["/DataInDb", "/", "/ContentWrapper"]} exact={true} component={Chart} />
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
