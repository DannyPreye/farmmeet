import React, { useEffect, useState } from "react";

const UseFetch = ({ url }: { url: string }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return { data, loading, error };
};

export default UseFetch;
