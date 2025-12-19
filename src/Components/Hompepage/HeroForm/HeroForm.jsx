import React, { useState } from 'react'
import Login from './Login'
import Otp from './Otp'
import Thank_You from './Thank_You'

// export default function HeroForm() {
//   const [step, setStep] = useState(0)
//   return (
//     <div className='text-black'>
//       {step == 0 && <div>
//         Form <br />
//         <button className='' onClick={() => { setStep(1) }}>
//           Next</button>
//       </div>}
//       {step == 1 && <div>
//         OTP <br />
//         <button className='' onClick={() => { setStep(2) }}>
//           Next
//         </button>
//       </div>}
//       {step == 2 && <div>
//         Thanks

//       </div>}
//     </div>
//   )
// }
export default function HeroForm() {
  const [step, setStep] = useState(0)
  console.log(step)
  return (
    <div className='text-black'>
      {step == 0 &&
       <Login step={step} setStep={setStep} />}
      {step == 1 && 
      <Otp  step={step} setStep={setStep}/>}
      {step == 2 &&
       <Thank_You/>}
    </div>
  )
}

