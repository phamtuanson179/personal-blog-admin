import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersContainerComponent } from './page-users-container.component';

describe('PageUsersContainerComponent', () => {
  let component: PageUsersContainerComponent;
  let fixture: ComponentFixture<PageUsersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUsersContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
