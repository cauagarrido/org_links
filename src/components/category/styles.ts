import { colors } from "@/styles/colors"
import { Stylesheet } from "react-native"

export const styles = Stylesheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    name: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400]
    }
})