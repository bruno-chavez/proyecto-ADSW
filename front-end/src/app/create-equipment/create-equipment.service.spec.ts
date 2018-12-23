import { TestBed } from '@angular/core/testing';

import { CreateEquipmentService } from './create-equipment.service';

describe('CreateEquipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateEquipmentService = TestBed.get(CreateEquipmentService);
    expect(service).toBeTruthy();
  });
});
