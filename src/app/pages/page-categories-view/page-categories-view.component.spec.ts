import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoriesViewComponent } from './page-categories-view.component';

describe('PageCategoriesViewComponent', () => {
  let component: PageCategoriesViewComponent;
  let fixture: ComponentFixture<PageCategoriesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCategoriesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCategoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
