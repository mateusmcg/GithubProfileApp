import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result'
import { RepositoriesComponent } from './repositories/repositories';
import { IonicModule } from 'ionic-angular';


@NgModule({
    declarations: [
        SearchResultComponent,
        RepositoriesComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        SearchResultComponent,
        RepositoriesComponent
    ]
})
export class ComponentsModule {

}