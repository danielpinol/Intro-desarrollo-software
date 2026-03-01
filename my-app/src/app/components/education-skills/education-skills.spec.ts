import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSkills } from './education-skills';

describe('EducationSkills', () => {
  let component: EducationSkills;
  let fixture: ComponentFixture<EducationSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
