import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogsCreateComponent } from './page-blogs-create.component';

describe('PageBlogsCreateComponent', () => {
  let component: PageBlogsCreateComponent;
  let fixture: ComponentFixture<PageBlogsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBlogsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
