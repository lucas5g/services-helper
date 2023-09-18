import { prisma } from "../utils/prisma";

export class CategoryService {
  
  async findCategoryAndTypes() {
    return await prisma.provider_services.findMany({
      distinct:'type',
      orderBy:{
        category: 'asc'
      },
      select:{
        category: true,
        type:true,
      },
      where:{
        category:{
          gt:0
        }
      }
    })
  }

}
