import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesDateComponent } from './articles-date.component';

describe('ArticlesDateComponent', () => {
  let component: ArticlesDateComponent;
  let fixture: ComponentFixture<ArticlesDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
