import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsContainerComponent } from './blogs-container.component';

describe('BlogsContainerComponent', () => {
  let component: BlogsContainerComponent;
  let fixture: ComponentFixture<BlogsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
