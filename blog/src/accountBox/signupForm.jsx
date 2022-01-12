import React, { useContext } from "react";
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
import axios from 'axios';
import {useNavigate } from 'react-router-dom'
export function SignupForm(props) {
  const navigate = useNavigate(); 


  const { switchToSignin } = useContext(AccountContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
   
   
       axios.post('http://localhost:5000/api/auth/register',data).then((res)=>{
         if(res.status === 200){
           console.log(res);
           localStorage.setItem("token",res.data.token)

          }
          navigate('/')
       })
    
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="UserName" {...register("username", { required: true, maxLength: 30 })}/>
        <Input type="email" placeholder="Email"  {...register("email", {
          required: true,
          maxLength: 30,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
        })} />
        <Input type="password" placeholder="Password" {...register("password", { required: true, maxLength: 30 })}/>
        <Input type="password" placeholder="Confirm Password" {...register("password", { required: true, maxLength: 30 })}/>

      <SubmitButton type="submit">Signup</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#"
         onClick={switchToSignin}
         >
          Signin
        </BoldLink>
      </MutedLink>
       
    </BoxContainer>
  );
}
