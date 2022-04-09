import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Card } from '../../components'
import "../../assets/css/index.css";
import { COLORS, FONTS, SIZES } from "../../utils";
import { OuterCss } from './create';
// Funtional Arrow component
export const PortofolioIndex = () => {
  const styles = style()
  const [total, setTotal] = useState(0);

  const getCount = () =>{
    console.log("tes")
    setTotal(total+1)
  }

  return (
    <div>
      <p className={styles.portofolio}>Jumlah Counting : {total}</p>
      <p style={{color:'red'}}>contoh inline style</p>
      <p className='ss'>contoh style classname</p>
      <Card title="title" getCount={getCount}/>
      <Card title="1" getCount={getCount}/>
      <Card title="2" getCount={getCount}/>
      <Card title="3" getCount={getCount}/>
      <OuterCss/>
    </div>
  )
}

const style = createUseStyles({
  portofolio:{
    color: COLORS.lightGray4
  }
})
// Functional Component
// export default function index() {
//   return (
//     <div>index</div>
//   )
// }



// Class Component
// export default class index extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }
