const dummyData = {
  "/login": {
    payload: {
      email: "useremail@email.com",
      password: "userpassword",
    },
    response: {
      access_token: "samplejwt",
      token_type: "bearer",
    },
  },
  "/create_account": {
    payload: {
      email: "newuser@email.com",
      name: "John Doe",
      password: "newuserpassword",
    },
    response: {
      success: true,
    },
  },
  "/get_current_price": {
    response: {
      result: 200,
    },
  },
  "/set_current_price": {
    payload: {
      new_price: 250,
    },
    response: {
      result: true,
    },
  },
  "/give_credits": {
    payload: {
      amount: 2000,
      user: "useremail@email.com",
    },
    response: {
      result: true,
    },
  },
  "/order_labels": {
    payload: {
      labels: [
        {
          fromname: "John",
          fromcompany: "ABC Corp",
          //... other fields
        },
      ],
    },
    response: {
      result: true,
    },
  },
  "/get_label_pdf": {
    payload: {
      labelid: "12313",
    },
    response: {
      raw: "samplepdfcontent",
    },
  },
  "/get_balance": {
    response: {
      result: 2300,
    },
  },
  "/get_orders": {
    response: {
      result: {
        123234: [
          {
            type: "sampletype",
            ToZip: "12345",
            //... other fields
          },
        ],
      },
    },
  },
};

export default dummyData;
