import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly displayName?: string;
  readonly email?: string;
  readonly isAdmin: boolean;
  readonly hours?: number;
  readonly bookings?: (string | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}