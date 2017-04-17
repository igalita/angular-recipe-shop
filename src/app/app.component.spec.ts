import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective
      ],
      providers: [
        ShoppingListService
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      compiled = fixture.debugElement.nativeElement;
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Recipe Shop'`, async(() => {
      expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Recipe Shop');
  }));

  it(`should navigate to 'Shopping List Page'`, async(() => {
    compiled.querySelector('a#shopping-list').click();
    fixture.detectChanges();
    expect(compiled.querySelector('button#addIngredient').textContent).toContain('Add');
  }));

  it(`should add a new 'Ingredient'`, async(() => {
    compiled.querySelector('a#shopping-list').click();
    fixture.detectChanges();
    compiled.querySelector('input#name').setAttribute('value', 'Bread');
    fixture.detectChanges();
    compiled.querySelector('input#amount').setAttribute('value', '1');
    fixture.detectChanges();
    compiled.querySelector('button#addIngredient').click();
    fixture.detectChanges();
    expect(compiled.querySelector('ul.list-group').textContent).toContain('Bread (1)');
  }));

});
