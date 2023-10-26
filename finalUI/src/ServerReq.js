// Login


const  sendlogin = async (email, password)=>{
    
    let  send  =  await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            email: email,
            password: password
            })
    })
   return send;
}
// Create Account

export const sendaccount = async (email, name , pwd)=>{
    let sendcc = await  fetch('http://localhost:3000/create_account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: pwd
        })
    })

    return sendcc;
}

export default sendlogin;


// Get Current Price

const getCurrentPrice =async ()=>{
    return await fetch('http://localhost:3000/get_current_price', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWTAdmin'
        }
    })

    
}


// // Set Current Price
const set_current_price  = async ()=>{

    return await fetch('http://localhost:3000/set_current_price', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer JWTAdmin'
        },
        body: JSON.stringify({
            new_price: 300
        })
    })
}

// // Give Credits
const  GiveCredit = async ()=>{
    
    return await fetch('http://localhost:3000/give_credits', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer JWTAdmin'
    },
    body: JSON.stringify({
        amount: 2000,
        user: "useremail@email.com"
    })
})
}
export const orderLabrequests =  (orderdata)=>{

    return  fetch('http://localhost:3000/order_labels', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer JWT'
    },
    body: JSON.stringify(orderdata
            /*example label order data*/ )
})

}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get Label PDF
const GetLabelPdf =async()=>{
    return await fetch('http://localhost:3000/get_label_pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer JWT'
        },
        body: JSON.stringify({
            labelid: "12313"
        })
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get Balance
export const GetBalance = async ()=>{

    console.log('hello from getbalaNCE')
    // console.log('hello from getbalaNCE')
    return  fetch('http://localhost:3000/get_balance', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWT'
        }
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get Orders
export const GetOrders =() =>{
    return  fetch('http://localhost:3000/get_orders', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWT'
        }
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get Order by Batch
export const GetOrdersByBatch = () => {
    return  fetch('http://localhost:3000/get_order_by_batch', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWT'
        }
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get Total Deposited
export const GetTotalDeposited =  ()=>{
    return   fetch('http://localhost:3000/get_total_deposited', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWT'
        }
    })
    
}
// .then(response => response.json())
// .then(data => console.log(data));

// // Get Plugs
const  GetPlugs = async ()=>{
    return  await fetch('http://localhost:3000/get_plugs', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer JWTAdmin'
    }
})
 
}
// .then(response => response.json())
// .then(data => console.log(data));

// // Set Plug
const SetPlug = async ()=>{
    return await fetch('http://localhost:3000/set_plug', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer JWTAdmin'
    },
    body: JSON.stringify({
        plug: "Cheaplabels"
    })
})

}
// .then(response => response.json())
// .then(data => console.log(data));

// // Get Current Plug
const GetCurrentPlug = async ()=>{
    return await  fetch('http://localhost:3000/get_current_plug', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWTAdmin'
        }
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Get All Sales History

export const GetAllSalesHistory =  () =>{
    return  fetch('http://localhost:3000/get_all_sales_history', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer JWTAdmin'
        }
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // 2FA Send
const auth2FASend = async ()=>{
return await fetch('http://localhost:3000/2fa_send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "useremail@email.com"
    })
})
}

// .then(response => response.json())
// .then(data => console.log(data));

// // 2FA Confirm
const auth2FAconfirm = async ()=>{
    return await fetch('http://localhost:3000/2fa_confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: "useremail@email.com",
            facode: "1231"
        })
    })
}

// .then(response => response.json())
// .then(data => console.log(data));

// // Create Buy Intent
const CreateBuyIntent =async ()=>{
    return await fetch('http://localhost:3000/create_buy_intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: 1000,
            user: "useremail@email.com"
        })
    })
}

// .then(response => response.json())
// .then(data => console.log(data));
