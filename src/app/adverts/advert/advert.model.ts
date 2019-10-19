export class AdvertModel {
  public _id: number;
  public head: string;
  public content: string;
  public date: Date;
  public imageUrl: string;
  public ordered: boolean;


  constructor(id: number, head: string, content: string, date: Date, imageUrl: string, ordered: boolean) {
    if (id) {
      this._id = id;
    }

    this.head = head;
    this.content = content;
    this.date = date;
    this.imageUrl = imageUrl;
    this.ordered = ordered;
  }
}
