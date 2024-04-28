import {
  DocumentSnapshot,
  QuerySnapshot,
  Timestamp,
} from "firebase-admin/firestore";

export const createModelFromDoc = <T>(
  snapshot: DocumentSnapshot,
  subcollectionSnapshots?: Record<string, QuerySnapshot>
): T => {
  const doc = snapshot.data();
  if (!doc) throw new Error("Document data undefined.");

  const result: any = { id: snapshot.id };
  for (const key in doc) {
    const typedKey = key as keyof T;
    if (doc[key] instanceof Timestamp) {
      result[typedKey] = doc[key].toDate();
    } else {
      result[typedKey] = doc[key];
    }
  }

  if (subcollectionSnapshots) {
    for (const [collectionName, querySnapshot] of Object.entries(
      subcollectionSnapshots
    )) {
      result[collectionName] = querySnapshot.docs.map((doc) =>
        createModelFromDoc<T>(doc)
      );
    }
  }

  return result as T;
};
