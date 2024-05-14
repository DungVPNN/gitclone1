import React, { useState } from 'react'
export default function Function() {
    const [fullName,setFullName]=useState<string>("hoa");
    const [age,setAge]=useState<number>(13);
    const handleChanges=()=>{
        setAge(14);
        setFullName("Hong");
    }
  return (
    <div>Function
        <p>{fullName} nam nay {age}tuoi</p>
        <button onClick={handleChanges}>handleChanges</button>
    </div>
  )
}
