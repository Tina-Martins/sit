import { DocumentSnapshot, Timestamp } from "firebase-admin/firestore";

export const createEntityFromDoc = <T>(snapshot: DocumentSnapshot): T => {
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
            result.id = snapshot.id
        }
    }
    return result as T;
}
