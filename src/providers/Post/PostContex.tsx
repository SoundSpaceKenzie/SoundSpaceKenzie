import {  createContext, useEffect, useState } from "react";
import Api from "../../services/Api";
import { IData, IPost, IPostContext, IPostProps, IPostRegisters } from "./@types";




export const PostContext = createContext({} as IPostContext)




export const PostProvider = ({children}: IPostProps ) => {
  const token = localStorage.getItem("@SoundSpace:Token");
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  } 
  
  const [posts, setPosts ] = useState <IPost[]>  ([])
  
  const GetPosts = async () => {
    try{
      const {data}:IData = await Api.get("/posts",config  );
      setPosts(data)
      
    } catch(error){
      console.log(error)
    }
    
  }
  
  const CreatePost =  async (data: IPostRegisters) => {
    try {
     const response = await Api.post("/posts", data, config);
     console.log(response)
     GetPosts()
   } catch (error) {
     console.log(error)
   }
  }
   useEffect(() => {
    GetPosts();
  }, [])
  
  return(
      <PostContext.Provider value={{posts,CreatePost }}>
        {children}
      </PostContext.Provider>   
  )
}