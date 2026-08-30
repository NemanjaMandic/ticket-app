import { User as AuthUser } from "lucia";

type Entity = {
  userId: string;
};
export const isOwner = (
  authUser: AuthUser | null | undefined,
  entity: Entity | null | undefined,
) => authUser && entity && authUser.id === entity.userId;
