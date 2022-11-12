export  default {

  async seachReasult({commit,state},get){
 try{
   const data =await  fetch(`https://sozluk.gov.tr/gts?ara=${get}`,
     {method:"GET",

     })
   const res=await data.json()
   console.log(res[0])
   commit("data",res[0])

 }catch(hata){
   alert('Galiba hata aldık',hata)
 }
  }



}
