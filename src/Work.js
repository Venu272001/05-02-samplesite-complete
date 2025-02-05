import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your favorite meals from our diverse menu, tailored to satisfy every craving. ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select how frequently you want your meals delivered, whether daily, weekly, or on-demand! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy quick and reliable food delivery, bringing fresh meals straight to doorstep in no time! ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
            Our restaurant's food delivery website allows you to browse our menu, customize your meals, and place orders effortlessly.
            Enjoy fast, fresh, and delicious food delivered straight to your doorstep with just a few clicks! 🚀🍽️
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;