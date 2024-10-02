import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store"
import { fetchOrders } from "@/redux/order";
import { useRouter, useParams } from "next/navigation";

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { replace, push } = useRouter();
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.order);
    const [orders, setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
          try {
              await dispatch(fetchOrders());
            } catch (error) {
              console.error('Failed to fetch orders:', error);
            }
        };
    
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (responseData && responseData?.length > 0) {
            setOrders(responseData);
        }

        if (error) {
            setErrorMessage(error);
        }

    }, [responseData, error]);

    return {
        isLoading: isLoading,
        errorMessage: errorMessage,
        orders: orders,
        setErrorMessage: setErrorMessage,
    }
}