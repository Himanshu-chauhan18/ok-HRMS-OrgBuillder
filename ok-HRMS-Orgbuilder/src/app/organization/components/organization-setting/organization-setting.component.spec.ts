import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSettingComponent } from './organization-setting.component';

describe('OrganizationSettingComponent', () => {
  let component: OrganizationSettingComponent;
  let fixture: ComponentFixture<OrganizationSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
