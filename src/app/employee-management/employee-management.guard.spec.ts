import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeManagementGuard } from './employee-management.guard';

describe('EmployeeManagementGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeManagementGuard]
    });
  });

  it('should ...', inject([EmployeeManagementGuard], (guard: EmployeeManagementGuard) => {
    expect(guard).toBeTruthy();
  }));
});
