import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesMonthlyComponent } from './articles-monthly.component';

describe('ArticlesMonthlyComponent', () => {
  let component: ArticlesMonthlyComponent;
  let fixture: ComponentFixture<ArticlesMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
