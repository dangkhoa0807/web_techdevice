const Order = require("../models/Order");
const config = require("config");
const moment = require("moment");
const crypto = require("crypto");
const querystring = require("qs");
const { default: axios } = require("axios");

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}
class OrderController {
  async handleCheckOut(req, res, next) {
    const data = req.body;
    try {
      const orderId = await Order.addOrder(data);

      if (orderId) {
        res
          .status(200)
          .json({ message: "thanh toán thành công", orderId: orderId });
      } else {
        res.status(500).json({ message: "Không thể tạo đơn hàng" });
      }
    } catch (error) {
      res.status(500).json({ message: "lỗi đăng thanh toán" });
    }
  }
  async orderDetail(req, res) {
    const data = req.body;
    try {
      const detail = await Order.addOrderDetail(data);
      if (detail) {
        res
          .status(200)
          .json({ message: "thanh toán thành công", detail: detail });
      } else {
        res.status(500).json({ message: "Không thể tạo đơn hàng" });
      }
    } catch (error) {
      res.status(500).json({ message: "lỗi đăng thanh toán" });
    }
  }
  async getCartByUser(req, res) {
    const idUser = req.params.id;
    if (!idUser) {
      res.status(401).json({ message: "Không tìm thấy người dùng" });
    }
    const ListCart = await Order.getCartByUser(idUser);
    if (ListCart) {
      res
        .status(200)
        .json({
          message: "lấy chi tiết hoá đơn thành công",
          ListCart: ListCart,
        });
    } else {
      res.status(500).json({ message: "Không thể lấy chi tiết hoá đơn" });
    }
  }
  async getAllOrderByIdUser(req, res) {
    const id = req.params.id;
    try {
      const listOrder = await Order.getAllOrderByIdUser(id);
      if (listOrder) {
        res.status(200).json(listOrder);
      }
    } catch (error) {
      res.status(500).json({ message: "Không thể lấy hoá đơn theo user" });
    }
  }
  async getOrdersPending(req, res) {
    try {
      const listOrder = await Order.getOrdersPending();
      if (listOrder) {
        res.status(200).json(listOrder);
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  async getOrdersShipping(req, res) {
    try {
      const listOrder = await Order.getOrdersShipping();
      if (listOrder) {
        res.status(200).json(listOrder);
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  async getOrdersComplete(req, res) {
    try {
      const listOrder = await Order.getOrdersComplete();
      if (listOrder) {
        res.status(200).json(listOrder);
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async handleOrderPending(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.handleOrderPending(id);
      if (order) {
        res.status(200).json({ message: "Xác nhận thành công", status: 200 });
      }
    } catch (error) {
      res.status(500).json({ message: "lỗi xác nhận", status: 500 });
    }
  }
  async handleOrderShipping(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.handleOrderShipping(id);
      if (order) {
        res.status(200).json({ message: "Xác nhận thành công", status: 200 });
      }
    } catch (error) {
      res.status(500).json({ message: "lỗi xác nhận", status: 500 });
    }
  }
  async CancelOrder(req, res) {
    const id = req.params.id;
    try {
      const carts = await Order.cancelCart(id);
      if (carts) {
        const order = await Order.cancelOrder(id);
        if (order) {
          res
            .status(200)
            .json({ message: "Huỷ thành công", status: 200, order: order });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "lỗi Khi huỷ", status: 500 });
    }
  }
   checkOutVNPAY(req, res) {
    const ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    const tmnCode = config.get("vnp_TmnCode");
    const secretKey = config.get("vnp_HashSecret");
    let vnpUrl = config.get("vnp_Url");
    const returnUrl = config.get("vnp_ReturnUrl");

    const createDate = moment().format("YYYYMMDDHHmmss");
    const orderId = moment().format("HHmmss");
    const amount = req.body.total_order * 100;
    const bankCode = req.body.bankCode || "VNBANK";
    const orderInfo = req.body.orderDescription;
    const orderType = req.body.orderType || "billpayment";
    const locale = req.body.language || "vn";
    const currCode = "VND";

    let vnp_Params = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: tmnCode,
      vnp_Locale: locale,
      vnp_CurrCode: currCode,
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderInfo,
      vnp_OrderType: orderType,
      vnp_Amount: amount,
      vnp_ReturnUrl: returnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    if (bankCode) {
      vnp_Params["vnp_BankCode"] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    const signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    console.log(signData);
    console.log(signed);

    vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
    res.json({ vnpUrl });
  }

  async checkOutMOMO(req, res) {
    var accessKey = "F8BBA842ECF85";
    var secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    var orderInfo = "pay with MoMo";
    var partnerCode = "MOMO";
    var redirectUrl ="http://localhost:3000/checkout";
    var ipnUrl = "http://localhost:4000/api/checkout/momoCallback";
    var requestType = "payWithMethod";
    var amount = req.body.total_order ?? '50000';
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = "";
    var orderGroupId = "";
    var autoCapture = true;
    var lang = "vi";

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature =
      "accessKey=" +
      accessKey +
      "&amount=" +
      amount +
      "&extraData=" +
      extraData +
      "&ipnUrl=" +
      ipnUrl +
      "&orderId=" +
      orderId +
      "&orderInfo=" +
      orderInfo +
      "&partnerCode=" +
      partnerCode +
      "&redirectUrl=" +
      redirectUrl +
      "&requestId=" +
      requestId +
      "&requestType=" +
      requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------");
    console.log(rawSignature);
    //signature
    const crypto = require("crypto");
    var signature = crypto
      .createHmac("sha256", secretKey)
      .update(rawSignature)
      .digest("hex");
    console.log("--------------------SIGNATURE----------------");
    console.log(signature);

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      partnerName: "Test",
      storeId: "MomoTestStore",
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      lang: lang,
      requestType: requestType,
      autoCapture: autoCapture,
      extraData: extraData,
      orderGroupId: orderGroupId,
      signature: signature,
    });
	const options = {
		method: 'POST',
		url: 'https://test-payment.momo.vn/v2/gateway/api/create',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(requestBody)
		},
		data: requestBody
	}
	let result;
	try {
		result = await axios(options);
		return res.json(result.data)
	} catch (error) {
		return res.status(500).json(error)
	}
  }
  checkOutMOMOCallback(req, res){
	console.log('callback: ');
	  /**
   * Dựa vào kết quả này để update trạng thái đơn hàng
   * Kết quả log: req.body
   * {
        partnerCode: 'MOMO',
        orderId: 'MOMO1712108682648',
        requestId: 'MOMO1712108682648',
        amount: 10000,
        orderInfo: 'pay with MoMo',
        orderType: 'momo_wallet',
        transId: 4014083433,
        resultCode: 0,
        message: 'Thành công.',
        payType: 'qr',
        responseTime: 1712108811069,
        extraData: '',
        signature: '10398fbe70cd3052f443da99f7c4befbf49ab0d0c6cd7dc14efffd6e09a526c0'
      }
   */
	return res.status(204).json(req.body);
  }
  async checkOutMOMOStatus(req, res) {
	const { orderId } = req.body;
	var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  var accessKey = 'F8BBA842ECF85';
  const rawSignature = `accessKey=${accessKey}&orderId=${orderId}&partnerCode=MOMO&requestId=${orderId}`;

  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

  const requestBody = JSON.stringify({
    partnerCode: 'MOMO',
    requestId: orderId,
    orderId: orderId,
    signature: signature,
    lang: 'vi',
  });

  // options for axios
  const options = {
    method: 'POST',
    url: 'https://test-payment.momo.vn/v2/gateway/api/query',
    headers: {
      'Content-Type': 'application/json',
    },
    data: requestBody,
  };

  const result = await axios(options);

  return res.status(200).json(result.data);
  }
  async getorderStatistics(req,res){
    try {
      const orders = await Order.getorderStatistics()
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error})
    }
  }
}

module.exports = new OrderController();
