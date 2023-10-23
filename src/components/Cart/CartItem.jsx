import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function CartItem({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) {
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b ${color} ${shadow}`}>
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
          <div className="">
            <div className="">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <div className="">
              <button type="button" className="">
                <MinusIcon className="w-5 h-5" />
              </button>
              <div className="">{cartQuantity}</div>
              <button>
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <h1>{price * cartQuantity}</h1>
          </div>
          <div className="">
            <button type="button" className="">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
