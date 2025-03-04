/* eslint-disable @typescript-eslint/no-explicit-any */
import { partnerData } from '../data'

export default function Partner() {
  return (
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
            {partnerData.map((item:any,index:number)=>{
                return(
                    <div className="mx-auto py-4" key={index}>
                        <img src={item} className="h-6" alt=""/>
                    </div>
                )
            })}
        </div>
  )
}
