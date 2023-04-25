import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCategoryComponent } from './eachCategory.component';

describe('EachCatProductsComponent', () => {
  let component: EachCategoryComponent;
  let fixture: ComponentFixture<EachCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
