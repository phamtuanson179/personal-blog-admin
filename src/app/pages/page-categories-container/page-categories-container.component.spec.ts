import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageCategoriesContainerComponent } from "./page-categories-container.component";

describe("PageCategoriesContainerComponent", () => {
  let component: PageCategoriesContainerComponent;
  let fixture: ComponentFixture<PageCategoriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCategoriesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
