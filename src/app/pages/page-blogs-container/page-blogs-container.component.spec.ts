import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogsContainerComponent } from './page-blogs-container.component';

describe('PageBlogsContainerComponent', () => {
  let component: PageBlogsContainerComponent;
  let fixture: ComponentFixture<PageBlogsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
