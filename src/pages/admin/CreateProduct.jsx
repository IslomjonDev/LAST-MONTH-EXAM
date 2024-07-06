import React from 'react'
import  { useGetInputValue } from '../../hooks/GetInpuValue'
import { useCreateProductMutation, useGetCategorysQuery } from '../../context/api/productApi'
import './Admin.scss'

let initialState = {
    title: '',
    price: '',
    image: '',
    oldPrice: '',
    category: ''
}


const CreateProduct = () => {

  const {handleChange , formData , setFormData } =  useGetInputValue(initialState)

  const {data} = useGetCategorysQuery()
  console.log(data);

  const [createProduct] = useCreateProductMutation()
  

  let category__options = data?.map( el => (
   <option value={el.category}>{el.category}</option>
  ) )


   const handleCreateProduct = e => {

      e.preventDefault()
      createProduct(formData);

   }

  return (
    <>
    <div className="create__product">
      <h2>Create product</h2>
      <form onSubmit={handleCreateProduct} action="">
         <span>
            <label htmlFor="">Title</label>
            <input value={formData.title} onChange={handleChange} name='title' type="text" />
         </span>
         <span>
            <label htmlFor="">price in $</label>
            <input value={formData.price} onChange={handleChange} name='price' type="number" />
         </span>
         <span>
            <label htmlFor="">image-url</label>
            <input value={formData.image} onChange={handleChange} name='image' type="text" />
         </span>
         <span>
            <label htmlFor="">old-price in $</label>
            <input value={formData.oldPrice} onChange={handleChange} name='oldPrice' type="number" />
         </span>
         <span>
            <label htmlFor="">category</label>
            <select value={formData.category} onChange={handleChange}  name="category" id="">
               <option value="all">Tanlang</option>
                {category__options}
            </select>
         </span>
         <span>
            <label  htmlFor="">desc</label>
            <textarea  value={formData.desc} onChange={handleChange} name='desc' type="text" />
         </span>
         <button>Create</button>
      </form>
    </div>
    </>
  )
}

export default CreateProduct