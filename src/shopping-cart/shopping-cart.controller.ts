import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ShoppingCartService } from "./shopping-cart.service";
import { AddToCartDto } from "./dto/add-to-cart.dto";

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCardService: ShoppingCartService) {}


    @Get(':id')
    findAllItemsShoppingCart(@Param('id') userId:string){
        return this.shoppingCardService.findAllItemsShoppingCart(userId)
    }

    @Post('/add')
    addShoppingCartItem(@Body() AddToCartDto:AddToCartDto){
        return this.shoppingCardService.addShoppingCartItem(AddToCartDto)
    }

    @Patch('/count/:id')
    updateCount(
        @Body() { count }:{count:number},
        @Param('id') partId:string
    ){
        return this.shoppingCardService.updateCount(count,partId)
    }
    @Patch('/total-price/:id')
    updatePrice(
        @Body() { total_price }:{total_price:number},
        @Param('id') partId:string
    ){
        return this.shoppingCardService.updatePrice(total_price,partId)
    }
    @Delete('/one/:id')
    removeItem(
        @Param('id') partId:string
    ){
        return this.shoppingCardService.removeItem(partId)
    }

    @Delete('/all/:id')
    removeAllItem(
        @Param('id') userId:string
    ){
        return this.shoppingCardService.removeAllItem(userId)
    }
}
