// import { Injectable } from "@nestjs/common";
// import { ShoppingCartModel } from "./shopping-cart.model";
// import { InjectModel } from "@nestjs/sequelize";
// import { UsersService } from "../users/users.service";
// import { PcService } from "../pc/pc.service";
// import { AddToCartDto } from "./dto/add-to-cart.dto";
//
// @Injectable()
// export class ShoppingCartService {
//
//     constructor(
//         @InjectModel(ShoppingCartModel)
//         private shoppingCart: typeof ShoppingCartModel,
//         private readonly usersService:  UsersService,
//         private readonly pc:  PcService,
//     ) {}
//
//     async findAllItemsShoppingCart(userId:number | string): Promise<ShoppingCartModel[]> {
//         return this.shoppingCart.findAll({ where: { userId, } })
//     }
//
//     async addShoppingCartItem(AddToCartDto:AddToCartDto){
//         const cart = new ShoppingCartModel()
//         const user = await this.usersService.findOne({
//             where: {
//                 username: AddToCartDto.username
//             }
//         });
//         const part = await this.pc.findItemById(AddToCartDto.partId)
//
//         cart.userId = user.id
//         cart.partId = part.id
//         cart.pc_manufacturer = part.pc_manufactures
//         cart.parts_manufacturer = part.parts_manufactures
//         cart.price = part.price
//         cart.in_stock = part.in_stock
//         cart.image = JSON.parse(part.images)[0]
//         cart.name = part.name
//         cart.total_price = part.price
//
//         return cart.save()
//     }
//     async updateCount(count: number,partId: number | string): Promise<{count:number}>{
//         await this.shoppingCart.update({count},{where:{partId}})
//
//         const part = await this.shoppingCart.findOne({where:{partId}})
//         return {
//             count:part.count,
//         }
//     }
//     async updatePrice(total_price: number,partId: number | string): Promise<{total_price:number}>{
//         await this.shoppingCart.update({total_price},{where:{partId}})
//
//         const part = await this.shoppingCart.findOne({where:{partId}})
//         return {
//             total_price:part.total_price,
//         }
//     }
//
//     async removeItem(partId: number | string): Promise<void>{
//
//         const part = await this.shoppingCart.findOne({where:{partId}})
//
//         await part.destroy()
//     }
//
//     async removeAllItem(partId: number | string): Promise<void>{
//         await this.shoppingCart.destroy({where:{partId}})
//     }
// }
