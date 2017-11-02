import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from './iProject';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: IProject[], filterBy: string): IProject[] {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    var updatedList: IProject[];
    if(filterBy) {
      updatedList = value.filter( function(project: IProject){
        
        let filterProperties = filterBy.split(";");
        
        // Check if property matches the search (single or multiple seperated by ; )
        let isMatch = false;
        for(let i = 0; i < filterProperties.length; i++) {
          for(let j = 0; j < project.Properties.length; j++) {
            if( project.Properties[j].Name.toLocaleLowerCase().indexOf(filterProperties[i].trim()) != -1 ) { isMatch = true; break; }
            else { isMatch = false; }
          }
          if( !isMatch ) { break; }
        }
        if( isMatch ) { return true; }
        
        // Check if account name matches the search
        return project.AccountName.toLocaleLowerCase().indexOf(filterProperties[0]) != -1 ? true : false ;
      });
    }
    else {
      return value;
    } 

    return updatedList;
  }

}
