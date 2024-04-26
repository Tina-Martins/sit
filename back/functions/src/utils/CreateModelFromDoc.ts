import { DocumentSnapshot, Timestamp } from "firebase-admin/firestore";

export const createModelFromDoc = <T>(
  snapshot: DocumentSnapshot,
  subcollectionSnapshots?: { [subcollectionName: string]: DocumentSnapshot[] }
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
    for (const [key, value] of Object.entries(subcollectionSnapshots)) {
      result[key] = value.map((doc) => createModelFromDoc(doc));
    }
  }

  return result as T;
};
