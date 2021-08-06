import React from "react";
import { Button, Text, View } from "react-native";
import { mainStyle as style } from "@styles";
import styles from "./Styles";
import i18n from "../../../languages";
import AddAPhoto from "../../../../assets/svg/add_a_photo.svg";
import getStyles from "../Home/Styles";

export default ({ logout, changeTheme, setLanguage, app }) => {
  const styles = React.useMemo(() => getStyles(app.appTheme), [app.appTheme]);
  return (
    <View style={styles.container}>
      <Text>{i18n.t("more")}</Text>
      <Button title="Logout" onPress={logout} />
      <Text>Change language</Text>
      <Button title="English" onPress={() => setLanguage("en")} />
      <Button title="German" onPress={() => setLanguage("de")} />
      <Button title="Italian" onPress={() => setLanguage("it")} />
      <Button title="Promeni temu" onPress={changeTheme} />
      <AddAPhoto height={60} width={60} />
    </View>
  );
};
