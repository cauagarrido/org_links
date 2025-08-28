import {StyleSheet} from "react-native"
import { colors  } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 62,
    },

    title: {
        color: colors.green[900],
        fontSize: 25,
    },
    header: {
        marginBottom: 32,
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    
    },
    logo: {
        width: 32,
        height: 38,
        resizeMode: "contain",
    }
})