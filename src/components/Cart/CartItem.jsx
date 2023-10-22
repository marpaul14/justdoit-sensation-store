import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function CartItem({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={img} alt={`img/cart-item/${id}`} />
          </div>
          <div>
            <div>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <div>
              <button type="button" className="">
                <MinusIcon className="w-5 h-5" />
              </button>
              <div>{cartQuantity}</div>
              <button>
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>{price * cartQuantity}</h1>
          </div>
          <div>
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
