import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "education", component: EducationComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "hobbies", component: HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterOutlet { }
