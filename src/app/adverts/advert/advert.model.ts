export class AdvertModel {
    public id: number;
    public head: string;
    public content: string;
    public date: Date;
    public imageUrl: string;
    public status: AdvertStatus;
    public price: number;
    public giver: any;


    constructor(id: number, head: string, content: string, date: Date,
                imageUrl: string, status: AdvertStatus, price: number, giver: any) {
        if (id) {
            this.id = id;
        }

        this.head = head;
        this.content = content;
        this.date = date;
        this.imageUrl = imageUrl;
        this.status = status;
        this.price = price;
        this.giver = giver;
    }
}

export enum AdvertStatus {
    FREE, BOOKED, ORDERED
}

