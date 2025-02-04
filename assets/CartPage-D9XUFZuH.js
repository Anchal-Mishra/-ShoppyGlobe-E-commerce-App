import{j as e,F as m,u as d,s as o,a as h,b as j,c as p,L as x,i as u,d as b,r as f}from"./index-CsgJuBlb.js";const g=({name:t,price:r,qty:n,image:a,onIncrement:c,onDecrement:l,onRemove:i})=>e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 items-start sm:items-center border-b py-2 sm:px-4 justify-between w-3/4 m-auto",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("img",{src:a,alt:t,className:"h-12 w-12 sm:h-20 sm:w-20 object-cover"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm sm:text-lg font-semibold",children:t}),e.jsxs("p",{className:"text-gray-600 text-sm sm:text-base",children:["Price: $",r.toFixed(2)]}),e.jsxs("p",{className:"text-gray-600 text-xs sm:text-sm",children:["Quantity: ",n]})]})]}),e.jsxs("div",{className:"flex items-center gap-3 ml-3 sm:ml-0",children:[e.jsx("button",{onClick:l,className:"bg-red-500 text-white px-2 py-1 rounded",children:"-"}),e.jsx("button",{onClick:c,className:"bg-green-500 text-white px-2 py-1 rounded",children:"+"}),e.jsx("button",{onClick:i,className:"text-red-500",children:e.jsx(m,{})})]})]}),y=()=>{const t=d(s=>s.cart.cart),r=d(o),n=d(h),a=j(),c=s=>{a(u(s))},l=s=>{a(b(s))},i=s=>{a(f(s))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-4 sm:min-h-[75vh] h-screen",children:[e.jsxs("h1",{className:"text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-zinc-500",children:["Your Cart ",e.jsx(p,{})]}),t.length===0?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-red-500 text-2xl text-center mt-10",children:"Your cart is empty."}),e.jsx("div",{className:"flex items-center justify-center h-[40vh]",children:e.jsxs(x,{to:"/",children:[e.jsx("button",{className:"bg-[#317873] hover:bg-[#780000] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1",children:"Browse Products to add"})," "]})})]}):e.jsx("div",{className:"flex flex-col gap-2",children:t.map(s=>e.jsx(g,{id:s.id,name:s.name,price:s.price,qty:s.qty,image:s.image,onIncrement:()=>c(s.id),onDecrement:()=>l(s.id),onRemove:()=>i(s.id)},s.id))}),e.jsxs("div",{className:"mt-4 p-4 border-t border-gray-300",children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Total Items:"}),e.jsx("span",{children:n})]}),e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("span",{className:"font-semibold",children:"Total Price:"}),e.jsxs("span",{children:["$",r.toFixed(2)]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(x,{to:"/checkout",children:e.jsx("button",{className:"bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-6 py-3 rounded",children:"Checkout"})})})]})]})})};export{y as default};
