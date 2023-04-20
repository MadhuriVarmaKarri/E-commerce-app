import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCatProductsComponent } from './each-cat-products.component';

describe('EachCatProductsComponent', () => {
  let component: EachCatProductsComponent;
  let fixture: ComponentFixture<EachCatProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachCatProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachCatProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
