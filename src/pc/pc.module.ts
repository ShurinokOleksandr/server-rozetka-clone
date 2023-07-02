import { Module } from '@nestjs/common';
import { PcController } from './pc.controller';
import { PcService } from './pc.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { PcModel } from "./pc.model";

@Module({
    imports: [SequelizeModule.forFeature([PcModel])],
    controllers: [PcController],
    providers: [PcService],
    exports:[PcService],
})
export class PcModule {}
