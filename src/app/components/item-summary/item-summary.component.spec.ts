/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemSummaryComponent } from './item-summary.component';

describe('ItemSummaryComponent', () => {
  let component: ItemSummaryComponent;
  let fixture: ComponentFixture<ItemSummaryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ItemSummaryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title if provided', () => {
    component.item = {
      title: 'My Title',
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__title');
    expect(element).not.toBeNull();
  });

  it('should not display title if not provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__title');
    expect(element).toBeNull();
  });

  it('should display description if provided', () => {
    component.item = {
      title: null,
      description: 'My description',
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector(
      '.list-item__description'
    );
    expect(element).not.toBeNull();
  });

  it('should not display description if not provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector(
      '.list-item__description'
    );
    expect(element).toBeNull();
  });

  it('should display email if provided', () => {
    component.item = {
      title: null,
      description: null,
      email: 'a@a.com',
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__email');
    expect(element).not.toBeNull();
  });

  it('should not display email if not provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__email');
    expect(element).toBeNull();
  });

  it('should display price if provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: 123,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__price');
    expect(element).not.toBeNull();
  });

  it('should not display price if not provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__price');
    expect(element).toBeNull();
  });

  it('should display image if provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: 'https://google.com/logo.png',
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__image');
    expect(element).not.toBeNull();
  });

  it('should not display image if not provided', () => {
    component.item = {
      title: null,
      description: null,
      email: null,
      price: null,
      image: null,
    };
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.list-item__image');
    expect(element).toBeNull();
  });
});
