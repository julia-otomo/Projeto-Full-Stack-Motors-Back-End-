import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { SalesAd } from "./salesAd.entity";
import { User } from "./users.entity";

@Entity("salesComments")
class SaleComments extends BaseEntity {
    @Column({ type: "text" })
    comment: string;

    @ManyToOne(() => SalesAd, (salesAd) => salesAd.comments)
    salesAd: SalesAd;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
}

export default SaleComments;