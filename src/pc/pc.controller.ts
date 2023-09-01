import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PcService } from "./pc.service";
import { SearchDto } from "src/pc/dto/search.dto";

@Controller('computers')
export class PcController {

    constructor(private readonly PcService: PcService) {}

    @Get()
    pagination(@Query() query){
        console.log(query)
        return this.PcService.pagination(query)
    }

    @Get('/bestsellers/:count')
    findBestsellersCount(@Param('count') count:number){
        return this.PcService.findBestsellersCount(count)
    }
    @Get('/bestsellers')
    findBestsellers(@Query() query){
        return this.PcService.findBestsellers(query)
    }
    @Get('/new')
    findNewItems(){
        return this.PcService.findNewItems()
    }
    @Get('/new/:count')
    findNewItemsCount(@Param('count') count:number){
        return this.PcService.findNewItemsCount(count)
    }
    @Get(':id')
    findItemById(@Param('id') id:string){
        return this.PcService.findItemById(id)
    }

    @Post('search')
    findItemByString(@Body() {name,limit}) {
        console.log({name,limit} )
        return this.PcService.findItemByString(name,limit)
    }
    @Post('name')
    findItemByName(@Body() {name}:{name: string}){
        return this.PcService.findItemByName(name)
    }

}
