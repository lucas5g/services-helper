import { prisma } from "../utils/prisma";

export class ServiceService{

  async findAll(){
    return await prisma.provider_type.findMany({
      select:{
        id: true,
        name: true, 
        category_id:true
      },
      where:{
        category_id:{
          not: null
        }
      }
    })
  }
  
  async update(id:number|string, data:{category: number}){

    return await prisma.provider_type.update({
      where:{
        id: Number(id)
      },
      data:{
        category_id: data.category
      }
    })

  } 
}