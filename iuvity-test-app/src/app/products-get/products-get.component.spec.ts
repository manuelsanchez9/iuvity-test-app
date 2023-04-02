import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGetComponent } from './products-get.component';

describe('ProductsGetComponent', () => {
  let component: ProductsGetComponent;
  let fixture: ComponentFixture<ProductsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
