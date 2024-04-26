// queryUtils.ts
import { CollectionReference, DocumentData } from "firebase-admin/firestore";
import { createEntityFromDoc } from "./CreateEntityFromDoc";

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
  pageSize: number;
  lastDocId?: string | null;
}

export interface PaginatedQueryResponse<T> {
  data: T[];
  lastDocRef: string | null;
}

export async function executeQuery<T extends DocumentData>(
  collectionRef: CollectionReference<T>,
  queryParams: QueryParam[] = [],
  orderByParams: OrderByParam[] = [],
  paginationOptions: PaginationOptions
): Promise<PaginatedQueryResponse<T>> {
  let query: FirebaseFirestore.Query<T> = collectionRef;

  console.log(queryParams);
  queryParams.forEach((param) => {
    query = query.where(param.field, param.operator, param.value);
  });

  if (orderByParams.length === 0) {
    query = query.orderBy("criado_em", "desc");
  } else {
    orderByParams.forEach((param) => {
      query = query.orderBy(param.field, param.direction);
    });
  }

  if (paginationOptions.lastDocId) {
    const lastDocSnapshot = await collectionRef
      .doc(paginationOptions.lastDocId)
      .get();
    if (lastDocSnapshot.exists) {
      query = query.startAfter(lastDocSnapshot);
    }
  }
  query = query.limit(paginationOptions.pageSize);

  const snapshot = await query.get();
  const data = snapshot.docs.map((doc) => createEntityFromDoc(doc)) as T[];
  const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;

  return {
    data,
    lastDocRef: lastDoc ? lastDoc.id : null,
  };
}
