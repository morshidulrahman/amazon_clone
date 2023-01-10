import React from "react";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  baskettotal,
} from "../../redux/slices/Basketslice";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/slices/Basketslice";
const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasprime,
  quantity,
}) => {
  const dispatch = useDispatch();
  const total = useSelector(baskettotal);
  const addtobasketitems = () => {
    dispatch(
      addToBasket({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        hasprime,
      })
    );
  };

  const removefrombasketitems = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid md:grid-cols-5 my-5 grid-cols-1">
      <img
        src={image}
        className="md:w-48 md:h-48 object-contain w-96 h-64"
        alt={title}
      />
      <div className="col-span-3 mx-5">
        <p className="font-semibold my-2 line-clamp-1">{title}</p>
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
          <div className="font-semibold mb-3 flex">
            <p>price & quantity</p>
            <Currency quantity={total} currency="GBP" />
          </div>
        )}
        {hasprime && (
          <div className="flex  mb-3 space-x-3">
            <img src="/images/prime.png" className="w-[40px]" alt="delivery" />
            <p className="font-semibold text-sm">Free next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3 mt-8 col-span-1">
        <div className="flex w-full space-x-1 items-center ">
          <button
            onClick={() => dispatch(decreaseItemQuantity(id))}
            className="border-r md:w-10 w-20 p-2 bg-red-500 rounded-sm text-white"
          >
            -
          </button>
          <h1 className="text-lg font-semibold text-center md:w-16 w-56">
            {quantity}
          </h1>
          <button
            onClick={() => dispatch(increaseItemQuantity(id))}
            className="border-l md:w-10 p-2 w-20 bg-red-500 rounded-sm text-white"
          >
            +
          </button>
        </div>
        <button
          className="button font-semibold"
          onClick={removefrombasketitems}
        >
          remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
