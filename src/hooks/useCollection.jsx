import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot, doc } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [resultados, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const resultCollection = collection(db, collectionName);

        const unsubscribe = onSnapshot(resultCollection, (snapshot) => {
          setResultado(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
          setLoading(false);
        });

        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [collectionName]);

  return { resultados, loading };
};

export const useUnico = (collectionName, id) => {
  const [resultado, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const singleResult = doc(db, collectionName, id);

        const unsubscribe = onSnapshot(singleResult, (snapshot) => {
          setResultado({ id: snapshot.id, ...snapshot.data() });
          setLoading(false);
        });

        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [collectionName, id]);

  return { resultado, loading };
};
