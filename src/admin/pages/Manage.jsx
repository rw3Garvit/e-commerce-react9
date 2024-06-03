import React, { useEffect, useRef, useState } from "react";
import { get_product, post_product } from "../../constant";
import { get_api, post_api } from "../../api/api";
import Swal from "sweetalert2";

const Manage = () => {
  const [product, setproduct] = useState([]);

  let name = useRef();
  let price = useRef();
  let desc = useRef();

  let GET_products = async () => {
    try {
      let res = await get_api(get_product);
      console.log(res);

      setproduct(res.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  let checkDuplicate = (name) => {
    let result = product.filter((val) => val.name == name);
    return result;
  };

  let addProduct = async () => {
    let data = {
      name: name.current.value,
      price: price.current.value,
      desc: desc.current.value,
      isActive: true,
    };

    let result = checkDuplicate(data.name);

    if (result.length != 0) {
      console.log("duplicate found");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "duplicate found",
      });
    } else {
      let res = await post_api(post_product, data);
      console.log(res);

      if (res.status == 201) {
        console.log("product added success");
        Swal.fire({
          title: "Good job!",
          text: "product added success",
          icon: "success",
        });
        setproduct([...product, res.data]);
      }
    }
  };

  useEffect(() => {
    GET_products();
  }, []);

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

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <input type="text" ref={name} />
              <input type="number" ref={price} />
              <input type="text" ref={desc} />
              <button onClick={addProduct}>add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
