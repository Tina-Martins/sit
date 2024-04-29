// queryUtils.ts
import {
  CollectionReference,
  DocumentData,
  Query,
} from "firebase-admin/firestore";
import { createModelFromDoc } from "./CreateModelFromDoc";

export interface QueryParam {
  field: string;
  operator: FirebaseFirestore.WhereFilterOp;
  value: any;
}

export interface OrderByParam {
  field: string;
  direction: "asc" | "desc";
}

export interface PaginationOptions {
  limit: number;
  lastDocId?: string | null;
}

export interface PaginatedQueryResponse<T> {
  data: T[];
  lastDocRef: string | null;
}

export interface QueryOptions {
  filters?: QueryParam[];
  orderBy?: OrderByParam;
  paginationOptions?: PaginationOptions;
}

export const executeListQuery = async <T extends DocumentData>(
  collectionRef: CollectionReference<T>,
  queryOptions?: QueryOptions
): Promise<PaginatedQueryResponse<T>> => {
  let query: Query<T> = collectionRef;

  if (!queryOptions) {
    queryOptions = {
      paginationOptions: {
        limit: 30,
      },
    };
  }

  const { filters, orderBy, paginationOptions } = queryOptions;

  if (filters && filters.length) {
    filters.forEach((filter) => {
      query = query.where(filter.field, filter.operator, filter.value);
    });
  }

  if (orderBy) {
    query = query.orderBy(orderBy.field, orderBy.direction);
  } else {
    query = query.orderBy("criadoEm", "desc");
  }

  try {
    if (paginationOptions && paginationOptions.lastDocId) {
      const lastDocSnapshot = await collectionRef
        .doc(paginationOptions.lastDocId)
        .get();
      if (lastDocSnapshot.exists) {
        query = query.startAfter(lastDocSnapshot);
      }
      query = query.limit(paginationOptions.limit);
    }

    const snapshot = await query.get();

    const data = snapshot.docs.map((docSnapshot) =>
      createModelFromDoc<T>(docSnapshot)
    );
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];

    return {
      data,
      lastDocRef: lastDoc ? lastDoc.id : null,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
