import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, SelectedItems } from "../../redux/slices/Basketslice";
import { showNotification } from "@mantine/notifications";
import Image from "next/image";

const MaxNumber = 5;
const MinNumber = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [isproduct, setisproduct] = useState(false);
  const [rating, setrating] = useState(2);
  const [hasprime, setprime] = useState(0.1);
  const BasketItems = useSelector(SelectedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setprime(Math.random() < 0.5);
    setrating(
      Math.floor(Math.random() * (MaxNumber - MinNumber + 1) + MinNumber)
    );
  }, []);

  const addtoitemsbasket = () => {
    showNotification({
      title: "Add to basket",
      message: "you added to basket sucessfully😊",
      color: "green",
    });
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasprime,
      quantity: 1,
    };

    if (isproduct) alert("product already addToBasket");
    else {
      setisproduct(true);

      dispatch(addToBasket(product));
    }
  };

  useEffect(() => {
    const filterdata = BasketItems.filter((item) => item.id === id);

    if (!!filterdata.length) {
      setisproduct(true);
      return;
    }
  }, [isproduct]);

  return (
    <div className="flex flex-col relative p-10 m-5 z-30 bg-white rounded-sm">
      <p className="capitalize absolute top-4 right-4 italic text-sm text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt="image"
        width={192}
        height={192}
        objectFit="contain"
      />
      <h4
        className="
            my-3 line-clamp-1 font-semibold"
      >
        {title}
      </h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((item, index) => (
            <AiFillStar className="text-yellow-400" key={index} />
          ))}
      </div>
      <div className="my-3 line-clamp-2">{description}</div>
      {!hasprime ? (
        <div className="font-semibold mb-12">
          <Currency quantity={price} currency="GBP" />
        </div>
      ) : (
        <div className="font-semibold mb-3">
          <Currency quantity={price} currency="GBP" />
        </div>
      )}
      {hasprime && (
        <div className="flex  mb-3 space-x-3">
          <img src="/images/prime.png" className="w-[40px]" alt="delivery" />
          <p
            className="font-semibold text-sm
                        "
          >
            Free next-day Delivery
          </p>
        </div>
      )}
      <button
        onClick={addtoitemsbasket}
        role="link"
        disabled={isproduct}
        className={`button mt-3 shadow-md font-semibold mx-auto ${
          isproduct &&
          " bg-gradient-to-t from-gray-500 to-gray-300 border-gray-200 text-gray-300 cursor-not-allowed"
        }`}
      >
        {isproduct ? "Added to basket" : "Add to basket"}
      </button>
    </div>
  );
};

export default Product;
