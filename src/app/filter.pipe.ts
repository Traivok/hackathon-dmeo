import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filters: any): any[] {
        if (!items || !filters) {
            return items;
        }

        return items.filter(item => {
            for (let key in filters) {
                if (filters.hasOwnProperty(key)) {
                    if (item[key] !== filters[key]) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
}
