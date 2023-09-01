import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CommentsModel } from "src/comments/comments.model";

@Injectable()
export class CommentsService {

    constructor(@InjectModel(CommentsModel) private com: typeof CommentsModel) {}

    async comm(com:string){
        return this.com.findOne({
            where: {
                productId: com
            }
        })
    }
    async createParentComment(){
        const parent = await this.com.findOne({order:[['id', 'DESC']]});

        return this.com.create({
            id:1,
            parentId:parent.id,
            createdAt: Date.now(),
            text: "MARIA PIRODARASDAJEFWEF AS ASUKA EBANAYAYTEAQYAYAWEGTAWA!!!!",
            productId: '1'
        })
    }
}
