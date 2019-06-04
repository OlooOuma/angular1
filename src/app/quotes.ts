export class Quotes {
  showDescription: boolean;
// tslint:disable-next-line: max-line-length
  constructor(public id: number, public name: string, public author: string, public quotes: string, public completeDate: Date, public downvote: number, public upvote: number) {
    this.showDescription = false;
  }
}
