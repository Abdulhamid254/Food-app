//required parameter defined using an exclamation mark i.e id!
//optional parameter defined using question mark ? i.e tags?

export class Food{
  id!:string;
  name!:string;
  price!:number;
  tags?:string[];
  favorite!:boolean;
  stars!:number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}


