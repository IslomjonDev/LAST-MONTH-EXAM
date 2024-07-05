import React from 'react'

const CreateProduct = () => {
  return (
    <>
    <div className="create__product">
      <h2>Create product</h2>
      <form action="">
         <span>
            <label htmlFor="">Title</label>
            <input type="text" />
         </span>
         <span>
            <label htmlFor="">price in $</label>
            <input type="number" />
         </span>
         <span>
            <label htmlFor="">image-url</label>
            <input type="text" />
         </span>
         <span>
            <label htmlFor="">old-price in $</label>
            <input type="number" />
         </span>
         <span>
            <label htmlFor="">category</label>
            <select name="" id="">
                <option value="">Tanlang</option>
                <option value="">xiomi</option>
                <option value="">iphone</option>
                <option value="">laptop</option>
                <option value="">watch</option>
                <option value="">samsung</option>
            </select>
         </span>
         <span>
            <label htmlFor="">desc</label>
            <textarea type="text" />
         </span>
         <button>Create</button>
      </form>
    </div>
    </>
  )
}

export default CreateProduct