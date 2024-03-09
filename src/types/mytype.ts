export interface maintype{ 
 limit?:number
 products:subtype[]
 skip?:number
 total?:number
}

export interface subtype{
 brand:string
 category:string
 description:string
 discountPercentage:number
 id:number
 images:string[]
 price:number
 rating:number
 stock:number
 thumbnail:string
 title:string
 
}
