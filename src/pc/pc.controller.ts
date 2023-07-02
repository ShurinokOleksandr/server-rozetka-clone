import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PcService } from "./pc.service";

@Controller('computers')
export class PcController {

    constructor(private readonly PcService: PcService) {}

    @Get()
    pagination(@Query() query){
        return this.PcService.pagination(query)
    }

    @Get('/bestsellers')
    findBestsellers(){
        return this.PcService.findBestsellers()
    }
    @Get('/new')
    findNewItems(){
        return this.PcService.findNewItems()
    }

    @Get(':id')
    findItemById(@Param('id') id:string){
        return this.PcService.findItemById(id)
    }

    @Post('search')
    findItemByString(@Body() {search}:{search: string}){
        return this.PcService.findItemByString(search)
    }

    @Post('name')
    findItemByName(@Body() {name}:{name: string}){
        return this.PcService.findItemByName(name)
    }
}
