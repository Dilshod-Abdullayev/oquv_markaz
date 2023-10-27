import { photo } from './data.js'
import './galery.css'
export default function Galery() {
    return (
        <div className='galery-container'>
            <div className='galery-row'>
        {
          photo.map((item) => (
            <img src={item.imgUrl} />
          ))
        }
      </div>
      <div className='galery-row-reverse'>
        {
          photo.map((item) => (
            <img src={item.imgUrl} />
          ))
        }
      </div>
        </div>
    )
}