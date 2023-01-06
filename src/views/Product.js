import React from "react";
import { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";
import BlogCard from "../Components/DashboardComponents/BlogCards";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const Product = () => {
  const [data, setdata] = useState([]);
  console.log(
    data.map((item) => item.rating.rate),
    "rating"
  );
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`https://fakestoreapi.com/products/`);
      console.log(res.data);
      setdata(res.data);
      setloading(false);
    }
    getdata();
  }, []);

  const [label, setlabel] = useState("Enable dark ");
  const [stylee, setStylee] = useState({
    backgroundColor: "white",
    color: "red",
  });

  const handledark = () => {
    if (stylee.backgroundColor == "white") {
      setStylee({ backgroundColor: "black", color: "white" });
      setlabel("Set to Default");
    } else {
      setStylee({ color: "red", backgroundColor: "white" });
      setlabel("Enable switch for Dark");
    }
  };

  return (
    <div style={stylee}>
      <div>
        <label style={{ color: stylee.color }}>{label}:</label>
        <Switch color="primary" onClick={handledark} />
      </div>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item lg={3} md={12} xs={12}>
            {loading ? (
              <CircularProgress
                color="secondary"
                style={{ alignSelf: "center" }}
              />
            ) : (
              <BlogCard
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                rate={item.rating.rate}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
