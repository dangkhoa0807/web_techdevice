
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
interface Props{
	tab:number
	user :User |null
}
const InforAccount:React.FC<Props> = (props) => {
  const {tab ,user} = props
  return (
    <div id="tab1" className={tab === 1? "tab-content active" :"tab-content "}>
            <div className="title-form">Thông Tin Tài Khoản</div>

            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={user?.username}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full_name"
                  >
                    Tên đầy đủ
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={user?.full_name}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={user?.email}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={user?.phone}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="avatar"
                >
                  Thay đổi avatar
                </label>
                <input
                  type="file"
                  name="avatar"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>

              <input type="hidden" name="old_image" value="" />

              <button
                type="submit"
                name="submit-updateUser"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Lưu lại
              </button>
            </form>
          </div>
  )
}

export default InforAccount

