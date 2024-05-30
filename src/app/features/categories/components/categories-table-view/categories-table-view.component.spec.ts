import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTableViewComponent } from './categories-table-view.component';

describe('CategoriesTableViewComponent', () => {
  let component: CategoriesTableViewComponent;
  let fixture: ComponentFixture<CategoriesTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
