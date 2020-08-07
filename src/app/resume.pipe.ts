import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, args?: any,args2?:any): any {
    if (!value) return value;
    return value.substr(args,args2)+"...";
  }

}
