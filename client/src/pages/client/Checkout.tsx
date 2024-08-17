import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import useCartStore from "../../cartStore";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { AxiosError } from "axios";
import useUserStore from "../../hooks/userStore";

interface ErrorResponse {
  message: string;
  status: number;
}
interface FormCheckOut {
  id_user: string | number;
  code_order: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  note?: string;
  payment_method: string;
  total_order: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const generateRandomString = (length: number) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const cart = useCartStore((state) => state.cart);

  const deloyCart = useCartStore((state) => state.deloyCart);
  const { user } = useUserStore();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCheckOut>();
  let totalAmount = 0;
  cart.forEach((item) => {
    const price = item.price_sales ? item.price_sales : item.price;
    totalAmount += price * item.quantity;
  });
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setValue("id_user", user.id);
      setValue("name", user.full_name);
      setValue("email", user.email);
      setValue("total_order", totalAmount);
      setValue("code_order", generateRandomString(10));
    }
  }, [user, setValue, totalAmount]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');
    if (orderId) {
      checkPaymentStatus(orderId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const checkPaymentStatus = async (orderId :string) => {
    const response = await axios.post(`${process.env.REACT_APP_API_CHECKOUT}/momoCheck-status`, { orderId });
    if (response.data.resultCode === 0) {

      toast.success("Thanh toán thành công!");
      deloyCart();
      // Chuyển hướng đến trang cảm ơn hoặc trang chi tiết đơn hàng
    } else {
      toast.error("Thanh toán thất bại: " + response.data.message);
    }
  };

  const onSubmit: SubmitHandler<FormCheckOut> = async (data) => {
    try {
      if (data.payment_method === "VNPAY") {
        const orderDescription = `Thanh toan don hang :${data.payment_method}`; // Ví dụ order_id là 5
        const encodedOrderDescription = encodeURIComponent(orderDescription);
        const response = await axios.post(
          `${process.env.REACT_APP_API_CHECKOUT}/vnpay`,
          {
            ...data,
            orderDescription: encodedOrderDescription,
          },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        if (response) {
          const reponsive = await axios.post(
            `${process.env.REACT_APP_API_CHECKOUT}`,
            data
          );
          const idOrder = reponsive.data.orderId;
          orderDetail(idOrder);
          deloyCart();
        }
        const { vnpUrl } = response.data;

        window.location.href = vnpUrl;
      } else if (data.payment_method === "MOMOATM") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_CHECKOUT}/momo`,
          data,
          { headers: { "Content-Type": "application/json" } }
        );
        if (response) {
          const reponsive = await axios.post(
            `${process.env.REACT_APP_API_CHECKOUT}`,
            data
          );
          const idOrder = reponsive.data.orderId;
          orderDetail(idOrder);
          deloyCart();
        }
          if (response.data.payUrl) {
            window.location.href = response.data.payUrl;
          }
      } else {
        const reponsive = await axios.post(
          `${process.env.REACT_APP_API_CHECKOUT}`,
          data
        );
        const idOrder = reponsive.data.orderId;
        const success = reponsive.data;
        orderDetail(idOrder);
        toast.success(success.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        deloyCart();
        setTimeout(() => {
          navigate("/thank");
        }, 3000);
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      toast.error(axiosError.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const orderDetail = (idOrder: number) => {
    try {
      cart.forEach((item) => {
        let price = item.price_sales ? item.price_sales : item.price;
        let data = {
          id_product: item.id,
          id_order: idOrder,
          price: price,
          quantity: item.quantity,
        };
        axios.post(`${process.env.REACT_APP_API_CHECKOUT}/orderDetail`, data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <h3 className="text-2xl font-bold text-gray-800">Checkout</h3>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </Link>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  to="#"
                >
                  2
                </Link>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  to="#"
                >
                  3
                </Link>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 ">
            {cart.length > 0
              ? cart.map((item) => {
                  const price = item.price_sales
                    ? item.price_sales.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })
                    : item.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      });
                  const total = item.price_sales
                    ? (item.price_sales * item.quantity).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })
                    : (item.price * item.quantity).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      });
                  return (
                    <div
                      className="flex flex-col rounded-lg bg-white sm:flex-row"
                      key={item.id}
                    >
                      <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={`${process.env.REACT_APP_PUBLIC_URL}/product/${item.image}`}
                        alt=""
                      />
                      <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{item.name}</span>
                        <span className="float-right text-gray-400">
                          {price}
                        </span>
                        <p className="text-lg font-bold">{total}</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <Link
            to="http://localhost:3000/cart"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Quay lại giỏ hàng
          </Link>
        </div>
        <form
          className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="container mx-auto px-4 font-semibold">
            <div className="row flex  flex-wrap">
              <div className="col-md-7 w-full ">
                <div className="billing-details">
                  <div className="section-title">
                    <h3 className="title text-2xl font-semibold mb-4">
                      Thông tin giao hàng
                    </h3>
                  </div>

                  <input type="hidden" {...register("id_user")} />
                  <input type="hidden" {...register("code_order")} />
                  <input type="hidden" {...register("total_order")} />
                  <div className="form-group mb-4">
                    <input
                      className="input w-full p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Họ và tên"
                      {...register("name", {
                        required: "Bạn chưa nhập họ tên *",
                      })}
                    />
                    {errors.name && (
                      <span className=" text-red-400">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      className="input w-full p-2 border border-gray-300 rounded"
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Bạn chưa nhập email *",
                      })}
                    />
                    {errors.email && (
                      <span className=" text-red-400">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      className="input w-full p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Số điện thoại"
                      {...register("phone", {
                        required: "Bạn chưa nhập số điện thoại *",
                      })}
                    />
                    {errors.phone && (
                      <span className=" text-red-400">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      className="input w-full p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Địa chỉ"
                      {...register("address", {
                        required: "Bạn chưa nhập địa chỉ *",
                      })}
                    />
                    {errors.address && (
                      <span className=" text-red-400">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      className="input w-full p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Thành phố"
                      {...register("city", {
                        required: "Bạn chưa nhập thành phố *",
                      })}
                    />
                    {errors.city && (
                      <span className=" text-red-400">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-checkbox flex items-center">
                      <input
                        type="checkbox"
                        id="create-account"
                        className="mr-2"
                      />
                      <label
                        htmlFor="create-account"
                        className="flex items-center"
                      >
                        <span className="mr-2"></span>
                        Create Account?
                      </label>
                      {/* <div className="caption mt-2 ml-6">
                               <input className="input w-full p-2 border border-gray-300 rounded" type="password" placeholder="Enter Your Password"/>
                           </div> */}
                    </div>
                  </div>
                </div>
                <div className="order-notes mb-4">
                  <textarea
                    className="input w-full p-2 border border-gray-300 rounded"
                    placeholder="Ghi chú đặt hàng"
                    {...register("note")}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-5 w-full  order-details">
                <div className="order-summary mb-4">
                  <div className="payment-method mt-4">
                    <div className="input-radio mb-2">
                      <input
                        type="radio"
                        id="payment-1"
                        value="COD"
                        className="mr-2"
                        {...register("payment_method")}
                      />
                      <label htmlFor="payment-1" className="flex items-center">
                        <span className="mr-2"></span>
                        Thanh toán khi nhận
                      </label>
                    </div>
                    <div className="input-radio mb-2">
                      <input
                        type="radio"
                        id="payment-2"
                        value="MOMOATM"
                        className="mr-2"
                        {...register("payment_method")}
                      />
                      <label htmlFor="payment-2" className="flex items-center">
                        <span className="mr-2"></span>
                        Thanh toán bằng MOMO ATM
                      </label>
                      <div className="caption mt-2 ml-6">
                        <p>
                          Momo là một dịch vụ thanh toán di động độc đáo tại
                          Việt Nam, cung cấp giải pháp thanh toán nhanh chóng và
                          thuận tiện cho người dùng di động.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="input-radio mb-2">
                      <input
                        type="radio"
                        id="payment-3"
                        value="MOMOQRCode"
                        className="mr-2"
                        {...register("payment_method")}
                      />
                      <label htmlFor="payment-3" className="flex items-center">
                        <span className="mr-2"></span>
                        Thanh toán bằng MOMO QRCode
                      </label>
                      <div className="caption mt-2 ml-6">
                        <p>
                          Momo QR code là một hình thức thanh toán tiện lợi được
                          thực hiện thông qua quét mã QR để thực hiện các giao
                          dịch tài chính.
                        </p>
                      </div>
                    </div>
                    <div className="input-radio mb-2">
                      <input
                        type="radio"
                        id="payment-4"
                        value="VNPAY"
                        className="mr-2"
                        {...register("payment_method")}
                      />
                      <label htmlFor="payment-4" className="flex items-center">
                        <span className="mr-2"></span>
                        Thanh toán bằng VNPAY
                      </label>
                      <div className="caption mt-2 ml-6">
                        <p>
                          VNPAY là một dịch vụ thanh toán điện tử tại Việt Nam,
                          cung cấp các giải pháp thanh toán trực tuyến cho cá
                          nhân và doanh nghiệp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="input-checkbox flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="mr-2"
                    />
                    <label htmlFor="agree" className="flex items-center">
                      <span className="mr-2"></span>
                      Tôi đã đọc và chấp nhận các{" "}
                      <Link to="#" className="text-blue-500">
                        {" "}
                        điều khoản và điều kiện
                      </Link>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="primary-btn order-submit mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Checkout;
