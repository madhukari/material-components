import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTreeComponent } from './advanced-tree.component';

describe('AdvancedTreeComponent', () => {
  let component: AdvancedTreeComponent;
  let fixture: ComponentFixture<AdvancedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
