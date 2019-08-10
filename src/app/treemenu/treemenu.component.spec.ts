import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemenuComponent } from './treemenu.component';

describe('TreemenuComponent', () => {
  let component: TreemenuComponent;
  let fixture: ComponentFixture<TreemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
