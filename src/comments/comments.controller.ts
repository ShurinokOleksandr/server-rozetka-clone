import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommentsService } from "src/comments/comments.service";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {
    }
    @Get(':com')
    getCommentAndChildren(@Param('com') com){
        return this.commentService.getCommentAndChildren(com)
    }

    @Post('create')
    createParentCom(){
        return this.commentService.createParentComment()
    }

}
