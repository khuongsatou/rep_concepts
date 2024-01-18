// BaseRepository.ts
import {
  Repository,
  EntityTarget,
  EntityManager,
  FindManyOptions
} from "typeorm";
// Nó sử dụng TypeORM's Repository để thực hiện các thao tác cơ bản.
// Ít mở rộng hơn
export interface IBaseRepository<T> {
  getEntity(): EntityTarget<T>;
  findOne(id: number): Promise<T | undefined>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  create(entity: T): T;
  save(entity: T): Promise<T>;
  remove(id: number): Promise<void>;
}

export class BaseRepository<T> implements IBaseRepository<T> {
  private repository: Repository<T>;

  constructor(entity: EntityTarget<T>, entityManager: EntityManager) {
    this.repository = entityManager.getRepository(entity);
  }
  getEntity(): EntityTarget<T> {
    return this.repository.target as EntityTarget<T>;
  }

  findOne(id: number): Promise<T | undefined> {
    return this.repository.findOneBy({ id: id } as any);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  create(entity: T): T {
    return this.repository.create(entity);
  }

  save(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
