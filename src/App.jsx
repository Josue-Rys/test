import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './api/product'
import Card from './components/Card'
// import { useData } from './context/infoProduct'

function App() {

  // const { getInfo, data } = useData()

  const [product, setProduct] = useState(false)
  const [loading, setloading] = useState(true)

  // console.log(data)
  // const info = async () => await getInfo()

  const fetchDat = async () => {
    const data = await getData()
    if (data) setProduct(data)
  }

  useEffect(() => {
    fetchDat()
  }, [])

  // console.log(info)

  return (
    <div className='row' >
      {
        product 
        ? product.map((item) => <Card item={item} key={item?.id} />)
        : <h5>cargando</h5>
      }
    </div >
  )
}

export default App
