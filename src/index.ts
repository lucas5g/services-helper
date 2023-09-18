import Fastify from 'fastify'
const app = Fastify({
  // logger:true
})

import { CategoryService } from "./services/CategoryService";
import { ServiceService } from "./services/ServiceService";

const category = new CategoryService()
const service = new ServiceService()

app.get('/', () => {
  return {message: 'Suporte na aplicação de serviços'}
})

app.get('/services', () => {
  return service.findAll()
})

app.get('/services/update-category-id', async () => {

  const categories = await category.findCategoryAndTypes()

  categories.forEach(async(category) => {
    await service.update(category.type, category )
  })

  return {message: 'Atualizado todas os servicos com category_id'}


})

app.get('/provider-services-categories', () => {
  return category.findCategoryAndTypes()
})



app.listen({port: 3000}, () => {console.log('Server Run http://localhost:3000')})