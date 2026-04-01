import { useState } from "react"
import productsData from "../data/products"




function MainSection({ cart, setCart}) {
  const [view, setView] = useState("products")
 



  // add in cart

  const handleAdd = (product) => {
    setCart([...cart, product])
  }

  // remove form there


  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  // clear  the cart
  const handleCheckout = () => {
    setCart([])
  }


//   Return Function Start 

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}

      <h2 className="text-3xl font-bold text-center">Premium Digital Tools</h2>

      <p className="text-gray-600 mt-4  text-center">Choose from our curated collection of premium digital products designed to <br /> boost your productivity and creativity</p>

      {/* Toggle */}

      <div className="flex justify-center gap-4 mt-6">

        {/* Product button  */}

        <button onClick={() => setView("products")} className="btn bg-purple-600 text-white">
          Products
        </button>

        {/* cart Button  */}


        <button onClick={() => setView("cart")} className="btn">
          Cart ({cart.length})
        </button>
      </div>

      {/* product section */}


      {view === "products" ? (

        // Product grid 


        <div className="grid md:grid-cols-3 gap-6 mt-10 bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">

          {productsData.map(product => (
            <div key={product.id} className="border border-gray-100 rounded-xl p-5 shadow-sm">

              <div className="flex justify-between items-center">

                <span className="text-5xl bg-gray-50 rounded-full w-[70px] h-[70px] items-center justify-center flex">{product.icon}</span>

                <span className={`
               text-xs px-3 py-1 rounded-full
               ${product.tagType === "best" && "bg-purple-100 text-purple-600"}
               ${product.tagType === "new" && "bg-blue-100 text-blue-600"}
               ${product.tagType === "popular" && "bg-pink-100 text-pink-600"}
            `}>
    {product.tag}
  </span>
              </div>

              <h3 className="text-xl font-semibold mt-2">
                {product.name}</h3>

              <p className="text-gray-600 text-sm mt-2">{product.description}</p>

              <p className="mt-3 font-bold">${product.price} <span className="text-sm text-gray-500">/{product.period}</span></p>

              <ul className="mt-3 text-sm text-gray-600">
                {product.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleAdd(product)}
                className="mt-4 w-full py-2 rounded-[18px] bg-gradient-to-r from-purple-600 to-blue-400 text-white"
              >
                Buy Now
              </button>

            </div>
          ))}

        </div>

      ) : (

        // display cart


        <div className="mt-10">

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            <div className="space-y-4">

              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <p>{item.name}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p>${item.price}</p>
                    <button onClick={() => handleRemove(item.id)} className="text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={handleCheckout}
                className="btn w-full bg-purple-600 text-white mt-4"
              >
                Proceed to Checkout
              </button>

            </div>
          )}

        </div>

      )}

    </div>
  )
}

export default MainSection