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

  const result: any = {};
  for (const key in doc) {
    if (doc.hasOwnProperty(key)) {
      const typedKey = key as keyof T;
      if (doc[key] instanceof Timestamp) {
        result[typedKey] = doc[key].toDate();
      } else {
        result[typedKey] = doc[key];
      }
      result.id = snapshot.id;
    }
  }

  if (subcollectionSnapshots) {
    for (const [collectionName, querySnapshot] of Object.entries(
      subcollectionSnapshots
    )) {
      result[collectionName] = querySnapshot.docs.map((doc) =>
        createModelFromDoc<any>(doc)
      );
    }
  }

  return result as T;
};
