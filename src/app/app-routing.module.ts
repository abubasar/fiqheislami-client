
import { AskedFatawaComponent } from './components/asked-fatawa/asked-fatawa.component';
import { ListFatawaComponent } from './components/list-fatawa/list-fatawa.component';
import { ListFatawaAnswerComponent } from './components/list-fatawa-answer/list-fatawa-answer.component';
import { AddFatawaAnswerComponent } from './components/add-fatawa-answer/add-fatawa-answer.component';
import { AllArticleComponent } from './components/all-article/all-article.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';
import { AddAuthorComponent } from './components/author/add-author/add-author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ContactComponent } from './components/contact/contact.component';


import { AuthGuard } from './auth.guard';
import { AskFatawaComponent } from "./components/ask-fatawa/ask-fatawa.component";
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { EditTagComponent } from './components/tag/edit-tag/edit-tag.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { EditFatawaAnswerComponent } from './components/edit-fatawa-answer/edit-fatawa-answer.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { NgxEditorComponent } from './components/ngx-editor/ngx-editor.component';




const routes: Routes = [
  {
  path:'',
  redirectTo:'/list',
  pathMatch:'full'
    },
  {path:'list',component:ListArticleComponent},
  {path:'add',component:AddArticleComponent,canActivate:[AuthGuard]},
  {path:'detail/:id',component:ArticleDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'edit-article/:id',component:EditArticleComponent,canActivate:[AuthGuard]},
  {path:'add-tag',component:AddTagComponent,canActivate:[AuthGuard]},
  {path:'edit-tag/:id',component:EditTagComponent,canActivate:[AuthGuard]},
  {path:'tag-list',component:TagListComponent,canActivate:[AuthGuard]},
  {path:'add-author',component:AddAuthorComponent,canActivate:[AuthGuard]},
  {path:'edit-author/:id',component:EditAuthorComponent,canActivate:[AuthGuard]},
  {path:'author-list',component:AuthorListComponent,canActivate:[AuthGuard]},
  {path:'add-category',component:AddCategoryComponent,canActivate:[AuthGuard]},
  {path:'edit-category/:id',component:EditCategoryComponent,canActivate:[AuthGuard]},
  {path:'category-list',component:CategoryListComponent,canActivate:[AuthGuard]},
  {path:'article',component:AllArticleComponent,canActivate:[AuthGuard]},
  {path:'fatawa',component:AskFatawaComponent},
  {path:'list-fatawa',component:ListFatawaComponent},
  {path:'add-fatawa-answer',component:AddFatawaAnswerComponent,canActivate:[AuthGuard]},
  {path:'edit-fatawa-answer/:id',component:EditFatawaAnswerComponent,canActivate:[AuthGuard]},
  {path:'list-fatawa-answer',component:ListFatawaAnswerComponent,canActivate:[AuthGuard]},
  {path:'asked-fatawa',component:AskedFatawaComponent,canActivate:[AuthGuard]},
  {path:'broadcast',component:BroadcastComponent},
  {path:'ngx',component:NgxEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
