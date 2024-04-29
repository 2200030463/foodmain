import React from "react";
import styles from "./HomePage.module.css";

import mountains from "./images/mountains.png";
import Filter from "./filter/Filter";
import ContactUs from "../contact-us/ContactUs";
import BorderBox from "../common-styles/BorderBox";
import { useDispatch } from "react-redux";
import { updateSingleProduct } from "../../Redux/payment/action-creator";
import { useNavigate } from "react-router";
import { setSingleProduct } from "../../Redux/singleproduct/action-creator";

function HomePage() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  return (
    <BorderBox>
      {/* first section  */}
      <div className={styles.first_section}>
        <div className={styles.left_side_first}>
          
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
            className={styles.rounded_image_first}
          /> */}
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg"
            className={styles.rounded_image_first}
          /> */}
        </div>

        <div className={styles.right_side_first}>
          <h1 className="">" Explore the beauty of flavors."</h1>
          <p>
          "Join our community of food enthusiasts and savor the flavors, meet fellow foodies, and create unforgettable culinary memories. Book with us and experience the world of gastronomy like never before."
          </p>
          <button>Learn more</button>
        </div>
      </div>

      {/* second section */}
      <div className={styles.second_section}>
        <Filter />
        <h1>We Offer the Best</h1>
        <p>
        "Our team of culinary experts is dedicated to ensuring that you have the dining experience of a lifetime. Choose us for your next foodie adventure and discover why we're the best in the business."
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://i.pinimg.com/564x/f6/68/f5/f668f5eed18b0db9fa827d202b8b7bff.jpg"
              />
            </div>
            <h2>Interantional Foods</h2>
            <p>
            "Embark on a culinary journey like never before with our international food tours. Explore diverse flavors, meet passionate chefs, and create food memories that will last a lifetime. Join us in savoring the world's culinary delights."
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3127/3127995.png"
              />
            </div>
            <h2>Food Community</h2>
            <p>
            "Join our foodie community and connect with like-minded enthusiasts from around the world. Share recipes, culinary tips, and delicious stories about your gastronomic adventures. Let's savor the flavors together and explore the world of food!"
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
              />
            </div>
            <h2>Interantional Foods</h2>
            <p>
            "Embark on a culinary journey like never before with our diverse range of international flavors. Discover new tastes, meet fellow food enthusiasts, and create delicious memories that will last a lifetime. Join us in savoring the world of extraordinary cuisine!"
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className={styles.third_section}>
        <h1>Great Foods across the World</h1>
        <p>
        "Indulge your taste buds in the most exquisite and diverse culinary destinations across the globe with us. From the rich flavors of Patagonian cuisine to the delightful seafood on the pristine beaches of Bali, we'll guide you on a gastronomic like no other."
        </p>
        <div className={styles.map_wrapper}>
          <img src="https://www.looptelecom.com/uploads/files/About/map-worldwide.png" />
        </div>
      </div>

      {/* fourth section */}
      
            <div><div className={styles.third_section}>
        <h1>Find Popular Foods</h1>
        <p>
        "Escape the ordinary and savor the extraordinary – with our curated selection of exclusive foodie deals."
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/c1/f1/ce/c1f1ce152f4d9996a50f3484f98f0b43.jpg" />
            </div>
            <h2>Chineese Noodles</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Chineese Noodles",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/236x/d9/26/63/d926633d61db14ac0455b6f5623d0ab7.jpg" />
            </div>
            <h2>Pizza</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 150</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/76/58/dd/7658dd9952fca1620d59a0a5baa95581.jpg" />
            </div>
            <h2>Biryani</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 350 </h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/6e/7e/8b/6e7e8b6a9dd76390b135b63d37d4cf56.jpg" />
            </div>
            <h2>Fried Rice</h2>
            
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/3b/b4/ea/3bb4ea708b73c60a11ccd4a7bdbb1524.jpg" />
            </div>
            <h2>KFC</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/3c/15/09/3c1509bed78363c3046804058bbd00f8.jpg" />
            </div>
            <h2>Fish</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg" />
            </div>
            <h2>Tandoori Chiken</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/d6/b8/2b/d6b82b5dc8ae3d3e6bb40af047426672.jpg" />
            </div>
            <h2>Shawarma</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/63/38/7b/63387b5819bcba86db156590251e2197.jpg" />
            </div>
            <h2>Butter Naan</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/e4/74/d9/e474d94d1fc4592558cc3e8f863c449a.jpg" />
            </div>
            <h2>Sandwich</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/db/17/ae/db17aeabcaf486c798cc3c4abb253468.jpg" />
            </div>
            <h2>Mutton Biryani</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/1e/18/76/1e18768508554652f5bc00c5318441f0.jpg" />
            </div>
            <h2>Fish Mandi</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/db/9a/c6/db9ac693c32678e9a9500d7505c35030.jpg" />
            </div>
            <h2>Prawn Biryani</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/6c/ba/f9/6cbaf9733860bbecbab77bb998dcdd3a.jpg" />
            </div>
            <h2>Chicken 65</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/b6/dc/4a/b6dc4af9d0fec392511d5378af68efce.jpg" />
            </div>
            <h2>Chicken Wings</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/02/c0/79/02c0797c6b8e7673ccdca6d9246966d0.jpg" />
            </div>
            <h2>Veg Thali</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/81/ae/4e/81ae4ee83f5c05059d7141de46fa39b7.jpg" />
            </div>
            <h2>NonVeg Thali</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/55/b5/02/55b502520aeb31cff64c27f28e987c88.jpg" />
            </div>
            <h2>Panner Curry</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/c4/aa/5c/c4aa5cb03a556b9b1f6f187f36c964ad.jpg" />
            </div>
            <h2>Mutton Curry</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/aa/d4/6c/aad46cedce354aa118bbbeb5bb6c9c6e.jpg" />
            </div>
            <h2>Fish Fry</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/cc/1f/ac/cc1fac9b9798fc5e5393b0dcca0b671d.jpg" />
            </div>
            <h2>Prawn Curry</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/00/3f/0f/003f0f0351967a7cb6212a8d9bfaf889.jpg" />
            </div>
            <h2>Gulab Jamun</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/94/22/29/9422290c442e8323245746b30eaf1564.jpg" />
            </div>
            <h2>Kaju Katli</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/736x/88/e2/ff/88e2ffd43a763c6d409c66d2949cd12d.jpg" />
            </div>
            <h2>Kunafa</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/ac/f1/e4/acf1e487d441a14906e78288f1ce6878.jpg" />
            </div>
            <h2>Mirchi Bajji</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/a8/58/85/a858855ed132167ed3e491a1da89c369.jpg" />
            </div>
            <h2>Samosa</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/45/32/d8/4532d88c802c994fcf7168c800cffcfc.jpg" />
            </div>
            <h2>Omletee</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/de/64/87/de64878624bbf82b9e9a6b1400a9ac4d.jpg" />
            </div>
            <h2>Pani Puri</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/4b/cb/ca/4bcbca666135ae5282e948118e75a0f6.jpg" />
            </div>
            <h2>Strawberry Cake</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/e5/b1/be/e5b1be682581fd52ee0be2c2740dcb86.jpg" />
            </div>
            <h2>Fruit Salad</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/736x/33/40/86/33408671a27acb4a1d49cd5a5a90d77b.jpg" />
            </div>
            <h2>French Fries</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/0b/ab/b5/0babb5cd909fafaa65bbdfdbbaa58e81.jpg" />
            </div>
            <h2>Burger</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/a4/77/7a/a4777a0ecc53815e9d8dde99bf49f246.jpg" />
            </div>
            <h2>Chicken Nuggets</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/0d/de/e9/0ddee9ed91d6524a8caaf16edb5ba14d.jpg" />
            </div>
            <h2>Kesar Badam</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/ad/f7/75/adf7754455bb4e3db8655a5d3ca27b8c.jpg" />
            </div>
            <h2>Jalebi</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/97/76/a1/9776a10b5cd19eb1d7ae7d2107abfda7.jpg" />
            </div>
            <h2>Haleem</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/0f/4a/c1/0f4ac1098f755290320b5876a1488f34.jpg" />
            </div>
            <h2>Biscoff Milkshake</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/cb/15/22/cb1522f3deb077c8e53fb3a9648e7e40.jpg" />
            </div>
            <h2>Strawberry Milkshake</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/78/68/b2/7868b25aad9801e644b413b7891dcc71.jpg" />
            </div>
            <h2>Coco Vanilla Shake</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/cd/4f/07/cd4f07c3cca88beb236d5785ac475d4b.jpg" />
            </div>
            <h2>Blue Mocktail</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/ed/8b/fe/ed8bfeba97705e395494e26203c92bfa.jpg" />
            </div>
            <h2>Sunrise Mocktail</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 179</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/736x/15/5c/29/155c297d9b425dc115ee7f6fb7b1e6c0.jpg" />
            </div>
            <h2>Lassi</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/ed/b5/62/edb562b35c22bde49d0c4392d134c37e.jpg" />
            </div>
            <h2>Coke</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 180</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div
            className={styles.product_card}
            onClick={() => {
              dispatch(
                setSingleProduct({
                  id: 1,
                  state: "Ladakh",
                  place: "Leh",
                  type: "friends",
                  rating: 4.5,
                  stay: 1,
                  title: "Best Of Ladakh - Standard",
                  image:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494575827/Pangong_Lake.jpg",
                  image1:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
                  image2:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
                  image3:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
                  image4:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
                  image5:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
                  image6:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
                  image7:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
                  price: 4125,
                  overview:
                    "Short Escape tour of Ladakh this trip you will witness some of the most beautiful monasteries, while you are in the monastery you will get a birds eye of the spectacular Ladakh’s mountain range. The sky view of the Ladakh’s Valleys, Mountains and City is best viewed from high tops of the Monasteries and Palace, The drive to Khardung-la is a memorable one as you are going to the Highest Mountain Top in the world known as “K TOP” sightseeing of Leh Palace, Pathar Sahib Gompa, Charismatic Magnetic Hill, Hall of Fame museum, The World’s Highest motorable road KHARDUNGLA pass makes your holiday a memorable journey.",
                  about:
                    "Leh is an enchanting utopia that literally makes you feel on top of the world. A prominent city in the Ladakh region of Jammu and Kashmir, it is a place where the stars shine brighter and the majestic Himalayas loom over you. For the travelers who really want to experience peaceful bliss with a slice of adventure, Leh is the perfect destination. You can engage in adrenaline-pumping adventure sports of the place or discover your spiritual side in one of the district’s numerous monasteries, such as Thiksey Monastery and Shanti Stupa. Adventure lovers, bikers in particular, will love to explore the never-ending stretches of mountain paths around the city. Equally fascinating is the culture of Leh. Kind-hearted people with warm smiles on their faces, greet you wherever you go and make you feel at home. Roam around the narrow paths of the City Market, and get engulfed with the irresistibl",
                })
              );
            }}>
              
            <div>
              <img src="https://i.pinimg.com/564x/2f/82/d2/2f82d2fe939829308d990310442deb94.jpg" />
            </div>
            <h2>Royal Falooda</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>Starts from ₹ 129</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Royal Rajasthan",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={mountains} />
        <div className={styles.fade}></div>
      </div>
      {/* fifth section */}
      <ContactUs />
    </BorderBox>
  );
}

export default HomePage;
