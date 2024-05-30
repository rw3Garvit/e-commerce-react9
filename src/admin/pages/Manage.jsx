import React, { useEffect, useState } from "react";
import { get_product } from "../../constant";
import { get_api } from "../../api/api";

const Manage = () => {
  const [product, setproduct] = useState([]);

  let GET_products = async () => {
    try {
      let res = await get_api(get_product);
      console.log(res);

      setproduct(res.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    GET_products();
  });

  return (
    <div className="container-fluid">
      <div className="row col-md-12">
        <div className="col-md-8">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((val, index) => {
                return (
                  <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.desc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Manage;
