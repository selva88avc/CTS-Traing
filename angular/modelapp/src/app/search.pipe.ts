import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(itemsarr : any, searchtext : any ): any {

 
    if(itemsarr==null) 
      return null;
    if (searchtext==false)
    return itemsarr;

    return itemsarr.filter( (itemobj:any)=> {

     return    itemobj.itemName.toLowerCase().includes(searchtext)

     })
    
  }

}
