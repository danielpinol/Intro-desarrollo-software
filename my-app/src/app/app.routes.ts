import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { EducationSkills } from './components/education-skills/education-skills';
import { Experience } from './components/experience/experience';
import { Jobs } from './components/experience/jobs/jobs';
import { Studies } from './components/experience/studies/studies';
import { Projects } from './components/projects/projects';
import { Football } from './components/football/football';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'skills', component: EducationSkills },
  {
    path: 'experience',
    component: Experience,
    children: [
      { path: 'jobs', component: Jobs },
      { path: 'studies', component: Studies },
    ]
  },
  { path: 'projects', component: Projects },
  { path: 'football', component: Football },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];