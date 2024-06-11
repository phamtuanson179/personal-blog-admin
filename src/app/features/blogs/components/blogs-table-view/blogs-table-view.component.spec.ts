import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTableViewComponent } from './blogs-table-view.component';

describe('BlogsTableViewComponent', () => {
  let component: BlogsTableViewComponent;
  let fixture: ComponentFixture<BlogsTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsTableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
