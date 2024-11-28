<script setup>
const style =
    "absolute text-background peer-focus:text-xs text-xs bg-white peer-focus:bg-white peer-focus:px-1 px-1\
    peer-focus:transition-all pointer-events-none peer-focus:-top-2 -top-2 \
    peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-lg \
    peer-placeholder-shown:top-1.5 peer-focus:left-2 left-2"

const {
    placeholder = "Телефон",
    warn,
    stylePhone,
    styleSpanPhone,
} = defineProps(["placeholder", "warn", "stylePhone", "styleSpanPhone"])

const telephone = defineModel()

const vPhone = {
    created: (el) => {
        function replaceNumberForInput(value) {
            let val = ""
            const x = value
                .replace(/\D/g, "")
                .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

            if (x[1] === "7" || x[1] === "8") {
                x[1] = "+7 ("
            } else {
                x[2] = x[1]
                x[1] = "+7 ("
            }

            if (!x[2] && x[1] !== "") {
                val = x[1] === "+7 (" ? x[1] : "+7 (" + x[1]
            } else {
                val = !x[3]
                    ? x[1] + x[2]
                    : x[1] +
                      x[2] +
                      ") " +
                      x[3] +
                      (x[4] ? "-" + x[4] : "") +
                      (x[5] ? "-" + x[5] : "")
            }

            return val
        }

        function replaceNumberForPaste(value) {
            const r = value.replace(/\D/g, "")
            let val = r
            if (val.charAt(0) === "7") {
                val = "8" + val.slice(1)
            }
            return replaceNumberForInput(val)
        }

        el.oninput = function (e) {
            if (!e.isTrusted) {
                return
            }
            this.value = replaceNumberForInput(this.value)
        }

        el.onchange = function () {
            setTimeout(() => {
                const pasteVal = el.value
                this.value = replaceNumberForPaste(pasteVal)
            })
        }
    },
}
</script>
<template>
    <div class="flex flex-col relative group">
        <input
            type="tel"
            v-phone
            v-model="telephone"
            autocomplete="tel"
            :class="stylePhone"
            maxlength="25"
        />
        <span :class="style">{{ placeholder }}</span>
        <span :class="styleSpanPhone">{{ warn }}</span>
    </div>
</template>
