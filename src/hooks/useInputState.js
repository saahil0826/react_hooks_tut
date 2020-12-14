import { useState } from "react";

function useInputState(initialVal='')  {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

 //  function handleChange(e) {
 //   setValue(e.target.value);
 // };

  // handleChange(event){
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

export default useInputState
