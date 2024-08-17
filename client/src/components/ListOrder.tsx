
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface User {
	avatar?: string;
	email: string;
	full_name: string;
	id: number;
	is_admin: number;
	password: string;
	phone: string;
	username: string;
  }
interface IOrder{
	id:number
	code_order:string
	payment_status:number
	address: string
	total_order:number
}
interface Props{
	tab:number
	user :User |null
}
interface ErrorResponse {
  message: string
  status: number
}

const ListOrder :React.FC<Props> = (props) => {
	const {tab ,user} = props
	const [orders ,setOrders] = useState<IOrder[]>([])

  const handleDele = async(id :number)=>{
    try {
      const response= await axios.delete(`${process.env.REACT_APP_API_ORDER}/orderDele/${id}`);
      const success = response.data.message

      if (success) {
        if (success) {
          toast.success(success, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
        }
        setOrders(orders.filter((item) => item.id !== id));
      }
    } catch (error) {
      const axiosError = error as  AxiosError<ErrorResponse>

       toast.error(axiosError.response?.data?.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }

	useEffect(() =>{
    
		const getOrders =async()=>{
			const token = Cookies.get('token')
			try {

				const response= await axios.get(`${process.env.REACT_APP_API_ORDER}/orderByIdUser/${user?.id}`,{
					withCredentials: true,
					headers: {
					  Authorization: `Bearer ${token}`
					}
				  })
				  if(response.data){
					setOrders(response.data)
				  }
			} catch (error) {
				console.log(error);
				
			}
		}
    if(user){
		getOrders()
    }
	},[user])

  return (
	<div id="tab2" className={tab === 2? "tab-content active" :"tab-content "}>
            <div className="text-lg font-semibold mb-4">Danh sách đơn hàng</div>
            <div className="w-full">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4">
                  <strong className="text-gray-800">Danh sách đơn hàng</strong>
                </div>
                <div className="p-20">
                  <table className="w-full bg-white border">
                    <thead>
                      <tr className="">
                        <th className="py-2 px-4 border-b">Mã Đơn Hàng</th>
                        <th className="py-2 px-4 border-b">Trạng Thái</th>
                        <th className="py-2 px-4 border-b">Địa Chỉ</th>
                        <th className="py-2 px-4 border-b">Tổng Tiền</th>
                        <th className="py-2 px-4 border-b">Chi Tiết</th>
                      </tr>
                    </thead>
                    <tbody>
						{orders.length === 0 ? ( <tr>
                        <td className="py-2 px-4 border-b w-full" colSpan={5}>
                          Chưa có đơn hàng nào
                        </td>
                      </tr>
					  )  : (orders.map((item)=>(
						<tr key={item.id}>
                        <td className="py-2 px-4 border-b">{item.code_order}</td>
                        <td className="py-2 px-4 border-b">{ item.payment_status=== 0 ? 'Chờ xác nhận' : item.payment_status===1 ? 'Đang giao hàng' :  'Đã giao thành công' }</td>
                        <td className="py-2 px-4 border-b">{item.address}</td>
                        <td className="py-2 px-4 border-b">{item.total_order.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                        <td className="py-2 px-4 border-b">
                          <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
                          >
                            Chi tiết đơn hàng
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">{
							item.payment_status=== 0 ? ( <button
								type="button"
								className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded" onClick={()=>handleDele(item.id)}
							  >
								Hủy
							  </button>) : item.payment_status===1 ? ( <button
                              type="button"
                              className="bg-orange-500 hover:bg-orange-600 text-white  py-2 px-4 rounded"
                            >
                              Xác nhận giao hàng
                            </button>) :  (<button
                              type="button"
                              className="bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded"
                            >
                              Đánh Giá
                            </button>)}
                        </td>
						</tr>
					  ))
					  )}
                     

                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ListOrder
