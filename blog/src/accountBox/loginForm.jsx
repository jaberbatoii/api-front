import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import {useForm} from "react-hook-form"
import { AccountContext } from "./accountContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
export  function LoginForm(props) {
  const [auth,setAuth]=useState([])
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useNavigate()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:5000/api/auth/login',data).then((res)=>{
      if(res.status === 200){
       console.log(res.data);
       localStorage.setItem("token",res.data.token)
        navigate('/')
      }
    })
    
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input type="username" placeholder="username"  {...register("username", { required: true, maxLength: 30 })}/>
       
      <Input type="password" placeholder="Password" {...register("password", { required: true, maxLength: 30 })}/>
       
      <Marginer direction="vertical" margin={10} /> 
      <MutedLink href="#">فراموشی رمز ورود؟</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">ورود</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?
        <BoldLink href="#"
         onClick={switchToSignup}
         >
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
