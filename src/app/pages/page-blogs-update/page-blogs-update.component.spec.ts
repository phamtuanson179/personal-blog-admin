import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogsUpdateComponent } from './page-blogs-update.component';

describe('PageBlogsUpdateComponent', () => {
  let component: PageBlogsUpdateComponent;
  let fixture: ComponentFixture<PageBlogsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogsUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBlogsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
