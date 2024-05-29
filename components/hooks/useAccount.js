// hooks/useAccount.js
import { useState, useCallback } from "react";
import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";

const useAccount = (address) => {
  const [page, setPage] = useState("account");

  const handleCopy = useCallback(() => {
    Clipboard.setString(address);
  }, [address]);

  const handleDelete = () => {
    confirmDelete();
  };

  const confirmDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete this account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Delete clicked") },
      ]
    );
  };

  const handlePage = useCallback(() => {
    setPage("send");
  }, []);

  return {
    page,
    setPage,
    handleCopy,
    handleDelete,
    handlePage,
  };
};

export default useAccount;
