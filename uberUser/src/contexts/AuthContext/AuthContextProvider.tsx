import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Auth, DataStore } from "aws-amplify";
import { AuthContext } from "./AuthContext";
import { User } from "../../models";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [dbUser, setDbUser] = useState<any | null>(null);
  const sub = authUser?.attributes?.sub;

  async function fetchAuthUser() {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    setAuthUser(user);
  }

  async function addDbUser(dataUser: User) {
    try {
      const user = await DataStore.save(
        new User({
          name: dataUser.name,
          address: dataUser.address,
          lat: dataUser.lat,
          lng: dataUser.lng,
          sub: dataUser.sub,
        })
      );

      setDbUser(user);
    } catch (e) {
      const error: any = e;
      Alert.alert("Error saving user", error.message);
    }
  }

  async function updateDbUser() {
    await DataStore.query(User, (user) => user.sub.eq(sub)).then((users) =>
      setDbUser(users[0])
    );
  }

  function settingDbUser(dataUser: any) {
    setDbUser(dataUser);
  }

  useEffect(() => {
    if (!authUser) {
      fetchAuthUser();
    }
  }, []);

  //useEffect(() => {
  //updateDbUser();
  //}, [sub]);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        dbUser,
        sub,
        addDbUser,
        settingDbUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
