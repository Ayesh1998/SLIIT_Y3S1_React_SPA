import React, {useContext, useEffect} from "react";
import {CardDeck} from "react-bootstrap";
import HomeItem from "../home-item/home-item-component";
import "./home-category-styles.scss";
import {Link} from "react-router-dom";
import {AppContext} from "../../Context/app-context";
import "aos/dist/aos.css";
import Aos from "aos";

const HomeCategory = ({category, products}) => {
  useEffect(() => {
    // void reset();
    Aos.init({duration: 1000});
  }, []);

  const appContext = useContext(AppContext);
  appContext.editStoreManagerFalse();
  appContext.editCategoryFalse();
  appContext.editExistingCategoryFalse();
  appContext.editExistingStoreManagerFalse();

  var filtered = products.filter((item) => item.category == category);

  return (
    <div
      className="home-category-wrapper container cardDeckHome"
      style={{maxWidth: "1201px", marginBottom: "40px"}}
    >
      <div className="row">
        <div
          data-aos="flip-left"
          data-aos-duration="600"
          data-aos-delay="1000"
          className="col-1 categoryNameHome1"
          style={{
            margin: "auto",
            border: "4px solid rgb(0, 123, 255)",
            borderBottomRightRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          <div className="categoryNameHome" style={{height: "100%"}}>
            <p
              style={{
                fontSize: "30px",
                height: "100%",
                fontWeight: "800",
                float: "left",
                marginRight: "2vw",
              }}
            >
              <span
                data-aos="fade-up"
                data-aos-duration="100"
                data-aos-delay="1500"
                class="rotate-characters-back-to-horizontal"
                style={{writingMode: "vertical-rl"}}
              >
                <Link
                  to={`/product-category/${category}`}
                  style={{color: "black"}}
                  id="productCategoryInHome"
                >
                  {category}
                </Link>
              </span>
            </p>
          </div>
          {/* <h3
            style={{
              padding: "10px",
              marginLeft: "10px ",
              marginTop: "3%",
              fontFamily: "Josefin Sans",
            }}
          >
            <Link
              to={`/product-category/${category}`}
              style={{ color: "black" }}
            >
              {category}
            </Link>
          </h3> */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="200"
          className="col-11 "
        >
          <CardDeck style={{}}>
            {filtered.slice(0, 4).map((item) => {
              return <HomeItem item={item}/>;
            })}
          </CardDeck>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
