import { AxiosError } from "axios";

const errHandler = (e : unknown) => {
  const err = e as AxiosError;
  if (err.response && 'data' in err.response){
    const res = err.response.data as ResponseDataType;
    alert(res.message);    
    return;
  }
  alert(e);
  return;  
}

// PARAM type
type ResponseDataType = {
  message: string
};

export default errHandler;