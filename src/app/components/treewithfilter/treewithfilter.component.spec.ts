import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreewithfilterComponent } from './treewithfilter.component';

describe('TreewithfilterComponent', () => {
  let component: TreewithfilterComponent;
  let fixture: ComponentFixture<TreewithfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreewithfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreewithfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
