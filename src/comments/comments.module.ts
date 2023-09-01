import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CommentsModel } from "src/comments/comments.model";
import { CommentsController } from "src/comments/comments.controller";
import { CommentsService } from "src/comments/comments.service";

@Module({
    imports: [SequelizeModule.forFeature([CommentsModel])],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [CommentsService],
})
export class CommentsModule {}
