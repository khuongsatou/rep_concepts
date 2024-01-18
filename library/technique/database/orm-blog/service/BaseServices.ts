//Cấu trúc này giúp tái sử dụng code và giảm lặp lại, vì BaseService tái sử dụng logic từ BaseRepository. Nếu bạn cần thêm các phương thức hoặc logic đặc biệt trong BaseService, bạn có thể mở rộng nó mà không làm thay đổi BaseRepository.
import { EntityManager, EntityTarget, Repository } from "typeorm";
import { IBaseRepository, BaseRepository } from "../reponsitory/BaseRepository";
//  Nó sử dụng TypeORM's Services để thực hiện các thao tác cơ bản và có thể mở rộng
export interface IBaseService<T> {
  findOne(id: number): Promise<T | undefined>;
  findAll(options?: any): Promise<T[]>;
  create(entity: T): T;
  save(entity: T): Promise<T>;
  remove(id: number): Promise<void>;
}
// Lưu ý rằng BaseService sử dụng Generic để làm cho nó có thể tái sử dụng cho bất kỳ entity cụ thể nào mà bạn muốn thao tác.
// Lưu ý rằng BaseService sử dụng một instance của BaseRepository để thực hiện các thao tác cơ bản. Khi bạn tạo một instance của BaseService, bạn cần chuyển vào một entity target và một instance của EntityManager, giống như khi bạn tạo một instance của BaseRepository.


export class BaseService<T> implements IBaseService<T> {
  private repository: IBaseRepository<T>;

  constructor(entity: EntityTarget<T>, entityManager: EntityManager) {
    this.repository = new BaseRepository(entity, entityManager);
  }

  async findOne(id: number): Promise<T | undefined> {
    return this.repository.findOne(id);
  }

  async findAll(options?: any): Promise<T[]> {
    return this.repository.findAll(options);
  }

  create(entity: T): T {
    return this.repository.create(entity);
  }

  async save(entity: T): Promise<T> {
    return this.repository.save(entity);
  }



  async remove(id: number): Promise<void> {
    await this.repository.remove(id);
  }
}


