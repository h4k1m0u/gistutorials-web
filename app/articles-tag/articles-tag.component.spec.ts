import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTagComponent } from './articles-tag.component';

describe('ArticlesTagComponent', () => {
  let component: ArticlesTagComponent;
  let fixture: ComponentFixture<ArticlesTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
