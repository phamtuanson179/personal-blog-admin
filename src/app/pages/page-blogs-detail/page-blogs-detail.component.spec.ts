import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogsDetailComponent } from './page-blogs-detail.component';

describe('PageBlogsDetailComponent', () => {
  let component: PageBlogsDetailComponent;
  let fixture: ComponentFixture<PageBlogsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBlogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
