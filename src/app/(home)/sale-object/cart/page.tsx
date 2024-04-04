import Link from 'next/link';
import { formatCurrencyVN } from '@/utils/numberUtils';
import Image from 'next/image';
import { cartData } from '@/utils/dataTest/cartData';
import { Button, IconButton } from '@/components/MaterialTailwind';
import ChevronBackLine from '@/components/SvgComponents/line/ChevronBackLine';
import InfomationCircleLine from '@/components/SvgComponents/line/InfomationCircleLine';
import TrashLine from '@/components/SvgComponents/line/TrashLine';

const Cart = () => {
  const calculateTotal = () => {
    return cartData.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="bg-white col-span-1 rounded-lg shadow-md p-4 lg:col-span-2">
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-2xl font-bold">Giỏ hàng</h1>
              <h2 className="text-2xl font-semibold">3 sản phẩm</h2>
            </div>
            <table
              className="w-full table-fixed text-sm lg:text-base"
              cellSpacing="0"
            >
              <thead>
                <tr className="h-12 uppercase">
                  <th className="text-left" colSpan={2}>
                    Sản phẩm
                  </th>
                  <th className="pl-5 text-right lg:pl-0">
                    <span className="text-right">Số lượng</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Giá</th>
                  <th className="text-right">Tổng giá</th>
                  <th className="text-right"></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((cartItem) => (
                  <tr key={cartItem.name}>
                    <td className="pb-4 md:table-cell" colSpan={2}>
                      <div className="transition-primary flex items-center gap-2">
                        <Link
                          href={`/sale-object/${cartItem.id}`}
                          className="flex items-center hover:text-primary"
                        >
                          <Image
                            src={cartItem.image_url}
                            className="rounded w-20 h-auto object-fill"
                            alt={cartItem.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                          <p className="mb-2 md:ml-4 ">
                            {cartItem.name} - {cartItem.net_weight}
                            {cartItem.unit}
                          </p>
                        </Link>
                      </div>
                    </td>

                    <td className="text-right">
                      <div className="mx-auto flex h-8 w-24 rounded-lg bg-transparent text-right">
                        <button
                          data-action="decrement"
                          className="h-full w-20 cursor-pointer rounded-l bg-underground text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="text-md flex w-full cursor-default items-center bg-white text-center font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none md:text-base"
                          name="custom-input-number"
                          defaultValue={cartItem.quantity}
                        />
                        <button
                          data-action="increment"
                          className="h-full w-20 cursor-pointer rounded-r bg-underground text-gray-600 hover:bg-gray-400 hover:text-gray-700"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm font-medium lg:text-base">
                        {formatCurrencyVN(cartItem.price)}
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm font-medium lg:text-base">
                        {formatCurrencyVN(cartItem.price * cartItem.quantity)}
                      </span>
                    </td>
                    <td className="text-right">
                      <IconButton
                        variant="text"
                        color="red"
                        className="rounded-full"
                      >
                        <TrashLine className="w-5 h-5 cursor-pointer text-blue-gray-700" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link
              href="/"
              className="transition-primary mt-10 flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-primary"
            >
              <ChevronBackLine className="w-5 h-5" />
              Tiếp tục mua hàng
            </Link>
          </div>
          <div
            id="checkout"
            className="col-span-1 flex flex-col items-center gap-y-5"
          >
            <div className="bg-white rounded-lg shadow-md p-4">
              <h1 className="border-b pb-8 text-2xl font-semibold">
                Thanh toán
              </h1>

              <h1 className="py-2 text-xl font-semibold">Thông tin đơn hàng</h1>
              <span className="text-base font-semibold ">Sản phẩm: 5</span>
              <div className="flexBetween">
                <span className="text-base font-semibold">Tạm tính</span>

                <span className="text-xl font-semibold">
                  {formatCurrencyVN(calculateTotal())}
                </span>
              </div>

              <div className="mt-2 text-center">
                <div className="flexBetween text-sm font-semibold uppercase">
                  <div className="flexStart gap-2">
                    <span className="text-lg font-bold">Tổng tiền</span>
                    <InfomationCircleLine className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrencyVN(calculateTotal())}
                  </span>
                </div>
                <p className="text-left text-sm">
                  Phí vận chuyển sẽ được tính ở trang thanh toán. Bạn cũng có
                  thể nhập mã giảm giá ở trang thanh toán.
                </p>
              </div>
            </div>
            <Link className="w-full" href="/sale-object/checkout">
              <Button
                className="btn-primary bg-primary w-full"
                color="green"
                size="lg"
              >
                Tiến hành thanh toán
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
