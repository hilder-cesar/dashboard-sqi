import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      { path: 'qualitativo', loadChildren: () => import('./qualitative/qualitative.module').then(m => m.QualitativeModule) },
      { path: 'publico', loadChildren: () => import('./public-analysis/public-analysis.module').then(m => m.PublicAnalysisModule) },
      { path: 'perfil', loadChildren: () => import('./public-profile/public-profile.module').then(m => m.PublicProfileModule) },
      { path: 'wordcloud', loadChildren: () => import('./wordcloud/wordcloud.module').then(m => m.WordcloudModule) },
      { path: 'mencoes', loadChildren: () => import('./mentions/mentions.module').then(m => m.MentionsModule) },
      { path: 'dados-proprietarios', loadChildren: () => import('./property-data/property-data.module').then(m => m.PropertyDataModule) },
      { path: 'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule) },
      { path: '**', redirectTo: 'qualitativo', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
