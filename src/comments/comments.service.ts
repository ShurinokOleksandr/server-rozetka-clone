import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CommentsModel } from "src/comments/comments.model";

@Injectable()
export class CommentsService {

    constructor(@InjectModel(CommentsModel) private com: typeof CommentsModel) {}

    async  getCommentAndChildren(commentId) {
        try {
            const comment = await CommentsModel.findAll({
                where: { postId:commentId, parentId: null },
                include: {as: 'children', model: CommentsModel}
            });
            console.log("null>",comment)
            return comment; // а где показывает

        }catch (e) {
            console.log(e)
        }


    }
    async createParentComment(){
        const parent = await this.com.findOne({order:[['id', 'DESC']]});

        return this.com.create({
            id:12,
            parentId:2,
            createdAt: Date.now(),
            text: "MARIA PIRODARASDAJEFWEF AS ASUKA EBANAYAYTEAQYAYAWEGTAWA!!!!",
            productId: '1'
        })
    }
}
