import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriceController } from './enterprice.controller';

describe('EnterpriceController', () => {
  let controller: EnterpriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriceController],
    }).compile();

    controller = module.get<EnterpriceController>(EnterpriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
