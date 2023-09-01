import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommentsService } from "src/comments/comments.service";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {
    }
    @Get(':com')
    comm(@Param('com') com){
        return this.commentService.comm(com)
    }

    @Post('create')
    createParentCom(){
        return this.commentService.createParentComment()
    }
}
